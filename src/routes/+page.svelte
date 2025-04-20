<script lang="ts">
	import ThemeSelect from '$lib/theme-select.svelte';
	import { onMount } from 'svelte';
	import PrinterSelect from './PrinterSelect.svelte';
	import FolderListener from './FolderListener.svelte';
</script>

<div class="bg-base-200 min-h-screen p-3">
	<ThemeSelect />
	<div class="container card bg-base-100 shadow-sm">
		<div class="card-body">
			<PrinterSelect />
			<FolderListener />
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
</style>
