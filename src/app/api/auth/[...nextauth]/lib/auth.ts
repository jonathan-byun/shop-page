import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import Google from "next-auth/providers/google";

function getGoogleCredentials() {
    const clientId =process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if (!clientId || clientId.length==0) {
        throw new Error('Missing client Id')
    }
    if (!clientSecret || clientSecret.length ==0) {
        throw new Error('Missing client Secret')
    }
    return {clientId,clientSecret}
}
const prisma = new PrismaClient()
export const authOptions: NextAuthOptions = {
    secret:process.env.GOOGLE_CLIENT_SECRET,
    adapter:PrismaAdapter(prisma),
    providers:[
        Google({
            clientId:getGoogleCredentials().clientId,
            clientSecret:getGoogleCredentials().clientSecret
        })
    ],
    session:{strategy:'jwt'},
    pages:{
        signIn: '/login'
    },
    callbacks:{
        // async jwt ({token,user}) {
        //     const tokenId = token.id as string
        //     console.log('token:', token, 'token id', tokenId)
        //     const dbUserResult = await prisma.user.findUnique({
        //         where:{
        //             id:tokenId
        //         }
        //     }) 
        //     console.log(dbUserResult)
        //     return{}
        // },
        redirect() {
            return '/homepage'
        }
    }
}