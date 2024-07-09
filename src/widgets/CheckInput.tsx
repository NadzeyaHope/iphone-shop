import React, {useState} from 'react';
import InputCreateOption from "./admin/InputCreateOption";
import {Product} from "../models/Products";
import {Input} from "@nextui-org/react";




const CheckInput = () => {
    const [productData, setProductData] = useState<Product>({
        name: '',
        price: '',
        description: '',
        category: 'iPhone',
        colors: [{colorName: '', colorHex: '', imageUrl: [''], price: ''}],
        storageOptions: [{storage: '', price: ''}],
        display: [{size: '', price: ''}],
        dimensions: [{size: '', price: ''}],
        iPadModule: [{variant: '', price: ''}],
        countSIM: [{variant: '', price: ''}],
        mark: 'новинка',
    });


    const setOptions = (newOptions: any[], optionKey: string) => {
        setProductData((prevData: any) => ({
            ...prevData,
            [optionKey]: newOptions,
        }));
    };

    return (
        <div>
            {/*<InputCreateOption*/}
            {/*    options={productData.countSIM}*/}
            {/*    setOptions={setOptions}*/}
            {/*    labelOptions={'Количество симкарт (nano SIM + eSIM)'}*/}
            {/*    buttonLabel={'Добавить еще один вариант'}*/}
            {/*    productData={productData}*/}
            {/*    setProductData={setProductData}*/}
            {/*    optionsNew={{variant: '', price: ''}}*/}
            {/*    optionKey={'countSIM'}*/}
            {/*/> */}
            {/*<Input*/}
            {/*    classNames={{*/}
            {/*        inputWrapper: ['bg-gray-100']*/}
            {/*    }}*/}
            {/*    fullWidth*/}
            {/*    label="Цвет (Hex)"*/}
            {/*    value={color.colorHex}*/}
            {/*    onChange={(e) => {*/}
            {/*        const newColors = [...productData.colors];*/}
            {/*        newColors[colorIndex].colorHex = e.target.value;*/}
            {/*        setProductData({...productData, colors: newColors});*/}
            {/*    }}*/}
            {/*    required*/}
            {/*/>*/}
        </div>
    );
};

export default CheckInput;