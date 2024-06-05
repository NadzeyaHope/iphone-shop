import { ReactNode } from 'react';
import {twMerge} from "tailwind-merge";

export const Container = ({ children , className}: { children: Readonly<ReactNode>, className? : string }) => {
    return (
        <section className={twMerge('max-w-7xl m-auto px-2 md:px-4', className)}>
            {children}
        </section>
    );
};
