<!-- As a module to only log once -->
<script lang="js" context="module">
  import { VERSION } from 'svelte/compiler';
  import { LoggerService } from '../../features/logger/services/logger.service';

  LoggerService.log(`Using Svelte ${VERSION}`);
</script>
