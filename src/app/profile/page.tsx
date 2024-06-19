import {getServerSession} from "next-auth";
import authConfig from "../../lib/auth";
import {redirect} from "next/navigation";
import PersonalHeader from "../../widgets/personal/PersonalHeader";
import PersonalBody from "../../widgets/personal/PersonalBody";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Page() {
    const loginIsRequiredServer = async () => {
        const session = await getServerSession(authConfig);
        if (!session) return redirect("/");
    }
    await loginIsRequiredServer()

    const session = await getServerSession(authConfig);

    await wait(1000);

    return (
        <div>
            <PersonalHeader/>
            <div className={'mt-20'}>
                <PersonalBody/>
            </div>
        </div>
    );
}
