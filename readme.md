# Webpack Nodemon Plugin

This plugin is useful when you want to bundle your node.js application.
It runs the output bundle after webpack finishes compiling it.

Also supports watching and the node inspector.

## Installation

You can install this package with the following command:

```sh
npm install webpack-nodemon-plugin
```

## Usage

```ts
import { resolve } from 'path';
import WebpackNodemonPlugin from 'webpack-nodemon-plugin';

module.exports = {
  plugins: [
    // The first argument is the node inspector port.
    // The second argument is the path to the output file
    new WebpackNodemonPlugin(40001, resolve('build', 'app.js')),
  ],
  entry: './app',
  output: { path: 'build', filename: 'app.js' },
  };
};
```

## Typings

The typescript type definitions are also available and are installed via npm.

## License
This project is licensed under the
[MIT license](https://github.com/alitaheri/webpack-nodemon-plugin/blob/master/LICENSE).