import {
	IconUsers,
	IconMail,
	IconLock,
	IconArrowRight,
	IconBrandGithub,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { object, string } from 'yup';

import Error from '@/components/ui/Error';

import { signIn } from 'next-auth/react';
const Register = () => {
	const formik = useFormik({
		initialValues: {
			kesyUsername: '',
			kesyEmail: '',
			kesyPassword: '',
		},
		validationSchema: object({
			kesyUsername: string()
				.min(3, 'Must be 3 characters or less')
				.required('* Required'),
			kesyEmail: string().email('Invalid email address').required('* Required'),
			kesyPassword: string()
				.min(6, 'Must be minumum 6 characters')
				.required('* Required'),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<div className='flex flex-col text-white bg-zinc-800 p-8 w-96 rounded-lg border-2 border-zinc-700/[.6]'>
			<h1 className='text-center text-xl font-bold mb-4 transition opacity-60 hover:opacity-100'>
				Welcome to kesy ✨
			</h1>
			<div className='flex flex-col gap-y-4 w-full'>
				<button
					onClick={() =>
						signIn('github', {
							redirect: '/',
						})
					}
					className='transition flex items-center justify-center text-sm p-2 bg-zinc-700 hover:bg-zinc-600 opacity-60 border-2 border-zinc-500/[.6] rounded-lg'
					type='button'
				>
					<IconBrandGithub size={18} className='mr-2' /> Continue with GitHub
				</button>
			</div>
			<hr className='my-4 opacity-60' />
			<form
				onSubmit={formik.handleSubmit}
				className='flex flex-col gap-y-4 w-full'
			>
				<div className='flex flex-col gap-y-2'>
					<label
						className='text-xs transition opacity-60 hover:opacity-100'
						htmlFor='kesyUsername'
					>
						Fullname
					</label>
					<div className='flex items-center rounded-lg bg-zinc-700 px-2 py-1'>
						<IconUsers size={16} className='mr-2 text-zinc-400'></IconUsers>
						<input
							className='bg-transparent text-sm p-1 w-full'
							placeholder='Name Surname'
							id='kesyUsername'
							name='kesyUsername'
							type={'text'}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.kesyUsername}
						></input>
					</div>
					{formik.touched.kesyUsername && formik.errors.kesyUsername ? (
						<Error detail={formik.errors.kesyUsername} />
					) : null}
				</div>
				<div className='flex flex-col gap-y-2'>
					<label
						className='text-xs transition opacity-60 hover:opacity-100'
						htmlFor='kesyEmail'
					>
						Email address
					</label>
					<div className='flex items-center rounded-lg bg-zinc-700 px-2 py-1'>
						<IconMail size={16} className='mr-2 text-zinc-400'></IconMail>
						<input
							className='bg-transparent text-sm w-full p-1'
							placeholder='e.g kesy-me@gmail.com'
							id='kesyEmail'
							name='kesyEmail'
							type={'email'}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.kesyEmail}
						></input>
					</div>
					{formik.touched.kesyEmail && formik.errors.kesyEmail ? (
						<Error detail={formik.errors.kesyEmail} />
					) : null}
				</div>
				<div className='flex flex-col gap-y-2'>
					<label
						className='text-xs transition opacity-60 hover:opacity-100'
						htmlFor='kesyPassword'
					>
						Password
					</label>
					<div className='flex items-center rounded-lg bg-zinc-700 px-2 py-1'>
						<IconLock size={16} className='mr-2 text-zinc-400'></IconLock>
						<input
							className='bg-transparent text-sm p-1 w-full'
							placeholder='Password'
							id='kesyPassword'
							name='kesyPassword'
							type={'password'}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.kesyPassword}
						></input>
					</div>
					{formik.touched.kesyPassword && formik.errors.kesyPassword ? (
						<Error detail={formik.errors.kesyPassword} />
					) : null}
				</div>
				<div className='mt-1'>
					<button
						type='submit'
						className='flex cursor-pointer text-zinc-800 w-full justify-center items-center p-2 bg-[#32D29A] font-medium rounded-lg'
					>
						Register <IconArrowRight size={14} />
					</button>
				</div>
				<p className='mt-2 text-center text-zinc-500 text-xs w-72'>
					Already have an account?
					<Link className='ml-1 underline' href={'/login'}>
						Sign in
					</Link>{' '}
				</p>
			</form>
		</div>
	);
};

export default Register;
