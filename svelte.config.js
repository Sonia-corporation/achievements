import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';

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
    target: `#achievements-app`,
    trailingSlash: `never`,
  },
  preprocess: preprocess({
    postcss: {
      plugins: [autoprefixer],
    },
  }),
};

export default config;
