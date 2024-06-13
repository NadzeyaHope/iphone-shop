import { getServerSession } from "next-auth";
import authConfig from "../../lib/auth";
import {redirect} from "next/navigation";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
    const loginIsRequiredServer =  async () => {
        const session = await getServerSession(authConfig);
        if (!session) return redirect("/");
    }
    await loginIsRequiredServer()

    const session = await getServerSession(authConfig);


    await wait(1000);

    return (
        <>
            <h3>This is your timeline: {session?.user?.email}</h3>
            <h3>This is your timeline: {session?.user?.name}</h3>
        </>
    );
}
