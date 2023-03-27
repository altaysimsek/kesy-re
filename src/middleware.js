import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { AuthOptions } from 'next-auth';
export async function middleware(request) {
	// GET /_next/data/build-id/hello.json
	console.log(request);
	// const session = await getServerSession(request, AuthOptions);
	console.log('Alsana', session);
	return NextResponse.next();
}

export const config = {
	matcher: ['/console', '/console/:path*'],
};
