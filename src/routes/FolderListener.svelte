<script lang="ts">
	import { open } from '@tauri-apps/plugin-dialog';

	interface DirectoryDoc extends PouchDB.Core.IdMeta {
		_id: string;
		_rev?: string;
		type: 'directory';
		name: string;
	}

	let selectedDirectory: string | null = $state(null);

	async function picker() {
		selectedDirectory = await open({
			multiple: false,
			directory: true
		});
	}
</script>

<button class="btn btn-accent" onclick={picker}
	>{selectedDirectory ? selectedDirectory : 'Select a directory'}</button
>
