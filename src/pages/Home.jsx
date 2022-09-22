import React from 'react';

import Helmet from '../components/Helmet';

import HeroSlider from '../components/HeroSlider';

import heroSliderData from '../assets/fake-data/hero-slider';

const Home = () => {
	return (
		<Helmet title="Trang chủ">
			{/* Hero SLider */}
			<HeroSlider data={heroSliderData} control={true} auto={true} timeOut={8000} />
			{/* End Hero SLider */}
		</Helmet>
	);
};

export default Home;
