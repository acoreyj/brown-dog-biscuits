import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => {
	const featuresRes = await fetch('https://content.browndogbiscuits.shop/v1/features');
	const features = await featuresRes.json();

	if (features.data) {
		return {
			features: features.data
		};
	}
	return {
		features: []
	};
};
