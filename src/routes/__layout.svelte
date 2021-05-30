<script lang="js">
  import { base } from '$app/paths';
  import SvelteVersion from '../../lib/components/svelte-version/svelte-version.svelte';
</script>

<!-- Log the svelte version -->
<SvelteVersion />

<!-- Common page to all routes -->
<h1>Achievements</h1>
<nav>
  <a href="{base}/">Index</a>
  <a href="{base}/home">Home</a>
</nav>

<slot />
