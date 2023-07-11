import AboutSection from './AboutSection';
import FeatureSection from './FeatureSection';
import FooterSection from './FooterSection';
import NavbarSection from './NavbarSection';
import SearchSection from './SearchSection';

const Landing = () => {
	return (
		<>
			<NavbarSection />
			<SearchSection />
			<FeatureSection />
			<AboutSection />
			<FooterSection />
		</>
	);
};

export default Landing;
