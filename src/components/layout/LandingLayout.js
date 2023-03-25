import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

const LandingLayout = ({ children }) => {
	return <main className={inter.className + ' lg:px-52'}>{children}</main>;
};

export default LandingLayout;
