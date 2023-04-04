import AuthLayout from '@/components/layout/AuthLayout';
import Register from '@/components/pages/register/Register';

const RegisterPage = () => {
	return <Register />;
};

RegisterPage.getLayout = function getLayout(page) {
	return <AuthLayout>{page}</AuthLayout>;
};

export default RegisterPage;
