import Register from '@/components/pages/register/Register';
import AuthLayout from '@/components/layout/AuthLayout';

const RegisterPage = () => {
	return <Register />;
};

RegisterPage.getLayout = function getLayout(page) {
	return <AuthLayout>{page}</AuthLayout>;
};

export default RegisterPage;
