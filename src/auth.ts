import NextAuth from "next-auth";
import ClickUp from "next-auth/providers/click-up";

type UserProfile = {
  id: string;
  username: string;
  email: string;
  profilePicture: string;
  initials: string;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    ClickUp({
      clientId: process.env.AUTH_CLICKUP_ID,
      clientSecret: process.env.AUTH_CLICKUP_SECRET,
      profile(profile: { user: UserProfile }) {
        console.log("ClickUp Profile:", profile);

        return {
          id: profile.user.id,
          name: profile.user.username,
          email: profile.user.email,
          profilePicture: profile.user.profilePicture,
          initials: profile.user.initials,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        console.log("JWT Callback - User:", user);
      }
      return token;
    },
    async session({ session, token }) {
      console.log("Session Callback - Token:", token);
      session.user = token.user as UserProfile;
      return session;
    },
  },
});
