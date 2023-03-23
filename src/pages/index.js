import Head from 'next/head';
import { Landing } from '@/components/pages/Landing';

export default function Home() {
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
