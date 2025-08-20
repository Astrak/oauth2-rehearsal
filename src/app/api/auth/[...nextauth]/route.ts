import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const auth = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.OAUTH_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, trigger }) {
      console.warn("==========");
      console.log("JWT log: ");
      console.log(token, user, account, profile, trigger);
      return { ...token };
    },
    async session({ session, token }) {
      console.warn("==========");
      console.log("session log: ");
      console.log(session, token);
      return session;
    },
    async signIn({ user, profile, email }) {
      console.warn("==========");
      console.log("signIn log: ");
      console.log(user, profile, email);
      return true;
    },
  },
});

export { auth as GET, auth as POST };
