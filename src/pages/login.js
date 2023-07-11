import AuthLayout from '@/components/layout/AuthLayout';
import SignIn from '@/components/pages/login/SignIn';

const LoginPage = () => {
	return <SignIn />;
};

LoginPage.getLayout = function getLayout(page) {
	return <AuthLayout>{page}</AuthLayout>;
};

export default LoginPage;
