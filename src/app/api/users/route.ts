import {type NextRequest, NextResponse} from 'next/server';
import {MongoClient} from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'iphone-shop';
const client = new MongoClient(url);

export async function GET(request: NextRequest) {

    await client.connect();
    const db = client.db(dbName);

    const data = await (await db.collection('users').find({})).toArray();

    return Response.json({data});
}

export async function POST(request: NextRequest, res: NextResponse) {

    await client.connect();
    const db = client.db(dbName);

    const data = await request.json();
    try {

        const existingUser = await db.collection('users').findOne({email: data.email})
        if (existingUser) {
            return new NextResponse(JSON.stringify({error: 'Email already exists'}), {status: 409});
        }
        const result = await db.collection('users').insertOne(data);
        return new NextResponse(JSON.stringify(result), {status: 201});
    } catch (e) {
        console.error('Error creating user:', e);
        return new NextResponse(JSON.stringify({error: 'Internal server error'}), {status: 500});
    } finally {
        await client.close();
    }
}


export async function PATCH(request: NextRequest) {

    return Response.json({
        a: 'PATCH',
        xsss: 8908888
    });
}


export async function DELETE(request: NextRequest) {

    return Response.json({
        a: 'DELETE',
        xsss: 8908888
    });
}