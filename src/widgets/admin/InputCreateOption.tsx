import React from 'react';
import { Input } from "@nextui-org/react";
import { ProductCreate } from "../../models/Products";

interface Props {
    productData: ProductCreate;
    setProductData: (data: any) => void;
    optionName: keyof ProductCreate; // colors
    optionObject: any; // color
    optionObjectKey: string; // colorHex
    optionObjectIndex: number; // colorIndex
    label: string;
}

const InputCreateOption: React.FC<Props> = (props) => {
    const {
        setProductData,
        productData,
        optionObject,
        optionName,
        optionObjectKey,
        optionObjectIndex,
        label,
    } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedOptionObject = { ...optionObject, [optionObjectKey]: e.target.value };
        const updatedOptionArray = [...(productData[optionName] as any[])];
        updatedOptionArray[optionObjectIndex] = updatedOptionObject;

        setProductData({ ...productData, [optionName]: updatedOptionArray });
    };

    return (
        <Input
            classNames={{
                inputWrapper: ['bg-gray-100']
            }}
            fullWidth
            label={label}
            value={optionObject[optionObjectKey]}
            onChange={handleChange}
            required
        />
    );
};

export default InputCreateOption;
