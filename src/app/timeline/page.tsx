import { getServerSession } from "next-auth";
import authConfig from "../../lib/auth";
import {redirect} from "next/navigation";
import {Image} from "@nextui-org/react";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
    const loginIsRequiredServer =  async () => {
        const session = await getServerSession(authConfig);
        if (!session) return redirect("/");
    }
    await loginIsRequiredServer()

    const session = await getServerSession(authConfig);


    await wait(1000);


    if (session?.user) {
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: session.user.email,
                name: session.user.name,
                image: session.user.image,
            }),
        });
    }

    console.log(`${session?.user?.email} this user`);
    return (
        <>
            <Image src={String(session?.user?.image)}  width={100} height={100} />
            <h3>This is your timeline: {session?.user?.email}</h3>
            <h3>This is your timeline: {session?.user?.name}</h3>
        </>
    );
}
