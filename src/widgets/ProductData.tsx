import React, {useEffect, useState} from 'react';
import {Button, Spacer} from '@nextui-org/react';
import {twMerge} from 'tailwind-merge';
import ProductTextChoose from "../shared/ProductTextChoose";
import {ProductGet} from "../models/Products";
import ChooseOptions from "./product/ChooseOptions";
import Slider from "./Slider";

const ProductData = ({productData}: { productData: ProductGet }) => {
    const [basePrice, setBasePrice] = useState(Number(productData?.price));
    const [actualPrice, setActualPrice] = useState(basePrice)
    const [storage, setStorage] = useState(productData.storageOptions?.[0]?.variant);
    const [countSIM, setCountSIM] = useState(productData.countSIM?.[0].variant);
    const [SSD, setSSD] = useState(productData.SSD?.[0].variant);
    const [RAM, setRAM] = useState(productData.RAM?.[0].variant);
    const [images, setImages] = useState<string[]>(() => {
        const initialColor = productData.colors.find(c => c.colorName === productData.colors?.[0].colorName);
        return initialColor ? initialColor.imageUrl : [];
    });

    const description = productData.description.replace(/;/g, "<br>");

    const [orderData, setOrderData] = useState({
        name : productData.name,
        color: productData.colors?.[0].colorName,
        basePrice: Number(productData.price),
        ...(productData.storageOptions?.[0] && { storage: productData.storageOptions?.[0]?.variant }),
        ...(productData.countSIM?.[0] && { countSim: productData.countSIM?.[0]?.variant }),
        ...(productData.SSD?.[0] && { ssd: productData.SSD?.[0]?.variant }),
        ...(productData.RAM?.[0] && { ram: productData.RAM?.[0]?.variant }),
    })

    useEffect(() => {
        const selectedColor = productData.colors?.find(v => v.colorName === orderData.color);
        const selectedStorage = productData.storageOptions?.find(v => v.variant === storage);
        const selectedSIM = productData.countSIM?.find(v => v.variant === countSIM);
        const selectedSSD = productData.SSD?.find(v => v.variant === SSD);
        const selectedRAM = productData.RAM?.find(v => v.variant === RAM);
        const colorPrice = selectedColor ? Number(selectedColor.price) : 0;
        const storagePrice = selectedStorage ? Number(selectedStorage.price) : 0;
        const countSIMPrice = selectedSIM ? Number(selectedSIM.price) : 0;
        const SSDPrice = selectedSSD ? Number(selectedSSD.price) : 0;
        const RAMPrice = selectedRAM ? Number(selectedRAM.price) : 0;
        setActualPrice(basePrice + RAMPrice + SSDPrice + colorPrice + storagePrice + countSIMPrice);
    }, [countSIM, SSD, storage, RAM, basePrice, productData.colors, productData.storageOptions, orderData.color]);

    const onSetColor = (colorName: string) => {
        setOrderData({...orderData, color: colorName});
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
                                el.colorName === orderData.color && 'border-2 border-red-900',
                            )}
                        ></button>
                    ))}
                </div>
                {
                    productData.storageOptions &&
                    <ChooseOptions
                        objectOptions={productData?.storageOptions}
                        labelOptions={'Storage'}
                        onChooseOptions={setStorage}
                        optionsKey={"variant"}
                        activeOptions={storage}
                        labelKey={'variant'}
                    />
                }
                {
                    productData.countSIM &&
                    <ChooseOptions
                        objectOptions={productData?.countSIM}
                        labelOptions={'SIM'}
                        onChooseOptions={setCountSIM}
                        optionsKey={"variant"}
                        activeOptions={countSIM}
                        labelKey={'variant'}
                    />
                }
                {
                    productData.SSD &&
                    <ChooseOptions
                        objectOptions={productData?.SSD}
                        labelOptions={'SSD'}
                        onChooseOptions={setSSD}
                        optionsKey={"variant"}
                        activeOptions={SSD}
                        labelKey={'variant'}
                    />
                }
                {
                    productData.RAM &&
                    <ChooseOptions
                        objectOptions={productData?.RAM}
                        labelOptions={'RAM'}
                        onChooseOptions={setRAM}
                        optionsKey={"variant"}
                        activeOptions={RAM}
                        labelKey={'variant'}
                    />
                }
                <Spacer y={6}/>
                <div
                    className="bg-[#333333] flex-col space-y-3 text-center text-default p-3 rounded-3xl w-full px-5 md:w-[393px] ">
                    <p className="text-lg font-bold">{actualPrice}</p>
                    <div className="text-sm items-center flex text-start gap-2 justify-center font-normal"
                         dangerouslySetInnerHTML={{__html: description}}/>
                    <Button className="text-content1 font-semibold text-lg px-7 py-4 h-10">Buy now</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductData;