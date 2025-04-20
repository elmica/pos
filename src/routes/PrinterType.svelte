<script lang="ts">
	import { open } from '@tauri-apps/plugin-dialog';
	import { printFile } from '$lib';

	let { allPrinters, printerType, printerLabel } = $props();
	let selectedPrinter: string | null = $state(null);

	async function printTest() {
		// Open a dialog
		const file = await open({
			multiple: false,
			directory: false
		});

		if (file && selectedPrinter) {
			let res = await printFile(selectedPrinter, file);
			console.log(res);
		}
	}
</script>

<li class="list-row">
	<div class={`text-2xl ${selectedPrinter ? 'text-success' : 'text-error'}  tabular-nums`}>
		{printerLabel}
	</div>
	<div class="list-col-grow">
		<select class="select w-full" bind:value={selectedPrinter}>
			<option value={null}>Select a printer</option>
			{#each allPrinters as printer}
				<option value={printer}>{printer}</option>
			{/each}
		</select>
	</div>
	<button class="btn btn-square btn-ghost" disabled={!selectedPrinter} onclick={() => printTest()}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z"
			/>
		</svg>
	</button>
</li>
