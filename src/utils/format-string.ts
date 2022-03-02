import { isOk } from './is-ok';

export function formatString(input: string, params: { [key: string]: string }): string {
  let output = input;
  if (isOk(input) && isOk(params)) {
    Object.keys(params).forEach((key) => {
      output = output.replace(new RegExp('\\{' + key + '\\}', 'gi'), params[key]);
    });
  }

  return output;
}
