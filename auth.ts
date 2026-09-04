import NextAuth from "@auth/nextjs"
import Google from "@auth/nextjs/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  secret: process.env.AUTH_SECRET,
})