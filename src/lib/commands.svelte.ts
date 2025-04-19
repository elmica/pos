import { invoke } from '@tauri-apps/api/core';

export const preventDefault = <T extends Event>(fn: (e: T) => void): ((e: T) => void) => {
	return (e: T) => {
		e.preventDefault();
		fn(e);
	};
};

export async function fetchPrinters() {
	let printers = await invoke<string[]>('list_printers');
	return printers;
}

//printer, data
export async function printb64(printer: string, data: string) {
	let b64_string = btoa(data);

	let printResult = await invoke<string>('print_base64', {
		printer_name: printer,
		b64_string: b64_string
	});

	console.log(printResult);
	return printResult;
}
