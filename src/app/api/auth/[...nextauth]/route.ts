import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        username: {},
        password: {},
      },
      async authorize(credentials, req) {

       
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };