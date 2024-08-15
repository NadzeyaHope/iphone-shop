import React, {useState} from 'react';
import LoveIcon from "../../public/dropdown/LoveIcon";
import {Button} from "@nextui-org/react";

interface Props {
    toggleFavorite : (a : any)=>void;
    isRed : boolean;
}

const ButtonLoveIcon = (props : Props) => {
    const {isRed ,toggleFavorite } = props;

    return (
        <Button isIconOnly onPress={toggleFavorite}>
            <LoveIcon
                red={isRed}  // The heart icon will be red if isRed is true
            />
        </Button>
    );
};

export default ButtonLoveIcon;