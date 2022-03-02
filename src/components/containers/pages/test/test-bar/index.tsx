import { GRAPH_HEIGHT } from '@app-settings';
import globalStyles from '@globalStyles/global.scss';
import { IGraphConfig } from '@models/graph-config';
import { formatNumber } from '@utils/format-number';
import { isOk } from '@utils/is-ok';
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { Options } from 'highcharts/highstock';
import React, { useEffect, useMemo, useRef } from 'react';

export const TestBarGraph: React.FC<Props> = ({
  graphConfig,
  graphHeight,
  dataFormatter,
  tooltipMode,
  title,
}) => {
  const chartComponent = useRef(null);

  useEffect(() => {
    chartComponent.current.chart.series.forEach(function (s) {
      s.legendItem.on('mouseover', function () {
        console.log(`[${title}] Series legend mouseover`, this);
      });
    });
  }, [title]);

  const chartOptions: Options = useMemo(() => {
    if (!isOk(graphConfig?.series) || !isOk(graphConfig?.categories)) return;
    const options: Options = {
      chart: {
        type: 'column',
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
              borderWidth: 1,
              borderColor: globalStyles.gray3,
              color: globalStyles.gray1,
              backgroundColor: globalStyles.bg2,
              verticalAlign: 'top',
              y: -24,
              formatter: function () {
                return `<b>${this?.point?.series?.name}</b>: ${dataFormatter(this?.point?.y)}`;
              },
            },
            events: {
              mouseOver: function () {
                if (this['finishedAnimating']) {
                  this.update({
                    dataLabels: {
                      enabled: true,
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
                      enabled: false,
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
      series: graphConfig?.series,
    };
    return options;
  }, [graphHeight, dataFormatter, tooltipMode, graphConfig?.series, graphConfig?.categories]);

  if (!isOk(chartOptions)) return <React.Fragment />;

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} ref={chartComponent} />;
};

TestBarGraph.defaultProps = {
  graphHeight: GRAPH_HEIGHT,
  dataFormatter: formatNumber,
  tooltipMode: 'multiple',
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
