export function copyToClipboard(text: string): void {
	console.log(`will copy to clipboard: ${text}`);
	navigator.clipboard.writeText(text);
}