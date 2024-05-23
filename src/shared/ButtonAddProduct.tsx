import React from 'react';
import BuyIcon from "../../public/smallIcons/BuyIcon";
import {Button} from "@nextui-org/react";

const ButtonAddProduct = () => {
    return (
        <Button
            className="text-tiny bg-content1 text-default " radius="full" size="sm">
            add
            <BuyIcon/>
        </Button>
    );
};

export default ButtonAddProduct;