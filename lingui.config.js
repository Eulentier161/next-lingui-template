/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["de", "en", "pseudo"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "<rootDir>/src/i18n/locales/{locale}",
      include: ["src"],
    },
  ],
};
