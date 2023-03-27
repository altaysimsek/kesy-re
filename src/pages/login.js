import AuthLayout from '@/components/layout/AuthLayout';
import Login from '@/components/pages/login/Login';

const LoginPage = () => {
	return <Login />;
};

LoginPage.getLayout = function getLayout(page) {
	return <AuthLayout>{page}</AuthLayout>;
};

export default LoginPage;
