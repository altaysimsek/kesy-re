import { IconBolt, IconChartBar, IconLink } from '@tabler/icons-react';

const features = [
	{
		icon: IconLink,
		title: 'Custom Shortcuts',
		description:
			'Create custom URLs that are easy to remember and reflect your brand.',
	},
	{
		icon: IconChartBar,
		title: 'Analytics',
		description:
			"Track clicks and other engagement metrics to gain insights into your audience's behavior.",
	},
	{
		icon: IconBolt,
		title: 'Superfast',
		description:
			'Spend less time managing URLs and more time growing your business.',
	},
];

const FeatureSection = () => {
	return (
		<section id='features'>
			<h3 className='transition hover:opacity-100 font-bold text-2xl text-white opacity-80'>
				Features
			</h3>
			<div className='flex justify-between px-16 mt-5'>
				{features.map(({ icon: Icon, title, description }) => (
					<div
						key={title}
						className='group relative flex flex-col items-center p-4 gap-4 h-80 rgBorder rounded-lg drop-shadow-md transition-transform duration-300 hover:-translate-y-2 hover:scale-105'
					>
						<Icon
							size={32}
							className='text-[#81ECAE] group-hover:rotate-6 transition-transform duration-300'
						/>
						<p className='text-[#81ECAE] font-medium'>{title}</p>
						<p className='text-xs font-medium text-white/[.6] text-center'>
							{description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeatureSection;
