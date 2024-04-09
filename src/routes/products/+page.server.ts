import { graphql } from 'gql.tada';
import type { PageServerLoad } from './$types';
import request from 'graphql-request';
const getProductsQuery = graphql(`
	query Products {
		products {
			id
			name
			description
			images
			skus {
				id
			}
		}
	}
`);
export const load: PageServerLoad = async ({ platform }) => {
	try {
		const data = await request(
			platform?.env.GRAPHQL_API_URL || 'https://content.browndogbiscuits.shop/graphql',
			getProductsQuery
		);
		if (data?.products) {
			return {
				products: data.products
			};
		}
	} catch (e) {
		console.error(e);
	}

	return {
		features: []
	};
};
