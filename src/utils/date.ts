import { formatString } from './format-string';
import { isOk } from './is-ok';

export function formatDate(rawDate, format: Format = 'YYYY/MM/DD'): string {
  try {
    if (!rawDate || rawDate === {}) return '';
    const useDate = rawDate instanceof Date ? rawDate : new Date(rawDate);
    switch (format) {
      case 'YYYY/MM/DD':
        return useDate.toLocaleString('ja-JP', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
        });
      case 'YYYY/MM/DD HH:NN':
        return useDate.toLocaleString('ja-JP', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
      case 'YYYY/MM':
        return useDate.toLocaleString('ja-JP', { month: '2-digit', year: 'numeric' });
      case 'YYYY/MM-JP':
        return formatString('{date}月', {
          date: useDate.toLocaleString('ja-JP', { month: '2-digit', year: 'numeric' }),
        });
      case 'MM/DD':
        return useDate.toLocaleString('ja-JP', { month: '2-digit', day: '2-digit' });
      case 'ISO-MIDNIGHT':
        useDate.setHours(0, 0, 0);
        return useDate.toISOString().replace('.000Z', '+00:00');
      case 'YYYYMMDD':
        return `${useDate.getFullYear()}${('00' + (useDate.getMonth() + 1)).slice(-2)}${(
          '00' + useDate.getDate()
        ).slice(-2)}`;
      default:
        return useDate.toLocaleString('ja-JP', { hour12: false });
    }
  } catch (e) {
    return '';
  }
}

type Format =
  | '24hour'
  | 'MM/DD'
  | 'YYYY/MM/DD'
  | 'YYYY/MM'
  | 'YYYY/MM-JP'
  | 'YYYY/MM/DD HH:NN'
  | 'ISO-MIDNIGHT'
  | 'YYYYMMDD';

export function toDate(param: string): Date {
  try {
    if (!isOk(param)) return;
    const newDate = new Date(param);
    if (isNaN(newDate.getTime())) return;
    return newDate;
  } catch (e) {
    return;
  }
}

export function getLastDate(date: Date) {
  if (!date) return;
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0, 0);
}

export function getFirstDate(date: Date) {
  if (!date) return;
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
}

export function deltaDate(targetDate: Date, years = 0, months = 0, days = 0) {
  if (!targetDate) return;
  return new Date(
    targetDate.getFullYear() + years,
    targetDate.getMonth() + months,
    Math.min(
      targetDate.getDate() + days,
      new Date(targetDate.getFullYear() + years, targetDate.getMonth() + months + 1, 0).getDate(),
    ),
  );
}
