import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  //database: process.env.DATABASE_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  // callbacks: {
  //   async jwt(token, user) {
  //     //console.log(token);
  //     return token;
  //   },
  //   async session(session, token) {
  //     console.log(session.user.id);
  //     return session;
  //   },
  // },
});
