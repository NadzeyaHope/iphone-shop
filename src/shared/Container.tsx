import { ReactNode } from 'react';

export const Container = ({ children }: { children: Readonly<ReactNode> }) => {
    return (
        <section className={'max-w-7xl m-auto px-2 md:px-4'}>
            {children}
        </section>
    );
};
