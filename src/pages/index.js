import Head from 'next/head';

import LandingLayout from '@/components/layout/LandingLayout';

import LandingPage from '../components/pages/landing/LandingPage';

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Kesy</title>
				<meta name='description' content='Your favorite url shortener.' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<LandingPage />
		</>
	);
}

HomePage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
