import type {NextRequest} from "next/server";
import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URL!;
const dbName = 'iphone-shop';
const client = new MongoClient(url);

export async function POST(request: NextRequest) {

    await client.connect();
    const db = client.db(dbName);

    const data = await request.json();

    const result = await db.collection('iphones').findOne(data)

    return Response.json(result);
}