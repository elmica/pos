<script lang="ts">
	import { fetchPrinters, printb64, printerTest } from '$lib';
	import { onMount } from 'svelte';

	let printers = $state<string[]>([]);
	let selectedReceipt: string | null = $state(null);
	let selectedSticker: string | null = $state(null);

	let selectedOffice: string | null = $state(null);

	let textContent: string | null = $state(null);

	onMount(async function () {
		printers = await fetchPrinters();
	});

	function printTest(printerType: string) {
		if (selectedSticker && printerType === 'sticker') {
			printerTest(selectedSticker, printerType);
		}

		if (selectedReceipt && printerType === 'receipt') {
			printerTest(selectedReceipt, printerType);
		}

		if (selectedOffice && printerType === 'office') {
			printerTest(selectedOffice, printerType);
		}
	}
</script>

<ul class="list bg-base-100 rounded-box shadow-md">
	<li class="list-row">
		<div class="text-4xl font-thin opacity-30 tabular-nums">Receipt</div>
		<div class="list-col-grow">
			<select class="select w-full" bind:value={selectedReceipt}>
				<option value={null}>Select a printer</option>
				{#each printers as printer}
					<option value={printer}>{printer}</option>
				{/each}
			</select>
		</div>
		<button class="btn btn-square btn-ghost" onclick={() => printTest('receipt')}>
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
	<li class="list-row">
		<div class="text-4xl font-thin opacity-30 tabular-nums">Sticker</div>
		<div class="list-col-grow">
			<select class="select w-full" bind:value={selectedSticker}>
				<option value={null}>Select a printer</option>
				{#each printers as printer}
					<option value={printer}>{printer}</option>
				{/each}
			</select>
		</div>
		<button class="btn btn-square btn-ghost" onclick={() => printTest('sticker')}>
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
	<li class="list-row">
		<div class="text-4xl font-thin opacity-30 tabular-nums">Office</div>
		<div class="list-col-grow">
			<select class="select w-full" bind:value={selectedOffice}>
				<option value={null}>Select a printer</option>
				{#each printers as printer}
					<option value={printer}>{printer}</option>
				{/each}
			</select>
		</div>
		<button class="btn btn-square btn-ghost" onclick={() => printTest('office')}>
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
</ul>
