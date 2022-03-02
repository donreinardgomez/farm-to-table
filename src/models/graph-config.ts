import { SeriesOptionsType } from 'highcharts';

export interface IGraphConfig {
  categories?: string[];
  series?: SeriesOptionsType[];
  deadLegendIndexes?: number[];
  yAxisLabel?: string;
}
