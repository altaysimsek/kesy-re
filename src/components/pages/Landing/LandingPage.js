import React from 'react';

import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

import AboutSection from './AboutSection';
import FeatureSection from './FeatureSection';
import SearchSection from './SearchSection';

const Landing = () => {
	return (
		<>
			<Navbar />
			<SearchSection />
			<FeatureSection />
			<AboutSection />
			<Footer />
		</>
	);
};

export default Landing;
