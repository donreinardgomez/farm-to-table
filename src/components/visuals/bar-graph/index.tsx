import globalStyles from '@/components/global-styles/global.scss';
import { DEAD_LEGEND, GRAPH_DATA_LABELS_TIMEOUT, GRAPH_HEIGHT } from '@app-settings';
import { IGraphConfig } from '@models/graph-config';
import { formatNumber } from '@utils/format-number';
import { isOk } from '@utils/is-ok';
import { TextDisplay } from '@visuals/text-display';
import { TipsButton } from '@visuals/tips-button';
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { Options } from 'highcharts/highstock';
import React, { useEffect, useMemo, useRef } from 'react';
import styles from './style.scss';

export const BarGraph: React.FC<Props> = ({
  graphHeight,
  graphConfig,
  orientation,
  title,
  legendPosition,
  leftLegendColumnCount,
  tooltipMode,
  dataFormatter,
  onTipsButtonClick,
  prefixObject,
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
    const options: Options = {
      chart: {
        ...(legendPosition === 'left' &&
          (leftLegendColumnCount === 2
            ? { marginLeft: 340, marginTop: 50 }
            : { marginLeft: 450, marginTop: 50 })),
        ...(legendPosition === 'top' && { marginLeft: 80, marginTop: 80 }),
        type: orientation === 'vertical' ? 'column' : 'bar',
        height: graphHeight,
      },
      title: {
        text: '',
      },
      credits: { enabled: false },
      xAxis: {
        categories: graphConfig?.categories,
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
          offset: 8,
          text: graphConfig?.yAxisLabel,
          rotation: 0,
          y: -20,
        },
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
      plotOptions: {
        column: {
          stacking: 'normal',
          pointPadding: 0,
          maxPointWidth: 72,
          borderWidth: 1,
          borderColor: globalStyles.white,
        },
        series: {
          stacking: 'normal',
          threshold: null,
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
                      allowOverlap: true,
                    },
                    borderWidth: 2,
                    borderColor: globalStyles.gray1,
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
                      allowOverlap: false,
                    },
                    borderWidth: 1,
                    borderColor: globalStyles.white,
                    type: null,
                  });
                }
              },
            },
          }),
          states: {
            hover: {
              brightness: 0,
            },
          },
        },
      },
      legend: {
        layout: 'horizontal',
        align: 'left',
        itemMarginBottom: 5,
        symbolRadius: 0,
        symbolWidth: 0.1,
        symbolHeight: 0.1,
        squareSymbol: false,
        useHTML: true,
        labelFormatter: function () {
          return `<div class="${styles.legendWrapper}"><span style="--bg-color:${this.options.color};"></span> ${this.name}</div>`;
        },
        ...(legendPosition === 'left' &&
          (leftLegendColumnCount === 2
            ? { floating: false, width: 240, itemWidth: 120, x: 25, verticalAlign: 'middle' }
            : { floating: false, width: 380, itemWidth: 110, x: 25, verticalAlign: 'middle' })),
        ...(legendPosition === 'top' && {
          floating: true,
          verticalAlign: 'top',
        }),
      },
      series: [
        ...graphConfig?.series,
        ...(isOk(graphConfig?.deadLegendIndexes)
          ? graphConfig?.deadLegendIndexes.map((i) => ({
              ...DEAD_LEGEND,
              legendIndex: i,
              className: styles.deadLegend,
            }))
          : []),
      ],
    };
    return options;
  }, [
    graphHeight,
    orientation,
    graphConfig?.categories,
    graphConfig?.deadLegendIndexes,
    graphConfig?.series,
    graphConfig?.yAxisLabel,
    legendPosition,
    leftLegendColumnCount,
    tooltipMode,
    dataFormatter,
  ]);

  if (!isOk(chartOptions)) return <React.Fragment />;

  return (
    <article className={styles.barGraph}>
      {isOk(prefixObject) && <div>{prefixObject}</div>}
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

BarGraph.defaultProps = {
  graphHeight: GRAPH_HEIGHT,
  dataFormatter: formatNumber,
  orientation: 'vertical',
  legendPosition: 'top',
  tooltipMode: 'multiple',
  leftLegendColumnCount: 2,
};

export type Props = IStateProps & IDispatchProps;

interface IStateProps {
  graphConfig: IGraphConfig;
  title: string;
  graphHeight?: string;
  orientation?: 'horizontal' | 'vertical';
  legendPosition?: 'left' | 'top';
  leftLegendColumnCount?: 2 | 3;
  tooltipMode?: 'singular' | 'multiple';
  prefixObject?: React.ReactNode;
}

interface IDispatchProps {
  dataFormatter?: (data: number) => void;
  onTipsButtonClick?: () => void;
}
