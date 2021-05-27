import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [`.svelte`],
  kit: {
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
      assets: ``,
      base: ``,
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
  preprocess: preprocess(),
};

export default config;
