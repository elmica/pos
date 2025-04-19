<script lang="ts">
	import { fetchPrinters, printb64 } from '$lib';
	import { onMount } from 'svelte';

	let printers = $state<string[]>([]);
	let selectedPrinter: string | null = $state(null);
	let textContent: string | null = $state(null);

	onMount(async function () {
		printers = await fetchPrinters();
	});

	function printTest() {
		console.log('Printing');
		if (selectedPrinter && textContent) {
			printb64(selectedPrinter, textContent);
		}
	}
</script>

<select class="select" bind:value={selectedPrinter}>
	<option value={null}>Select a printer</option>
	{#each printers as printer}
		<option value={printer}>{printer}</option>
	{/each}
</select>

{#if selectedPrinter}
	<div>
		<textarea placeholder="Printout" class="textarea textarea-xl" bind:value={textContent}
		></textarea>
		<button class="btn btn-accent" onclick={printTest}>Print</button>
	</div>
{/if}
