import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import WebpackPrettierPlugin from 'webpack-prettier-plugin';
import { getRuleBabel } from './.webpack/babel';
import { getRuleCss } from './.webpack/css';
import { getExtensions } from './.webpack/extensions';
import { getRuleHtml } from './.webpack/html';
import { getRuleJson } from './.webpack/json';
import { TEnvironmentMode } from './.webpack/models';
import { getRuleSass } from './.webpack/sass';
import { getRuleStatics } from './.webpack/statics';
import { getRuleTypeScript } from './.webpack/typescript';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export const getBaseConfig = (env: TEnvironmentMode): Configuration => ({
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      getRuleBabel(),
      getRuleJson(),
      getRuleTypeScript(),
      getRuleSass(env),
      getRuleCss(env),
      getRuleStatics(),
      getRuleHtml(),
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
    extensions: getExtensions(),
    fallback: { crypto: false },
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.ts', '.js', '.tsx'],
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template/index.html',
      title: 'EY Farm to Table',
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new WebpackPrettierPlugin(),
  ],
});
