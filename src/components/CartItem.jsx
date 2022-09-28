import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import numberWithCommas from '../utils/numberWithCommas';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
	const dispatch = useDispatch();

	const [item, setItem] = useState(props.item);

	const [quantity, setQuantity] = useState(props.item.quantity);

	useEffect(() => {
		setItem(props.item);

		setQuantity(props.item.quantity);
	}, [props.item]);

	return (
		<div className="cart__item">
			<div className="cart__item__image">
				<img src={item.product.image01} alt="" />
			</div>
			<div className="cart__item__info">
				<div className="cart__item__info__name">
					<Link to={`/catalog/${item.slug}`}>
						{`${item.product.title} - ${item.color} - ${item.size}`}
					</Link>
				</div>
				<div className="cart__item__info__price">
					{numberWithCommas(Number(item.product.price))}
				</div>
				<div className="cart__item__info__quantity">
					<div className="product__info__item__quantity">
						<div className="product__info__item__quantity__btn">
							<i className="bx bx-minus"></i>
						</div>
						<div className="product__info__item__quantity__input">{quantity}</div>
						<div className="product__info__item__quantity__btn">
							<i className="bx bx-plus"></i>
						</div>
					</div>
				</div>
				<div className="cart__item__info__del">
					<i className="bx bx-trash"></i>
				</div>
			</div>
		</div>
	);
};

CartItem.propTypes = {
	item: PropTypes.object,
};

export default CartItem;
