import gql from "graphql-tag";

const PRODUCT_BY_SLUG_QUERY = gql` query Product($id: ID!) {
	product(id: $id, idType: SLUG) {
	  id
	  productId
	  averageRating
	  slug
	  description
	  image {
		id
		uri
		title
		srcSet
		sourceUrl
	  }
	  name
	  ... on SimpleProduct {
		price
		id
	  }
	  ... on VariableProduct {
		price
		id
	  }
	  ... on ExternalProduct {
		price
		id
		externalUrl
	  }
	  ... on GroupProduct {
		products {
		  nodes {
			... on SimpleProduct {
			  id
			  price
			}
		  }
		}
		id
	  }
	}
  }
`;

export default PRODUCT_BY_SLUG_QUERY;
