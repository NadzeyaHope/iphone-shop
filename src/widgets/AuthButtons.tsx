"use client";

import { signIn } from "next-auth/react";
import GoogleIcon from "../../public/authIcons/GoogleIcon";
import {Button} from "@nextui-org/react";

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };

    return (
        <Button
            onClick={handleClick}
            className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-lg  transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
        >
            <GoogleIcon/>
            <span className="ml-4">Continue with Google</span>
        </Button>
    );
}


export function CredentialsSignInButton() {
    const handleClick = () => {
        signIn();
    };

    return (
        <button
            onClick={handleClick}
            className="w-full flex items-center font-semibold justify-center h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-white border-2 border-black text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
        >
            <span className="ml-4">Continue with Email</span>
        </button>
    );
}
