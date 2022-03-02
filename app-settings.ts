import globalStyles from '@globalStyles/global.scss';
import { SeriesOptionsType } from 'highcharts';

export const DEFAULT_DASHBOARD_GRAPH_YEAR_TRAVERSAL_LIMIT = 1;
export const DEFAULT_DASHBOARD_GRAPH_YEAR_VIEW_LIMIT = 5;
export const GRAPH_DATA_LABELS_TIMEOUT = 100;
export const GRAPH_HEIGHT = '400px';
export const DEAD_LEGEND: SeriesOptionsType = {
  name: '',
  data: [],
  stack: 'stackDead',
  visible: false,
  type: null,
  color: globalStyles.white,
};
export const MAX_YEARS = 10;
export const SNACKBAR_AUTOHIDE_INTERVAL = 3000;
export const DELIMITER = '¥n';
