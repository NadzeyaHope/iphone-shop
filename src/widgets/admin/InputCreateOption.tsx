import React from 'react';
import {Input} from "@nextui-org/react";
import {Product} from "../../models/Products";


interface Props {
    productData: Product;
    setProductData: any;
    optionName: keyof Product; // colors
    optionObject: any; // color
    optionObjectKey: any; // colorHex
    optionObjectIndex: any; // colorIndex
    label: string;
}

const InputCreateOption = (props: Props) => {
    const {
        setProductData,
        productData,
        optionObject,
        optionName,
        optionObjectKey,
        optionObjectIndex,
        label,
    } = props;
//color -

    return (
        <>
            <Input
                classNames={{
                    inputWrapper: ['bg-gray-100']
                }}
                fullWidth
                label={label}
                value={optionObject[optionObjectKey]}
                onChange={(e) => {
                    const newObject = [...(productData[optionName] as any[])];
                    newObject[optionObjectIndex][optionObjectKey] = e.target.value;
                    setProductData({...productData, [optionName]: newObject});
                }}
                required
            />
        </>
    );
};

export default InputCreateOption;