import React from 'react';
import GoogleIcon from "../../../public/authIcons/GoogleIcon";
import {Button} from "@nextui-org/react";

const ButtonGoogleSignup = () => {
    return (
        <Button

            className={'rounded-xl border-1 text-center'}><GoogleIcon/> Sign up with Google</Button>
    );
};

export default ButtonGoogleSignup;