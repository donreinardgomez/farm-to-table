import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { TEnvironmentMode } from './models';

export function getRuleCss(env: TEnvironmentMode): RuleSetRule {
  const devMode = env === 'development';

  return {
    test: /\.css$/,
    use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
  };
}
