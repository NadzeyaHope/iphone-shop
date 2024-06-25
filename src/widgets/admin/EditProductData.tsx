import React, { useState, useEffect } from 'react';
import {Button, Image, Input, Spacer} from '@nextui-org/react';
import { twMerge } from 'tailwind-merge';
import {ColorsProduct, VariantsProduct} from "../../models/Products";

interface Props {
    params: string | string[] | undefined;
    title: string;
    price: string;
    image: string;
    colors: ColorsProduct[];
    variants: VariantsProduct[];
    startColor: string;
    startStorage: string;
    key: string;
}

const EditProductData: React.FC<Props> = (props: Props) => {
    const { params, price, key, variants, startColor, startStorage, colors, title } = props;
    const [color, setColor] = useState(startColor);
    const [basePrice, setBasePrice] = useState(parseFloat(price));
    const [actualPrice, setActualPrice] = useState(basePrice);
    const [storage, setStorage] = useState(startStorage);
    const [image, setImage] = useState(() => {
        const initialColor = colors.find(c => c.colorName === startColor);
        return initialColor ? initialColor.imageUrl : '';
    });

    useEffect(() => {
        const selectedColor = colors.find(c => c.colorName === color);
        const selectedStorage = variants.find(v => v.storage === storage);
        const colorPrice = selectedColor ? parseFloat(selectedColor.price) : 0;
        const storagePrice = selectedStorage ? parseFloat(selectedStorage.price) : 0;
        setActualPrice(basePrice + colorPrice + storagePrice);
    }, [color, storage, basePrice, colors, variants]);

    const onSetColor = (colorName: string) => {
        setColor(colorName);
        const selectedColor = colors.find(c => c.colorName === colorName);
        if (selectedColor) {
            setImage(selectedColor.imageUrl);
        }
    };

    const onChooseStorage = (variant: VariantsProduct) => {
        setStorage(variant.storage);
    };

    return (
        <div key={key} className={'block md:mb-96 md:flex relative'}>
            <div className={'block w-full md:w-1/2 '}>
                <Input
                    value={title}
                    classNames={{
                        inputWrapper: ['bg-gray-100']
                    }}
                    className={'font-semibold m-auto text-center w-44'}
                />
                <div className={'mt-12'}/>
                <div className={'w-52 m-auto h-[300px] md:w-[400px] md:h-[400px]'}>
                    <Image isZoomed={true} src={image} alt="Product Image" width={500} height={500}/>
                    <Spacer y={3}/>
                    <Button fullWidth={true} color={'danger'} >Change image</Button>
                </div>
            </div>
            <div className={'mt-10'}/>
            <div className={'space-y-10'}>
                <div className={'mt-12 text-center'}>
                    <Input
                        fullWidth={true}
                        size={'sm'}
                        label={'Color - '}
                        className={'flex justify-center'}
                        labelPlacement={'outside-left'}
                        value={color}
                        classNames={{
                            inputWrapper: ['bg-gray-100 w-16 '],
                        }}
                    />
                    <Spacer y={10}/>
                    {colors.map((el, i) => (
                        <div key={i} className={'flex'}>
                            <button
                                key={i}
                                onClick={() => onSetColor(el.colorName)}
                                style={{backgroundColor: el.colorHex}}
                                className={twMerge(
                                    'w-6 ml-1 border-2 rounded-full h-6',
                                    el.colorName === color && 'border-2 border-red-900'
                                )}></button>
                            <Input
                                fullWidth={true}
                                size={'sm'}
                                label={`Hex - `}
                                className={'flex justify-center'}
                                labelPlacement={'outside-left'}
                                value={el.colorHex}
                                classNames={{
                                    inputWrapper: ['bg-gray-100 w-24'],
                                }}
                            />
                        </div>
                    ))}
                    <div className={'mt-3'}/>
                    <div className={'flex gap-4 justify-center'}>
                        {variants.map((el, i) => (
                            <Button
                                key={i}
                                onClick={() => onChooseStorage(el)}
                                className={twMerge(
                                    'font-semibold rounded-full border-opacity-70 border-2 border-[#5C5C5C]',
                                    el.storage === storage && 'border-2 border-red-900'
                                )}
                            >
                                <p>{el.storage} GB</p>
                                <p className={'text-xs m-auto ml-3 font-semibold text-opacity-70 text-content1'}>$ {el.price}</p>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className={'bg-[#333333] flex-col space-y-3 text-center text-default p-3 rounded-3xl w-full md:h-[200px] md:w-[393px] '}>
                    <p className={'text-lg font-bold'}>$ {actualPrice.toFixed(2)}</p>
                    <Input
                        value={'10 month interest-free installments'}
                        classNames={{
                            inputWrapper: ['bg-default text-content1']
                        }}
                        className={'font-semibold m-auto text-center'}
                        size={'sm'}
                    />
                    <Input
                        value={'free delivery'}
                        size={'sm'}
                        classNames={{
                            inputWrapper: ['bg-default text-content1 w-44 m-auto']
                        }}
                        className={'font-semibold m-auto text-center'}
                    />
                    <Spacer />
                    <Button size={'md'} color={'primary'} className={'text-content1 w-1/3 font-semibold text-lg'}>Edit</Button>
                </div>
            </div>
        </div>
    );
};


export default EditProductData;