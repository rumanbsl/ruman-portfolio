const StyleLintWebpackPlugin = require("stylelint-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  siteName: "Ruman's Portfolio",
  icon: "src/assets/favicon.png",
  plugins: [
    { use: "gridsome-plugin-typescript" },
    { use: "gridsome-plugin-tailwindcss" },
    {
      use: "gridsome-plugin-svg",
      options: {
      // default options below
        goesBothWays: false,
        svgo: [
          { removeTitle: false },
          {
            prefixIds: {
              // @ts-ignore
              // eslint-disable-next-line no-undef
              prefix: (_, { path }) => basename(path, ".svg"),
              delim: "-",
            },
          },
          { removeDesc: false },
          { removeViewBox: false },
          { sortAttrs: true },
        ],
      },
    },
  ],
  port: 1234,
  configureWebpack: {
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.(js|ts|vue)$/,
          include: resolve(__dirname, "./src"),
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: { configFile: ".eslintrc.json" },
        },
      ],
    },
    plugins: [
      new StyleLintWebpackPlugin({
        configFile: "./.stylelintrc",
        files: ["src/**/*.scss", "src/**/*.vue"],
      }),
    ],
  },
};
