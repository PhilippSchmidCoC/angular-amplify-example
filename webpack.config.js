const purgeCSS = require("@fullhuman/postcss-purgecss")({
  /**
   * Specify the paths to all of the template files in your project
   */
  content: ["./src/**/*.html"],

  /**
   * Include any special characters you're using in this regular expression
   */
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = (config, _) => {
  console.log(`Using ${config.mode} mode`);

  config.module.rules.push({
    test: /\.scss$/,
    loader: "postcss-loader",
    options: {
      ident: "postcss",
      syntax: "postcss-scss",
      plugins: () => [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
        require("cssnano"),
        require("postcss-custom-properties"),
        require("autoprefixer"),
        ...(config.mode === "production" ? [purgeCSS] : [])
      ]
    }
  });

  return config;
};
