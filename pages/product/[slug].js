import Layout from '../../components/Layout';
//import { useRouter } from 'next/router';
import { withRouter } from 'next/router'
import client from '../../components/ApolloClient';
import AddToCartButton from '../../components/cart/AddToCartButton';
import PRODUCT_BY_SLUG_QUERY from '../../queries/product-by-slug';
import clientConfig from '../../client-config';
import { isEmpty } from 'lodash';

const Product = (props) => {
	const { product } = props;

	//const router = useRouter()
    //const { slug } = router.query 
	// console.log(slug)  /* check the slug */


	return (
		<Layout>
			{ product ? (
				<div className="woo-next-single">
					<div className="woo-next-single__product card bg-light mb-3 p-5">
						<div className="card-header">{ product.name }</div>
						<hr />
						<div className="card-body">
							{ !isEmpty( product.image ) ? (
								<img
									src={ product.image.sourceUrl }
									alt={product.image.title}
									title={product.image.title}
									width="100%"
									srcSet={ product.image.srcSet }
								/>
							) : !isEmpty( clientConfig.singleImagePlaceholder ) ? (
								<img
									src={ clientConfig.singleImagePlaceholder }
									alt="Placeholder product image"
								/>
								) : null}
							<hr/>
							<div
								dangerouslySetInnerHTML={ {
									__html: product.description,
								} }
								className="card-text"
							/>

							<AddToCartButton product={ product }/>
						</div>
					</div>
				</div>
			) : (
				''
			) }
		</Layout>
	);
};


export const getServerSideProps = async (context) => {

    let {query: { slug }} = context

    const id = slug ? slug : context.query.id;


    const result = await client.query({
        query: PRODUCT_BY_SLUG_QUERY,
        variables: { id }
    })

    return {
        props: {
            product: result.data.product,
            revalidate: 1,
        },
    };
}

export default Product;
