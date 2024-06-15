import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "./db";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { MongoClient } from "mongodb";

// Создайте интерфейс пользователя
interface User {
    id: string;
    name?: string;
    email?: string;
    image? : string;
    role : string
}

// Конфигурация NextAuth
const authConfig: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_KEY_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
            profile: async (profile) => {
                const client = await clientPromise;
                const db = client.db();
                let user = await db.collection('users').findOne({ email: profile.email });
                if(!user){
                    const newUser = {
                        googleId: profile.id,
                        name: profile.name,
                        email: profile.email,
                        image: profile.picture,
                        role: 'user',
                    };
                    const result = await db.collection('users').insertOne(newUser);
                    user = await db.collection('users').findOne({ _id: result.insertedId });
                }
                return {
                    id: user?._id.toString(),
                    name: user?.name,
                    email: user?.email,
                    image: user?.image,
                    role: user?.role,
                } as User
            }
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const client = await clientPromise;
                const db = client.db();
                const user = await db.collection('users').findOne({
                    email: credentials?.email
                });

                if (user && user.password === credentials?.password) {
                    const userWithoutPassword: User = {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        role : 'user',
                    };
                    console.log(userWithoutPassword)
                    return userWithoutPassword;
                }

                return null;
            }
        })
    ],
    adapter: MongoDBAdapter(clientPromise as unknown as Promise<MongoClient>),
    secret: process.env.NEXTAUTH_SECRET,
};

export default authConfig;