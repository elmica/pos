<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchPrinters, printb64 } from '$lib';
	import PrinterSelect from './PrinterSelect.svelte';
	import FolderListener from './FolderListener.svelte';
	import PrintTest from './PrintTest.svelte';
	//receipt_home
</script>

<div class="bg-base-200 min-h-screen p-3">
	<div class="container">
		<PrinterSelect />
		<FolderListener />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
</style>
