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
        }),
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const client = await clientPromise;
                const db = client.db('iphone-shop');
                const user = await db.collection('users').findOne({
                    email: credentials?.email
                });

                if (user && user.password === credentials?.password) {
                    const {_id, password, ...userWithoutPassword} = user;
                    return userWithoutPassword as User;
                }

                return null;
            }
        })
    ],
    adapter: MongoDBAdapter(clientPromise as unknown as Promise<MongoClient>),
    secret: process.env.NEXTAUTH_SECRET,
};

export default authConfig;