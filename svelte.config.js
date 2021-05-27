import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    target: `#svelte`,
  },
  preprocess: preprocess(),
};

export default config;
