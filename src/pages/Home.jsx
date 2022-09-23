import React from 'react';

import Helmet from '../components/Helmet';
import HeroSlider from '../components/HeroSlider';
import Section, { SectionTitle, SectionBody } from '../components/Section';
import PolicyCard from '../components/PolicyCard';
import Grid from '../components/Grid';

import heroSliderData from '../assets/fake-data/hero-slider';
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
							<Link to="/policy">
								<PolicyCard
									key={index}
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
		</Helmet>
	);
};

export default Home;
