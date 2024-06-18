'use client';
import React from 'react';
import {useSession} from "next-auth/react";
import {Image} from "@nextui-org/react";

const PersonalHeader = () => {
    const {data} = useSession()
    return (
        <div className={'h-32 md:h-64 pt-3 md:pt-14 rounded-b-3xl shadow-2xl'} >
            <div className={'flex gap-6 justify-center'}>
                <Image className={'rounded-full'} src={String(data?.user.image)} width={100} height={100}/>
                <h3 className={'content-center font-light'}>Hello <span className={'text-primary font-normal md:font-semibold'} >{data?.user?.name}</span> !</h3>
            </div>
        </div>
    );
};

export default PersonalHeader;