import React from 'react';

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Section, { SectionTitle, SectionBody } from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';

import heroSliderData from '../assets/fake-data/hero-slider';
import productData from '../assets/fake-data/products';
import policy from '../assets/fake-data/policy';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Helmet title="Trang chủ">
			{/* Hero SLider */}
			<HeroSlider data={heroSliderData} control={true} auto={true} timeOut={8000} />
			{/* End Hero SLider */}

			{/* section */}
			<Section>
				<SectionBody>
					<Grid col={4} mdCol={2} smCol={1} gap={20}>
						{policy.map((item, index) => (
							<Link key={index} to="/policy">
								<PolicyCard
									name={item.name}
									description={item.description}
									icon={item.icon}
								/>
							</Link>
						))}
					</Grid>
				</SectionBody>
			</Section>
			{/* end section */}

			{/* best selling section */}
			<Section>
				<SectionTitle>Top sản phẩm bán chạy trong tháng</SectionTitle>
				<SectionBody>
					<Grid col={4} mdCol={2} smCol={1} gap={20}>
						{productData.getProducts(8).map((item, index) => (
							<ProductCard
								key={index}
								img01={item.image01}
								img02={item.image02}
								name={item.title}
								price={item.price}
								slug={item.slug}
							/>
						))}
					</Grid>
				</SectionBody>
			</Section>
			{/* end best selling section */}
		</Helmet>
	);
};

export default Home;
