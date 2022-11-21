/* eslint-disable import/no-anonymous-default-export */
export default {
  projectLink: "https://github.com/dudykr/stc-public",
  docsRepositoryBase: "https://github.com/dudykr/stc-public/blob/main",
  titleSuffix: " - STC",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  unstable_stork: true,
  floatTOC: true,
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Dudy.`,
  // footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span>STC</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="DevMap: The fastest type checker in the world"
      />
      <meta name="og:title" content="STC: Speedy Type Checker" />
    </>
  ),
};
