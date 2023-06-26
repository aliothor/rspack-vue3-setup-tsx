const { VueLoaderPlugin } = require("vue-loader");

/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  entry: {
    main: "./src/main.tsx",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          // experimentalInlineMatchResource: true
        },
      },
      {
        test: /\.[j|t]sx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["@vue/babel-plugin-jsx"],
              // presets: ["@babel/preset-typescript"]
              presets: [
                [
                  "@babel/preset-typescript",
                  {
                    allExtensions: true,
                    isTSX: true,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
  builtins: {
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
