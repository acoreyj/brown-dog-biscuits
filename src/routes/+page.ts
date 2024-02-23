import type { AddedIcon, BackgroundProps } from '$components/Background.svelte';
import superjson from 'superjson';
import type { PageLoad } from './$types';
import JSZip from 'jszip';
export const csr = false;
export const load: PageLoad = async ({ url }) => {
	const obj: Record<string, string> & {
		options?: BackgroundProps & {
			configs?: string;
		};
		unzippedIconConfigs?: AddedIcon[];
	} = {};
	url.searchParams.forEach((v, k) => {
		console.log({ k, v });
		if (v && typeof v === 'string' && v.includes('json')) {
			obj[k] = superjson.parse(v);
		}
	});
	const configs = obj.options?.configs;
	if (configs) {
		let iconConfigs = [];
		const zip = new JSZip();
		const decoded = decodeURIComponent(configs!);
		console.log(decoded);
		const original = await (await zip.loadAsync(decoded, { base64: true }))
			.file('minified_configs.json')
			?.async('string');
		if (original) {
			iconConfigs = JSON.parse(original);
		}
		obj.unzippedIconConfigs = iconConfigs;
		delete obj.options?.configs;
	}
	return obj;
};
