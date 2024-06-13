import React from 'react';
import GoogleIcon from "../../../public/authIcons/GoogleIcon";
import {Button} from "@nextui-org/react";
import {signIn} from "next-auth/react";

const ButtonGoogleSignup = () => {
    const loginWithGoogle = () => {
        signIn("google")
    }

    return (
        <Button
            onClick={loginWithGoogle}
            className={'rounded-xl border-1 text-center'}><GoogleIcon/> Sign up with Google</Button>
    );
};

export default ButtonGoogleSignup;