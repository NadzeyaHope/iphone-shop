import React from 'react';
import GoogleIcon from "../../../public/authIcons/GoogleIcon";
import {Button} from "@nextui-org/react";

const ButtonGoogleSignup = () => {
    return (
        <Button className={'mr-[144px] py-1 rounded-xl border-1 border-content1'} ><GoogleIcon/></Button>
    );
};

export default ButtonGoogleSignup;