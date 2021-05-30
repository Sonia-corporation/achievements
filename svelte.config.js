import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import postcssAutoreset from 'postcss-autoreset';
import postcssInitial from 'postcss-initial';
import preprocess from 'svelte-preprocess';
import tailwindcss from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [`.svelte`],
  kit: {
    adapter: adapter({
      assets: `build`,
      pages: `build`,
    }),
    amp: false,
    appDir: `_app`,
    files: {
      assets: `static`,
      hooks: `src/hooks`,
      lib: `src/lib`,
      routes: `src/routes`,
      serviceWorker: `src/service-worker`,
      template: `src/app.html`,
    },
    floc: false,
    hydrate: true,
    paths: {
      assets: `/achievements`,
      base: `/achievements`,
    },
    prerender: {
      crawl: true,
      enabled: true,
      force: false,
      pages: [`*`],
    },
    router: true,
    ssr: true,
    target: `#svelte`,
    trailingSlash: `never`,
  },
  preprocess: preprocess({
    postcss: {
      plugins: [postcssAutoreset, postcssInitial, tailwindcss, autoprefixer],
    },
    scss: {
      prependData: `@import 'lib/styles/imports.scss';`,
    },
  }),
};

export default config;
