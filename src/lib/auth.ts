import {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "./db";
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import {MongoClient} from "mongodb";

const authConfig: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_KEY_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
            profile(profile){
                return {
                    id: profile.sub,
                    name : profile.name,
                    email : profile.email,
                    image : profile.picture,
                    role : profile.role ?? "admin"
                }
            }
        }),
    ],
    adapter: MongoDBAdapter(clientPromise as unknown as Promise<MongoClient>),
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt({ token, user }) {
            if(user) token.role = user.role
            return token
        },
        session({ session, user }) {
            session.user.role = user.role
            return session
        }
    }
};

export default authConfig;
