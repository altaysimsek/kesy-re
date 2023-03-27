import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Image from 'next/image';
import Link from 'next/link';

const AuthLayout = ({ children }) => {
	return (
		<main
			className={
				inter.className +
				' h-screen w-screen flex flex-col justify-center items-center'
			}
		>
			<Image
				alt='Kesy'
				width={108}
				height={41}
				src='/svgs/kesy-logo.svg'
				className='mb-4'
			></Image>
			{children}
			<p className='mt-2 text-center text-zinc-500 text-xs w-72'>
				You acknowledge that you read, and agree to our{' '}
				<Link className='underline' href={'/terms-of-service'}>
					Terms of Service
				</Link>{' '}
				and our{' '}
				<Link className='underline' href={'/privacy-policy'}>
					Privacy Policy
				</Link>
			</p>
		</main>
	);
};

export default AuthLayout;
