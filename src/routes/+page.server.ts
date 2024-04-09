import { graphql } from 'gql.tada';
import type { PageServerLoad } from './$types';
import request from 'graphql-request';
const getFeaturesQuery = graphql(`
	query Features {
		features {
			id
			title
			body
			link
			image
			linkText
		}
	}
`);
export const load: PageServerLoad = async ({ platform }) => {
	try {
		const features = await request(
			platform?.env.GRAPHQL_API_URL || 'https://content.browndogbiscuits.shop/graphql',
			getFeaturesQuery
		);
		if (features?.features) {
			return {
				features: features.features
			};
		}
	} catch (e: unknown) {
		console.error(e);
		console.error((e as Error).stack || '');
	}

	return {
		features: []
	};
};
