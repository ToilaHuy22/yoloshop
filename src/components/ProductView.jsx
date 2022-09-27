import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router';

import Button from './Button';
import numberWithCommas from '../utils/numberWithCommas';

const ProductView = (props) => {
	let product = props.product;

	if (product === undefined)
		product = {
			price: 0,
			title: '',
			colors: [],
			size: [],
		};

	const [previewImg, setPreviewImg] = useState(product.image01);

	const [descriptionExpand, setDescriptionExpand] = useState(false);

	const [color, setColor] = useState(undefined);

	const [size, setSize] = useState(undefined);

	const [quantity, setQuantity] = useState(1);

	const [valiColor, setValiColor] = useState('');

	const [valiSize, setValiSize] = useState('');

	const updateQuantity = (type) => {
		if (type === 'plus') {
			setQuantity(quantity + 1);
		} else {
			setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
		}
	};

	//update state for Productview
	useEffect(() => {
		setPreviewImg(product.image01);
		setQuantity(1);
		setColor(undefined);
		setSize(undefined);
	}, [product]);

	const check = () => {
		if (color === undefined && size === undefined) {
			setValiColor('Vui lòng chọn màu sắc!');
			setValiSize('Vui lòng chọn kích cỡ!');
			return false;
		}

		if (color === undefined && size !== undefined) {
			setValiColor('Vui lòng chọn màu sắc!');
			return false;
		} else {
			setValiColor('');
		}

		if (size === undefined && color !== undefined) {
			setValiSize('Vui lòng chọn kích cỡ!');
			return false;
		} else {
			setValiSize('');
		}

		setValiColor('');
		setValiSize('');

		return true;
	};

	const addToCart = () => {
		if (check()) console.log({ color, size, quantity });
	};

	const goToCart = () => {
		if (check()) props.history.push('/cart');
	};

	return (
		<div className="product">
			<div className="product__images">
				<div className="product__images__list">
					<div
						className="product__images__list__item"
						onClick={() => setPreviewImg(product.image01)}
					>
						<img src={product.image01} alt="" />
					</div>
					<div
						className="product__images__list__item"
						onClick={() => setPreviewImg(product.image02)}
					>
						<img src={product.image02} alt="" />
					</div>
				</div>
				<div className="product__images__main">
					<img src={previewImg} alt="" />
				</div>
				<div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
					<div className="product-description__title">Chi tiết sản phẩm</div>
					<div
						className="product-description__content"
						dangerouslySetInnerHTML={{ __html: product.description }}
					></div>
					<div className="product-description__toggle">
						<Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
							{descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
						</Button>
					</div>
				</div>
			</div>
			<div className="product__info">
				<h1 className="product__info__title">{product.title}</h1>
				{/* price */}
				<div className="product__info__item">
					<span className="product__info__item__price">
						{numberWithCommas(product.price)}
					</span>
				</div>
				{/* color */}
				<div className="product__info__item">
					<div className="product__info__item__title">Màu Sắc</div>
					<div className="product__info__item__list">
						{product.colors.map((item, index) => (
							<div
								key={index}
								className={`product__info__item__list__item ${
									color === item ? 'active' : ''
								}`}
								onClick={() => setColor(item)}
							>
								<div className={`circle bg-${item}`}></div>
							</div>
						))}
					</div>
					<label className="product__info__item__vali" htmlFor="">
						{valiColor}
					</label>
				</div>
				{/* size */}
				<div className="product__info__item">
					<div className="product__info__item__title">Kích thước</div>
					<div className="product__info__item__list">
						{product.size.map((item, index) => (
							<div
								key={index}
								className={`product__info__item__list__item ${
									size === item ? 'active' : ''
								}`}
								onClick={() => setSize(item)}
							>
								<span className="product__info__item__list__item__size">
									{item}
								</span>
							</div>
						))}
					</div>
					<label className="product__info__item__validate" htmlFor="">
						{valiSize}
					</label>
				</div>
				{/* quantity */}
				<div className="product__info__item">
					<div className="product__info__item__title">Số lượng</div>
					<div className="product__info__item__quantity">
						<div
							className="product__info__item__quantity__btn"
							onClick={() => updateQuantity('minus')}
						>
							<i className="bx bx-minus"></i>
						</div>
						<div className="product__info__item__quantity__input">{quantity}</div>
						<div
							className="product__info__item__quantity__btn"
							onClick={() => updateQuantity('plus')}
						>
							<i className="bx bx-plus"></i>
						</div>
					</div>
				</div>

				<div className="product__info__item">
					<Button size="sm" onClick={() => addToCart()}>
						Thêm vào giỏ hàng
					</Button>
					<Button size="sm" onClick={() => goToCart()}>
						Mua ngay
					</Button>
				</div>
			</div>
			<div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
				<div className="product-description__title">Chi tiết sản phẩm</div>
				<div
					className="product-description__content"
					dangerouslySetInnerHTML={{ __html: product.description }}
				></div>
				<div className="product-description__toggle">
					<Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
						{descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
					</Button>
				</div>
			</div>
		</div>
	);
};

ProductView.propTypes = {
	product: PropTypes.object,
};

export default withRouter(ProductView);
