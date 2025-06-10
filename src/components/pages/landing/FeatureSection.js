import { IconBolt, IconChartBar, IconLink } from '@tabler/icons-react';

import SpotlightCard from './SpotlightCards';

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
			<div className='flex justify-between px-16 mt-5 gap-x-8'>
				{features.map(({ icon: Icon, title, description }) => (
					<SpotlightCard key={title} className='h-64'>
						<Icon size={36} className='text-[#81ECAE] mb-4' />
						<p className='text-2xl font-semibold text-white mb-2'>{title}</p>
						<p className='text-base text-white/60'>{description}</p>
					</SpotlightCard>
				))}
			</div>
		</section>
	);
};

export default FeatureSection;
