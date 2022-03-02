import { isOk } from './is-ok';

export function formatNumber(num: number, format: TNumberFormat = 'locale', precision = 2): string {
  if (!isOk(num)) return;
  switch (format) {
    case 'percentage':
      return `${(num * 100).toFixed(precision)}%`;
    case 'multiplier':
      return `${num}x`;
    default:
      return num.toLocaleString();
  }
}

export type TNumberFormat = 'percentage' | 'locale' | 'multiplier';

export function numToString(num: number): string {
  return String(num || 0);
}
