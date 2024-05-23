import { type NextRequest } from 'next/server';
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'iphone-shop';
const client = new MongoClient(url);

export async function GET(request: NextRequest) {

  await client.connect();
  const db = client.db(dbName);

  const data = await (await db.collection('iphones').find({})).toArray();

  return Response.json({ data });
}

export async function POST(request: NextRequest) {

  await client.connect();
  const db = client.db(dbName);

  const data = await request.json();

  const result = await db.collection('iphones').insertOne(data)

  return Response.json(result);
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