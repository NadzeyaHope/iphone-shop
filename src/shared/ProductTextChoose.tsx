import React from 'react';
import {Spacer} from "@nextui-org/react";

const ProductTextChoose = ({children}: { children: any }) => {
    return (
        <>
            <Spacer y={2}/>
            <div className={'flex font-semibold justify-center'}>{children}</div>
            <Spacer y={2}/>
        </>
    );
};

export default ProductTextChoose;