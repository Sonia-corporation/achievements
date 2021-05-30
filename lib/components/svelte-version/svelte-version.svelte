<!-- As a module to only log once -->
<script context="module">
  import { VERSION } from 'svelte/compiler';
  import { LoggerService } from '../../features/logger/services/logger.service';

  LoggerService.log(`Using Svelte ${VERSION}`);
</script>
