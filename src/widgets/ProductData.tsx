import React, {useState} from 'react';
import {Button, Image} from '@nextui-org/react';
import {twMerge} from 'tailwind-merge';
import {ColorsProduct, VariantsProduct} from "../models/Products";

interface Props {
    params: string | string[] | undefined;
    title: string;
    price: string;
    image: string;
    colors: ColorsProduct[];
    variants: VariantsProduct[];
    startColor: string;
    startStorage: string;
    startPrice: string;
    key: string;
}

const ProductData: React.FC<Props> = (props: Props) => {
    const {params, price, key, startPrice, variants, startColor, startStorage, colors, title} = props;
    const [color, setColor] = useState(startColor);
    const [storage, setStorage] = useState(startStorage);
    const [actualPrice, setActualPrice] = useState(startPrice);
    const [image, setImage] = useState(() => {
        const initialColor = colors.find(c => c.colorName === startColor);
        return initialColor ? initialColor.imageUrl : '';
    });

    const onSetColor = (colorName: string) => {
        setColor(colorName);
        const selectedColor = colors.find(c => c.colorName === colorName);
        if (selectedColor) {
            setImage(selectedColor.imageUrl);
        }
    };

    const onChooseStorage = (variant: VariantsProduct) => {
        setStorage(variant.storage);
        setActualPrice(variant.price);
    };

    return (
        <div key={key} className={'block md:mb-96 md:flex relative'}>
            <div className={'block w-full md:w-1/2 '}>
                <h2 className={'font-semibold text-center'}>{title}</h2>
                <div className={'mt-12'}/>
                <div className={'w-52 m-auto h-[300px]  md:w-[400px] md:h-[400px]'}>
                    <Image isZoomed={true} src={image} alt="Product Image" width={500} height={500}/>
                </div>
            </div>
            <div className={'mt-10'}/>
            <div className={'space-y-10'} >
                <div className={'mt-12 text-center'}>
                    <div className={'flex justify-center'}>Color - {color}</div>
                    <div className={'mt-3'}/>
                    {colors.map((el, i) => (
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
                <div
                    className={'bg-[#333333] flex-col space-y-3 text-center text-default p-3 rounded-3xl w-full md:h-[200px] md:w-[393px] '}
                >
                    <p className={'text-lg font-bold'}>$ {price}</p>
                    <p className={'text-tiny font-thin text-opacity-70'}>10 month interest-free installments</p>
                    <p className={'text-tiny items-center flex gap-2 justify-center font-normal'}>free delivery</p>
                    <Button className={'text-content1 font-semibold text-lg px-7 py-4 h-10'}>Buy now</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductData;
