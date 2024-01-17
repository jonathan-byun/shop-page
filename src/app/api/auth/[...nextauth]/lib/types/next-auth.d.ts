import type { DefaultUser, Session } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string

declare module 'next-auth/jwt' {
    interface JWT {
        id: UserId;
        stripeCustomerId: string | null;
    }
}

declare module 'next-auth' {
    interface Session {
        user: DefaultUser & {
            id: UserId;
            stripeCustomerId: string | null;
            isActive: boolean;
        }
    }
    interface User extends DefaultUser {
        id: UserId;
        stripeCustomerId: string | null;
        isActive: boolean;
    }
}