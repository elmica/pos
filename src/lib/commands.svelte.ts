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

export async function printerTest(printer: string, printerType: string) {
	console.log('printer test');

	if (printerType == 'receipt') {
		let receiptSample =
			'QkAhRUINCg0KDQoNCiAgICAgICAgICAgICoqKiBTYW5kd2ljaCAqKioNCj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0NClNlcnZlcjogSmVubiAgICAgICAgICAgICAgICAgICBTdGF0aW9uIDMNCiFFICAgICAgICAgICAgICAgICBUbyBHbw0KRSE3LzI1LzIwMjQgICAgICAgICAgICAgICAgICAgIDEwOjIyOjA3IFBNDQo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09DQohRVRpbWU6IDEwOjIxOjE3IFBNDQpFIUN1c3RvbWVyIE5hbWU6IFRFU1QNCi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0NCiExICAgUGlja2xlcyBmb3IgU2FuZHdpY2hlcyAgICAgICAgICAgICAgDQohITEgICBQaWNrbGVzIGZvciBTYW5kd2ljaGVzICAgICAgICAgICAgICANCiENCioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioNCiFFICAgICAgICAgICAgIFRpY2tldCAjOiAxNTINCkUhICAgICAgICAgICAgIE9yZGVyICM6IDYwNzkyDQoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqDQohRUINCg0KDQoNCg0KDQoNCg0KbQ==';

		let printResult = await invoke<string>('print_base64', {
			printer_name: printer,
			b64_string: receiptSample
		});

		console.log(printResult);
		return printResult;
	}

	if (printerType == 'sticker') {
		console.log('Printing to sticker printer');
		return 'No sticker printer samples';
	}

	if (printerType == 'office') {
		console.log('Printing to officle printer');
		return 'No office printer samples';
	}
}
