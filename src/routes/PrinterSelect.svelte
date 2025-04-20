<script lang="ts">
	import { fetchPrinters } from '$lib';
	import PrinterType from './PrinterType.svelte';
	import { onMount } from 'svelte';

	interface PrinterOptions {
		printerType: string;
		printerLabel: string;
	}

	let printers = $state<string[]>([]);
	let printerTypes: PrinterOptions[] = [
		{
			printerType: 'receipt',
			printerLabel: 'Receipt printer'
		},
		{
			printerType: 'sticker',
			printerLabel: 'Sticker printer'
		},
		{
			printerType: 'office',
			printerLabel: 'Office printer'
		}
	];

	onMount(async function () {
		printers = await fetchPrinters();
	});
</script>

<ul class="list bg-base-100 rounded-box shadow-md">
	{#each printerTypes as ptype}
		<PrinterType
			allPrinters={printers}
			printerType={ptype.printerType}
			printerLabel={ptype.printerLabel}
		/>
	{/each}
</ul>
