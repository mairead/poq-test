const path = require("path");

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = async (phase) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      domains: ["i8.amplience.net"],
    },
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ["en-GB"],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: "en-GB",
    },
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
  };

  return withPlugins(
    [
      [
        withTM,
        {
          pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
        },
      ],
      [withBundleAnalyzer],
    ],
    nextConfig,
  )(phase, {});
};
