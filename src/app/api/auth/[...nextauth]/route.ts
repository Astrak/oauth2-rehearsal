import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

const auth = () =>
  NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.OAUTH_GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET ?? "",
      }),
    ],
    session: {
      strategy: "jwt",
    },
    callbacks: {
      async jwt({ token, user, account, profile, trigger, isNewUser }) {
        if (user) {
          token.name = user.name;
          token.email = user.email;
          token.picture = user.image;
          token.sub = user.id;
        }
        return token;
      },
      async session({ session, token }) {
        if (token && session.user) {
          session.user.name = token.name || session.user.name;
          session.user.email = token.email || session.user.email;
          session.user.image = token.picture || session.user.image;
        }
        return session;
      },
      async signIn({ user, account, email, credentials }) {
        return true;
      },
    },
  });

export { auth as GET, auth as POST };
