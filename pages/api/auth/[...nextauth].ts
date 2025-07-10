import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log('Authorize called with:', credentials);
        
        const demoUsers = [
          { id: '1', email: 'admin@carrental.com', name: 'Admin User' },
          { id: '2', email: 'manager@carrental.com', name: 'Manager User' }
        ];

        if (credentials?.email && credentials?.password) {
          console.log('Checking credentials...', credentials.email);
          if (credentials.password === 'demo123') {
            const user = demoUsers.find(u => u.email === credentials.email);
            console.log('Found user:', user);
            if (user) {
              return {
                id: user.id,
                email: user.email,
                name: user.name,
              };
            }
          }
        }
        console.log('Authorization failed');
        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signin',
  },
  debug: true,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log('JWT callback - user:', user);
      }
      return token;
    },
    async session({ session, token }) {
      console.log('Session callback:', session);
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
})
