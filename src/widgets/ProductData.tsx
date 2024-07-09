import React, {useEffect, useState} from 'react';
import {Button} from '@nextui-org/react';
import {twMerge} from 'tailwind-merge';
import ProductTextChoose from "../shared/ProductTextChoose";
import {Product} from "../models/Products";
import ChooseOptions from "./product/ChooseOptions";
import Slider from "./Slider";

const ProductData = ({productData}: { productData: Product }) => {
    const [color, setColor] = useState(productData.colors?.[0].colorName);
    const [basePrice, setBasePrice] = useState(parseFloat(productData.price));
    const [actualPrice, setActualPrice] = useState(basePrice);
    const [storage, setStorage] = useState(productData.storageOptions?.[0]?.storage);
    const [dimensions, setDimensions] = useState(productData.dimensions?.[0]?.size);
    const [countSim, setCountSim] = useState(productData.countSIM?.[0].variant);
    const [display, setDisplay] = useState(productData.display?.[0]?.size);
    const [iPadModule, setIPadModule] = useState(productData.iPadModule?.[0]?.variant);
    const [images, setImages] = useState<string[]>(() => {
        const initialColor = productData.colors.find(c => c.colorName === productData.colors?.[0].colorName);
        return initialColor ? initialColor.imageUrl : [];
    });

    const [orderData, setOrderData] = useState({
        color : productData.colors?.[0].colorName,
        basePrice : parseFloat(productData.price),
        storage : productData.storageOptions?.[0]?.storage,
        dimensions : productData.dimensions?.[0]?.size,
        countSim : productData.countSIM?.[0].variant,
        display : productData.display?.[0]?.size,
        iPadModule : productData.iPadModule?.[0]?.variant,
    })

    useEffect(() => {
        const selectedColor = productData.colors.find(c => c.colorName === color);
        const selectedStorage = productData.storageOptions?.find(v => v.storage === storage);
        const selectCountSIm = productData.countSIM?.find(v => v.variant === countSim);
        const colorPrice = selectedColor ? parseFloat(selectedColor.price) : 0;
        const storagePrice = selectedStorage ? parseFloat(selectedStorage.price) : 0;
        const countSimPrice = selectCountSIm ? parseFloat(selectCountSIm.price) : 0;
        setActualPrice(basePrice + colorPrice + storagePrice + countSimPrice);
    }, [color, storage, basePrice, productData.colors, productData.countSIM, productData.storageOptions]);

    const onSetColor = (colorName: string) => {
        setOrderData({...orderData, color : colorName});
        const selectedColor = productData.colors.find(c => c.colorName === colorName);
        if (selectedColor) {
            setImages(selectedColor.imageUrl);
        }
    };

    return (
        <div className="block md:mb-96 md:flex relative">
            <div className="block w-full md:w-1/2 ">
                <h2 className="font-semibold text-center">{productData.name}</h2>
                <div className="mt-12"/>
                <div className="w-52 m-auto h-[300px] md:w-[400px] md:h-[400px]">
                    <Slider images={images}/>
                </div>
            </div>
            <div className="mt-10"/>
            <div className="space-y-2">
                <div className="mt-12 text-center">
                    <ProductTextChoose>Color - {orderData.color}</ProductTextChoose>
                    {productData.colors.map((el, i) => (
                        <button
                            key={i}
                            onClick={() => onSetColor(el.colorName)}
                            style={{backgroundColor: el.colorHex}}
                            className={twMerge(
                                'w-6 ml-1 border-2 rounded-full h-6',
                                el.colorName === color && 'border-2 border-red-900'
                            )}
                        ></button>
                    ))}
                </div>
                <ChooseOptions
                    objectOptions={productData?.storageOptions}
                    labelOptions={'Choose Storage'}
                    onChooseOptions={setStorage}
                    optionsKey={"storage"}
                    activeOptions={storage}
                    labelKey={'storage'}
                />
                <ChooseOptions
                    objectOptions={productData?.countSIM}
                    labelOptions={'Choose count SIM'}
                    onChooseOptions={setCountSim}
                    optionsKey={"countSIM"}
                    activeOptions={countSim}
                    labelKey={'variant'}
                />
                <div
                    className="bg-[#333333] flex-col space-y-3 text-center text-default p-3 rounded-3xl w-full md:h-[200px] md:w-[393px] ">
                    <p className="text-lg font-bold">$ {actualPrice.toFixed(2)}</p>
                    <p className="text-tiny font-thin text-opacity-70">10 month interest-free installments</p>
                    <p className="text-tiny items-center flex gap-2 justify-center font-normal">free delivery</p>
                    <Button className="text-content1 font-semibold text-lg px-7 py-4 h-10">Buy now</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductData;
