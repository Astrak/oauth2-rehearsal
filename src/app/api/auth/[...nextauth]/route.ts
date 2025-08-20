import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const auth = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.OAUTH_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
});

export { auth as GET, auth as POST };
