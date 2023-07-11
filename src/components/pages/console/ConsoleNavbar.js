import {
	IconChartBar,
	IconDotsVertical,
	IconHome,
	IconLink,
	IconPlus,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const ConsoleNavbar = () => {
	return (
		<div className='w-80 border-r h-full border-zinc-800'>
			<div className='h-full flex flex-col items-center p-8'>
				<Link className='my-8' href={'/console'}>
					<Image
						alt='Kesy'
						width={108}
						height={41}
						src='/svgs/kesy-logo.svg'
					></Image>
				</Link>
				<div className='cursor-pointer bg-[#32D29A] w-full font-medium rounded-lg flex items-center justify-center py-2.5'>
					<IconPlus size={20} className='mr-2' />
					Shorten URL
				</div>
				<div className='w-full mt-4 gap-y-2 flex flex-col'>
					<div className='cursor-pointer transition text-white font-bold opacity-60 hover:opacity-100 hover:bg-white/[.03] p-2.5 rounded-lg flex items-center '>
						<IconHome size={20} className='mr-2' />
						Dashboard
					</div>
					<div className='cursor-pointer transition text-white font-bold opacity-60 hover:opacity-100 hover:bg-white/[.03] p-2.5 rounded-lg flex items-center '>
						<IconLink size={20} className='mr-2' />
						My Links
					</div>
				</div>
				<div className='w-full mt-auto'>
					<div className='flex flex-col text-white'>
						<div className='flex items-center '>
							<IconChartBar size={20} className='mr-1 opacity-60' />
							<span className='font-medium opacity-60'>Limits</span>
						</div>
						<div className='my-2'>
							<div className='flex'>
								<span className='font-medium text-sm mr-auto opacity-60'>
									URL&apos;s
								</span>
								<span className='transition text-xs opacity-60 hover:opacity-100'>
									6/10
								</span>
							</div>
							<div className='relative mt-2.5 w-full bg-white/[.03] rounded-lg h-1'>
								<div className='absolute rounded-lg opacity-100 bg-[#32D29A] w-4/12 h-1'></div>
							</div>
						</div>
						<div className='my-2'>
							<div className='flex'>
								<span className='font-medium text-sm mr-auto opacity-60'>
									Custom URL&apos;s
								</span>
								<span className='transition text-xs opacity-60 hover:opacity-100'>
									4/10
								</span>
							</div>
							<div className='relative mt-2.5 w-full bg-white/[.03] rounded-lg h-1'>
								<div className='absolute rounded-lg opacity-100 bg-[#32D29A] w-2/12 h-1'></div>
							</div>
						</div>
					</div>
					<div className='flex items-center mt-2 text-white'>
						<Image
							alt='User Profile'
							className='rounded-full bg-white mr-4'
							width={40}
							height={40}
						></Image>
						<div className='flex flex-col mr-auto'>
							<span className='transition text-sm font-bold opacity-60 hover:opacity-100'>
								Altay Simsek
							</span>
							<span className='transition text-xs opacity-60 hover:opacity-100'>
								free plan
							</span>
						</div>
						<IconDotsVertical
							size={20}
							className='opacity-60 hover:opacity-100 cursor-pointer'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConsoleNavbar;
