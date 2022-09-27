import React from 'react';

import ProductView from './ProductView';
import Button from './Button';

import productData from '../assets/fake-data/products';

const ProductViewModal = () => {
	const product = productData.getProductBySlug('ao-thun-dinosaur-01');

	return (
		<div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
			<div className="product-view__modal__content">
				<ProductView product={product} />
				<div className="product-view__modal__content__close">
					<Button size="sm">Đóng</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductViewModal;
