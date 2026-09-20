// Minimal Docusaurus site — cairn publishes project docs into docs/ here.
// The docs/ folder IS the store; build/deploy stays a human call.
// Author(s): John Reed

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "cairn docs",
  tagline: "docs published by cairn",
  // Project page on a user account: the site lives under /<repo>/.
  // Getting baseUrl wrong is the usual cause of a page that loads with
  // no styling, so these two move together with the repo name.
  url: "https://eventually-consistent-code.github.io",
  baseUrl: "/cairn-docs/",
  organizationName: "eventually-consistent-code",
  projectName: "cairn-docs",

  // cairn-published pages may cross-link before every neighbor exists —
  // warn, don't fail the build.
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
        blog: false,
        pages: false,
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: "cairn docs",
    },
  },
};

module.exports = config;
