import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        const user = await res.json();

        if (res.ok && user) {
          return user; // login successful
        }

        // If login fails, throw error with backend message
        throw new Error(user.message || "Invalid credentials");
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },

  callbacks: {
    // Runs after login, updates JWT token
    async jwt({ token, user }) {
      if (user?.photoURL) token.photoURL = user.photoURL;
      if (user?.id) token.id = user.id; // include user ID in token
      return token;
    },

    // Runs whenever useSession() is called, updates session
    async session({ session, token }) {
      if (token?.photoURL) session.user.photoURL = token.photoURL;
      if (token?.id) session.user.id = token.id; // include user ID in session
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };