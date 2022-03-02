import globalStyles from '@/components/global-styles/global.scss';
import { GRAPH_DATA_LABELS_TIMEOUT, GRAPH_HEIGHT } from '@app-settings';
import { IGraphConfig } from '@models/graph-config';
import { formatNumber } from '@utils/format-number';
import { isOk } from '@utils/is-ok';
import { TextDisplay } from '@visuals/text-display';
import { TipsButton } from '@visuals/tips-button';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useEffect, useMemo, useRef } from 'react';
import styles from './style.scss';

export const LineGraph: React.FC<Props> = ({
  title,
  graphHeight,
  graphConfig,
  tooltipMode,
  dataFormatter,
  onTipsButtonClick,
}) => {
  const chartComponent = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      chartComponent.current.chart.series.forEach(function (s) {
        setTimeout(
          () =>
            s.legendItem.on('mouseover', () => {
              s.points.forEach((p) => {
                p.dataLabel.css({
                  opacity: 1,
                });
              });
            }),
          GRAPH_DATA_LABELS_TIMEOUT,
        );
      });
      chartComponent.current.chart.series.forEach(function (s) {
        setTimeout(
          () =>
            s.legendItem.on('mouseout', () => {
              s.points.forEach((p) => {
                p.dataLabel.css({
                  opacity: 0,
                });
              });
            }),
          GRAPH_DATA_LABELS_TIMEOUT,
        );
      });
    }, GRAPH_DATA_LABELS_TIMEOUT);
  }, []);

  const chartOptions: Options = useMemo(() => {
    if (!isOk(graphConfig?.series) || !isOk(graphConfig?.categories)) return;
    return {
      chart: {
        type: 'line',
        height: graphHeight,
        marginRight: 200,
        spacingLeft: 0,
        marginTop: 50,
        marginLeft: 70,
      },
      title: {
        text: '',
      },
      credits: { enabled: false },
      plotOptions: {
        series: {
          ...(tooltipMode === 'multiple' && {
            dataLabels: {
              enabled: true,
              borderWidth: 1,
              borderColor: globalStyles.gray3,
              color: globalStyles.gray1,
              backgroundColor: globalStyles.bg2,
              verticalAlign: 'top',
              y: -24,
              formatter: function () {
                return `<b>${this?.point?.series?.name}</b>: ${dataFormatter(this?.point?.y)}`;
              },
              style: {
                opacity: 0,
              },
            },
            events: {
              mouseOver: function () {
                if (this['finishedAnimating']) {
                  this.update({
                    dataLabels: {
                      style: {
                        opacity: 1,
                      },
                    },
                    type: null,
                  });
                }
              },
              mouseOut: function () {
                if (this['finishedAnimating']) {
                  this.update({
                    dataLabels: {
                      style: {
                        opacity: 0,
                      },
                    },
                    type: null,
                  });
                }
              },
            },
          }),
          stacking: 'normal',
          states: {
            hover: {
              brightness: 0,
              borderWidth: 1,
              borderColor: globalStyles.gray1,
            },
          },
        },
      },
      yAxis: {
        allowDecimals: true,
        labels: {
          formatter: function () {
            return String(dataFormatter(Number(this.value)));
          },
        },
        title: {
          align: 'high',
          offset: 0,
          text: graphConfig?.yAxisLabel,
          rotation: 0,
          y: -20,
        },
      },
      xAxis: {
        categories: graphConfig?.categories,
      },
      tooltip: {
        enabled: tooltipMode === 'singular',
        xDateFormat: `%Y/%m`,
        borderWidth: 1,
        borderColor: globalStyles.gray3,
        backgroundColor: globalStyles.bg2,
        formatter: function () {
          return `<b>${this.series.name}</b>: ${dataFormatter(this.y)}`;
        },
      },
      legend: {
        floating: true,
        align: 'right',
        verticalAlign: 'middle',
        itemMarginBottom: 5,
        width: 210,
        x: 25,
        itemWidth: 200,
        symbolWidth: 0.1,
        symbolHeight: 0.1,
        squareSymbol: false,
        useHTML: true,
        labelFormatter: function () {
          return `<div class="${styles.legendWrapper}"><span class="${styles.circle}" style="--bg-color:${this.options.color};"></span> ${this.name}</div>`;
        },
      },
      series: graphConfig?.series,
    };
  }, [graphConfig, graphHeight, tooltipMode, dataFormatter]);

  if (!isOk(chartOptions)) return <React.Fragment />;

  return (
    <article className={styles.lineGraph}>
      <div className={styles.titleWrapper}>
        {isOk(title) && <TextDisplay weight='bold'>{title}</TextDisplay>}
      </div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} ref={chartComponent} />
      {isOk(onTipsButtonClick) && (
        <TipsButton className={styles.tips} onClick={onTipsButtonClick} />
      )}
    </article>
  );
};

LineGraph.defaultProps = {
  graphHeight: GRAPH_HEIGHT,
  dataFormatter: formatNumber,
  tooltipMode: 'multiple',
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  graphConfig: IGraphConfig;
  title: string;
  graphHeight?: string;
  tooltipMode?: 'singular' | 'multiple';
}

interface IDispatchProps {
  dataFormatter?: (data: number) => void;
  onTipsButtonClick?: () => void;
}
