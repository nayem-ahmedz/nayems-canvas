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

      // Called when user tries to log in
      async authorize(credentials) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Invalid credentials");
        }

        // backend returns { user: { _id, name, email, photoURL } }
        return data.user;
      },
    }),
  ],

  session: { strategy: "jwt" },
  pages: { signIn: "/login" },

  callbacks: {
    // Runs when JWT is created/updated
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.name = user.name;
        token.email = user.email;
        token.photoURL = user.photoURL || null;
      }
      return token;
    },

    // Runs whenever useSession() is called
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.photoURL = token.photoURL;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };