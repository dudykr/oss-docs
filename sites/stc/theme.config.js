import { useConfig } from "nextra-theme-docs";

const Head = () => {
  const { frontMatter, title } = useConfig();
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Favicons, meta */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content={
          frontMatter?.description ||
          "stc is a new TypeScript Type Checker written in rust"
        }
      />
      <meta
        name="og:description"
        content={
          frontMatter.description ||
          "stc is a new TypeScript Type Checker written in rust"
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dudy_kr" />
      
      <meta
        name="og:title"
        content={title ? title + " – stc" : "STC: Speedy Type Checker"}
      />
      
      
      <meta name="apple-mobile-web-app-title" content="stc" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
        media="print"
        onLoad="this.media='all'"
      />
    </>
  );
};
/** @type import('nextra-theme-docs').DocsThemeConfig */
export default {
  project: {
    link: "https://github.com/dudykr/oss-docs",
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  docsRepositoryBase: "https://github.com/dudykr/oss-docs/blob/main",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – SWC",
    };
  },
  toc: {
    float: true,
  },
  head: <Head />,
  logo: () => (
    <>
      <span >
        stc
      </span>
    </>
  ),
  footer: {
    text: () => (
       <>
      {`MIT ${new Date().getFullYear()} © Dudy.`}
      </>
    ),
  },

  navigation:{
    prev:true,next:true,
  }
,

};
