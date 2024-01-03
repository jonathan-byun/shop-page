import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import Google from "next-auth/providers/google";

function getGoogleCredentials() {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if (!clientId || clientId.length == 0) {
        throw new Error('Missing client Id')
    }
    if (!clientSecret || clientSecret.length == 0) {
        throw new Error('Missing client Secret')
    }
    return { clientId, clientSecret }
}
const prisma = new PrismaClient()
export const authOptions: NextAuthOptions = {
    secret: process.env.GOOGLE_CLIENT_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            profile(profile) {
                const userRole = 'user'
                return{
                    id:profile.sub,
                     name:profile.name,
                     email:profile.email,
                     emailVerified:profile.email_verified, 
                     image:profile.picture,
                     role:userRole,
                    }
            },
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret
        })
    ],
    session: { strategy: 'jwt' },
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, user }) {
            const tokenId = token.sub as string
            let dbUserResult = await prisma.user.findUnique({
                where: {
                    id: tokenId
                }
            })
            console.log('here',dbUserResult)
            if (!dbUserResult) {
                token.id = user.id
                return token
            }

            return (dbUserResult)
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
            } return session
        },
        redirect() {
            return '/homepage'
        }
    }
}