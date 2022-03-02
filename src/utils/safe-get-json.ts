import { isOk } from './is-ok';

export function safeGetJSON(targetJsonString: string) {
  if (!isOk(targetJsonString)) return;
  try {
    return JSON.parse(targetJsonString);
  } catch {
    return;
  }
}
