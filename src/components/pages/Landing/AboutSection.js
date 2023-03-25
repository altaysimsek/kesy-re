import Link from 'next/link';
import { IconBrandGithub } from '@tabler/icons-react';

const AboutSection = () => {
	return (
		<section className='flex flex-col my-16'>
			<h3 className='transition hover:opacity-100 font-bold text-2xl text-white opacity-80 mb-4'>
				About & Contribute
			</h3>
			<div className='flex justify-center gap-x-12' id='contribute'>
				<div className='flex flex-col bg-white gap-8 py-7 px-8 w-4/12 rounded-3xl'>
					<h3 className='font-bold text-2xl'>Contribute to kesy</h3>
					<p className='transition hover:opacity-100 text-xs font-medium opacity-60'>
						Do you have a passion for open source and want to contribute to
						kesy? Join us and become a part of the community! We welcome
						developers, designers, and anyone with a passion for creating
						amazing software. Together, we can build something great.
					</p>
					<Link href={'https://github.com/altaysimsek/kesy-re'}>
						<span className='flex items-center bg-black hover:cursor-pointer text-white text-xs p-3 rounded-lg font-medium'>
							<IconBrandGithub className='mr-4' /> View on GitHub
						</span>
					</Link>
				</div>
				<div
					id='about'
					className='flex flex-col w-8/12 bg-white gap-8 w-full py-7 px-8 rounded-3xl'
				>
					<h3 className='font-bold text-2xl'>About kesy</h3>
					<p className='transition hover:opacity-100 text-xs font-medium opacity-60'>
						Kesy is one of the first applications that I developed as a
						full-stack developer, but after the server on which the application
						was running was shut down, I didn&apos;t do anything for a while.
						Instead of using its old version, I wanted to make a better version
						of it using Next.js. And I decided to put this new version live.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
