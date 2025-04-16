<script lang="ts">
	import { onMount } from 'svelte';

	let things = $state([]);

	// Ensure execution only on the browser, after the pouchdb script has loaded.
	onMount(async function () {
		const db = new PouchDB('http://admin:Music1234@localhost:5984/printer_database');
		//const db = new PouchDB('http://micael:Music1234%40@69.48.179.192:5984/online_orders');
		const changes = db
			.changes({
				//since: 'now',
				live: true,
				include_docs: true
			})
			.on('change', function (change) {
				things.push(change.doc);
			})
			.on('complete', function (info) {
				console.log(info);
				// changes() was canceled
			})
			.on('error', function (err) {
				console.log(err);
			});
		return () => {
			changes.cancel();
		};
	});
</script>

<div class="hero bg-base-200 min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-md">
			{#each things as thing}
				<p>{thing?.order_data?.handoff_provider}</p>
			{/each}
		</div>
	</div>
</div>
