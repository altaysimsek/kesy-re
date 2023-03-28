import Head from 'next/head';
import Landing from '@/components/pages/landing/LandingPage';
import LandingLayout from '@/components/layout/LandingLayout';

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Kesy</title>
				<meta name='description' content='Your favorite url shortener.' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Landing />
		</>
	);
}

HomePage.getLayout = function getLayout(page) {
	return <LandingLayout>{page}</LandingLayout>;
};
