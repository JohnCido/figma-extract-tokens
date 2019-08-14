/**
 * Copyright (c) 2019 John Cido
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import HtmlWebpackPlugin from 'html-webpack-plugin'
// @ts-ignore
import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin'
import {
  resolve,
} from 'path'
import {
  Configuration,
} from 'webpack'

interface IArgv {
  mode?: 'development' | 'production'
}

const config: (env: string, argv: IArgv) => Configuration = (_, argv) => {
  const mode = argv.mode || 'development'
  const isDev = mode === 'development'

  return {
    devtool: isDev ? 'inline-source-map' : false,

    entry: {
      panel: './src/panel.tsx',
      main: './src/main.ts',
    },
    output: {
      filename: '[name].js',
      path: resolve(__dirname, 'dist'),
    },

    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|svg)$/,
          use: 'url-loader',
        },
      ],
    },

    resolve: {
      extensions: [
        '.ts',
        '.tsx',
        '.js',
        '.jsx',
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/panel.html',
        filename: 'panel.html',
        chunks: [
          'ui',
        ],
        // @ts-ignore
        inlineSource: '.(js|css)$',
      }),
      new HtmlWebpackInlineSourcePlugin(),
    ],
  }
}

export default config
