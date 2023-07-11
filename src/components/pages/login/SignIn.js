import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';
import { signIn } from 'next-auth/react';

const SignIn = () => {
	return (
		<div className='flex flex-col text-white bg-zinc-800 p-8 w-96 rounded-lg border-2 border-zinc-700/[.6]'>
			<h1 className='text-center text-xl font-bold transition opacity-60 hover:opacity-100'>
				Welcome to Kesy
			</h1>
			<p className='cursor-auto text-center text-xs opacity-60 hover:opacity-100'>
				You can sign-in with socials below
			</p>
			<div className='flex flex-col mt-4 gap-y-4 w-full'>
				<a
					onClick={() =>
						signIn('github', {
							callbackUrl: `${window.location.origin}/console`,
						})
					}
					className='cursor-pointer transition flex items-center justify-center text-sm p-2 bg-zinc-700 hover:bg-zinc-600 opacity-60 border-2 border-zinc-500/[.6] rounded-lg'
					type='button'
				>
					<IconBrandGithub size={18} className='mr-2' /> Continue with GitHub
				</a>
				<a
					onClick={() =>
						signIn('google', {
							callbackUrl: `${window.location.origin}/protected`,
						})
					}
					className='cursor-pointer transition flex items-center justify-center text-sm p-2 bg-zinc-700 hover:bg-zinc-600 opacity-60 border-2 border-zinc-500/[.6] rounded-lg'
					type='button'
				>
					<IconBrandGoogle size={18} className='mr-2' /> Continue with GitHub
				</a>
			</div>
		</div>
	);
};

export default SignIn;
