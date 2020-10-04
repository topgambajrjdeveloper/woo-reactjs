import Link from 'next/link';
//import { withRouter} from 'next/router'
import AddToCartButton from '../components/cart/AddToCartButton';
import clientConfig from '../client-config';
import { isEmpty } from 'lodash';

const Product = ( props ) => {

	const { product } = props;

	return (
		// @TODO Need to handle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h3 className="card-header text-center">
					{ product.name ? product.name : '' }
				</h3>

				<Link
					as={ `/product/${ product.slug }`}
					href={`/product/[slug]`}
				>
					<a>
						{ !isEmpty( product.image ) ? (
							<img className="product-container" src={product.image.sourceUrl} alt={product.image.title} title={product.image.title}/>
						) : !isEmpty( clientConfig.productImagePlaceholder ) ? (
								<img className="product-container"
								src={ clientConfig.productImagePlaceholder }
								alt="Placeholder product image"
							/>
						) : null }
					</a>
				</Link>
				<div className="card-body text-center">
					<h6 className="card-subtitle mb-3">{product.price}</h6>
					{/* <h6 className="card-subtitle mb-3">{product.averageRating}</h6> */}
					<AddToCartButton product={ product }/>
				</div>
			</div>
		) : (
			''
		)
	);
};

export default Product;
