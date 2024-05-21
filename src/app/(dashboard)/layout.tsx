import { type ReactNode } from 'react';
import Sidebar from "@/widgets/Sidebar";

const DashboardLayout = async ({ children }: Readonly<{ children: ReactNode; }>) => {

    return (
        <section className="flex">
            <main className="flex-grow">
                {children}
            </main>
        </section>
    );
};

export default DashboardLayout;
