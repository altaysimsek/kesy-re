import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='flex items-center p-4 my-4'>
			<div className='flex items-center mr-auto'>
				<Link href='/' className='mr-4'>
					<Image
						alt='Kesy'
						width={108}
						height={41}
						src='/svgs/kesy-logo.svg'
					></Image>
				</Link>
				<p className='text-white font-medium mt-3 text-sm'>
					| made with <Link href={'https://altay.dev'}>⚡</Link>
				</p>
			</div>
			<div className='flex items-start gap-x-11'>
				<div className='flex flex-col gap-y-3'>
					<h4 className='font-bold text-sm text-white'>Section</h4>
					<Link
						className='transition hover:opacity-100 text-sm text-white opacity-60'
						href={'/blabla'}
					>
						Features
					</Link>
					<Link
						className='transition hover:opacity-100 text-sm text-white opacity-60'
						href={'/blabla'}
					>
						Contribution
					</Link>
					<Link
						className='transition hover:opacity-100 text-sm text-white opacity-60'
						href={'/blabla'}
					>
						About
					</Link>
				</div>
				<div className='flex flex-col gap-y-3'>
					<h4 className='font-bold text-sm text-white'>Kesy</h4>
					<Link
						className='transition hover:opacity-100 text-sm text-white opacity-60'
						href={'/blabla'}
					>
						Contact us
					</Link>
				</div>
				<div className='flex flex-col gap-y-3'>
					<h4 className='font-bold text-sm text-white'>Legal</h4>
					<Link
						className='transition hover:opacity-100 text-sm text-white opacity-60'
						href={'/blabla'}
					>
						Privacy Policy
					</Link>
					<Link
						className='transition hover:opacity-100 text-sm text-white opacity-60'
						href={'/blabla'}
					>
						Terms of Use
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
