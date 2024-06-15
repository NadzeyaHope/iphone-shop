'use server';
import React, {ReactNode} from 'react';
import {getServerSession} from "next-auth";
import authConfig from "../lib/auth";
import Sidebar from "./Sidebar";

const GetSession = async () => {
    const session = await getServerSession(authConfig);

    return (
            <Sidebar session={session} />
    );
};

export default GetSession;