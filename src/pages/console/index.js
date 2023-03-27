import Head from 'next/head';
import { getSession } from 'next-auth/react';
import ConsoleLayout from '@/components/layout/ConsoleLayout';

export default function Console() {
	return (
		<>
			<Head>
				<title>Kesy</title>
				<meta name='description' content='Your favorite url shortener.' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<p>Login olma</p>
		</>
	);
}

Console.getLayout = function getLayout(page) {
	return <ConsoleLayout>{page}</ConsoleLayout>;
};

export async function getServerSideProps(context) {
	// const session = await getSession(context);
	// if (!session) {
	// 	return {
	// 		redirect: {
	// 			destination: '/',
	// 			permanent: false,
	// 		},
	// 	};
	// }
	// return {
	// 	props: { session },
	// };
}
