// This contains the dynamic route handler for NextAuth.js which will also contain all of your global NextAuth.js configuration.

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
 
  ],
  pages:{
    signIn:'auth/signin',    
    }
})