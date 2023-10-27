// @ts-check

const { VueLoaderPlugin } = require("vue-loader");

/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  entry: {
    main: "./src/main.ts",
  },
  output: {
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          experimentalInlineMatchResource: true
        },
      },
      {
        test: /\.[j|t]sx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-typescript",
                  { allExtensions: true, isTSX: true }
                ]
              ],
              plugins: ["@vue/babel-plugin-jsx"]
            }
          }
        ],
      },
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
  mode: "production",
  target: "web",
  devtool: false,
  builtins: {
    progress: true,
    html: [
      {
        template: "./index.html",
      },
    ],
    define: {
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    },
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = config;
