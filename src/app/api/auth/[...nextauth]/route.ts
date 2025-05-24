import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prisma from "@/lib/prisma";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        //Validation Here
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
          select: {
            id: true,
            username: true,
            email: true,
            hashed_password: true,
          },
        });
        if (!user) {
          return null;
        }
        // This just checks the password supplied against the hashed password
        const passwordCorrect = await compare(
          credentials?.password || "",
          user.hashed_password
        );

        if (passwordCorrect) {
          return {
            id: user.id,
            email: user.email,
            username: user.username,
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
