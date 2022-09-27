import { configureStore } from '@reduxjs/toolkit';

import productModalSlice from './product-modal/productModalSlice';

import cartItemsSlice from './shopping-cart/cartItemSlide';

export const store = configureStore({
	reducer: {
		productModal: productModalSlice,
		cartItems: cartItemsSlice,
	},
});
