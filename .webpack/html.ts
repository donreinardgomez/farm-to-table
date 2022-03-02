import { RuleSetRule } from 'webpack';

export const getRuleHtml = (): RuleSetRule => ({
  test: /\.html$/i,
  exclude: [/node_modules/, /template/, /build/],
  use: {
    loader: 'html-loader',
  },
});
