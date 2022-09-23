import React from 'react';

import Helmet from '../components/Helmet';

import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import CheckBox from '../components/CheckBox';

import productData from '../assets/fake-data/products';
import category from '../assets/fake-data/category';
import color from '../assets/fake-data/product-color';
import size from '../assets/fake-data/product-size';

import Button from '../components/Button';


const Catalog = () => {

	return (
		<Helmet title="Sản phẩm">
			<div className="catalog">
				{/* filter */}
				<div className="catalog__filter">
					<div className="catalog__filter__widget">
						<div className="catalog__filter__widget__title">Danh mục sản phẩm</div>
						<div className="catalog__filter__widget__content">
							{
								category.map((item, index) => (
									<div 
										key={index} 
										className="catalog__filter__widget__content__item">
										<CheckBox label={item.display} />
									</div>
								))
							}
						</div>
					</div>

					<div className="catalog__filter__widget">
						<div className="catalog__filter__widget__title">Màu sắc</div>
						<div className="catalog__filter__widget__content">
							{
								color.map((item, index) => (
									<div 
										key={index} 
										className="catalog__filter__widget__content__item">
										<CheckBox label={item.display} />
									</div>
								))
							}
						</div>
					</div>

					<div className="catalog__filter__widget">
						<div className="catalog__filter__widget__title">Kích cỡ</div>
						<div className="catalog__filter__widget__content">
							{
								size.map((item, index) => (
									<div 
										key={index} 
										className="catalog__filter__widget__content__item">
										<CheckBox label={item.display} />
									</div>
								))
							}
						</div>
					</div>

					<div className="catalog__filter__widget">
						<div className="catalog__filter__widget__content">
							<Button size="sm">Xóa bộ lọc</Button>
						</div>
					</div>
				</div>
				{/* end filter */}

				{/* content */}
				<div className="catalog__content">
					<Grid 
						col={3} 
						mdCol={2} 
						smCol={1} 
						gap={20}
					>
						{productData.getAllProducts().map((item, index) => (
							<ProductCard
								key={index}
								img01={item.image01}
								img02={item.image02}
								name={item.title}
								price={Number(item.price)}
								slug={item.slug}
							/>
						))}
					</Grid>
				</div>
				{/* end content */}
			</div>
		</Helmet>
	);
};

export default Catalog;
