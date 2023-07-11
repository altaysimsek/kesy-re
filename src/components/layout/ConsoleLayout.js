import ConsoleNavbar from '../pages/console/ConsoleNavbar';

const ConsoleLayout = ({ children }) => {
	return (
		<main className='flex h-screen'>
			<ConsoleNavbar />
			{children}
		</main>
	);
};

export default ConsoleLayout;
