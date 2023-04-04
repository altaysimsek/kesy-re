import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import PrismaClient from '@/lib/prismadb';

export const authOptions = {
	adapter: PrismaAdapter(PrismaClient),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
};

export default NextAuth(authOptions);
