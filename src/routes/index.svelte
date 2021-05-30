<script lang="js">
  import { base } from '$app/paths';
  import { dev } from '$app/env';

  const metaTitle = 'Index - Achievements';
  const metaDescription = 'Index page to check and manage the achievements of your IT team';
  const assetsBase = dev ? '' : base;
  const url = `${assetsBase}/`;
</script>

<svelte:head>
  <!-- Common images -->
  <link rel="icon" href="{assetsBase}/favicon/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="{assetsBase}/favicon/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="{assetsBase}/favicon/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="{assetsBase}/favicon/android-chrome-192x192.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="{assetsBase}/favicon/favicon-16x16.png" />
  {#if !dev}
    <link rel="manifest" href="{assetsBase}/site.webmanifest" />
  {/if}
  <link rel="mask-icon" href="{assetsBase}/favicon/safari-pinned-tab.svg" color="#ffb300" />

  <!-- Specific meta for this page -->
  <link href="{url}" rel="canonical" />
  <meta content="{url}" property="og:url" />
  <title>{metaTitle}</title>
  <meta content="{metaTitle}" property="og:title" />
  <meta content="{metaTitle}" property="og:image:alt" />
  <meta content="{metaTitle}" name="twitter:title" />
  <meta content="{metaTitle}" name="twitter:image:alt" />
  <meta content="{metaTitle}" itemprop="name" />
  <meta content="{metaDescription}" name="description" />
  <meta content="{metaDescription}" property="og:description" />
  <meta content="{metaDescription}" name="twitter:description" />
  <meta content="{metaDescription}" itemprop="description" />
  <meta content="{base}/favicon/prize-1280.png" property="og:image" />
  <meta content="{base}/favicon/prize-1280.png" property="og:image:url" />
  <meta content="{base}/favicon/prize-1280.png" property="og:image:secure_url" />
  <meta content="{base}/favicon/prize-1280.png" name="twitter:image" />
  <meta content="{base}/favicon/prize-1280.png" itemprop="image" />
  <meta content="1280" property="og:image:width" />
  <meta content="1280" property="og:image:height" />
  <meta content="image/png" property="og:image:type" />
  <meta content="summary_large_image" name="twitter:card" />
</svelte:head>

<h2>Index</h2>
