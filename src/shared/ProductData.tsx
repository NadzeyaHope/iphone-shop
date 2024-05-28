import React, {useState} from 'react';
import ProductImage from "./product/ProductImage";
import {Button} from "@nextui-org/button";
import TruckIcon from "../../public/products/TruckIcon";
import StrightCardIcon from "../../public/products/StrightCardIcon";
import {twMerge} from "tailwind-merge";
import {ColorsProduct, Product, VariantsProduct} from "../widgets/CardOfProduct";

const item = {
    "product_name": "IPhone 15 Pro",
    "images": [
        "/products/macbookpng2.svg"
    ],
    "mark" : "new",
    "colors": [
        {"name": "Black", "hex": "#000000"},
        {"name": "White", "hex": "#FFFFFF"}
    ],
    "variants": [
        {"memory": "64GB", "price": 699},
        {"memory": "128GB", "price": 799}
    ],
}

interface Props {
    params : string | string[] | undefined ;
    title : string ;
    image : string;
    colors : ColorsProduct[] ;
    variants : VariantsProduct[] ;
    startColor : string;
    startStorage : string;
    startPrice : number;

}

const ProductData = (props : Props) => {
    const { params, startPrice, variants, startColor, startStorage, colors, title, image} = props;
    const productId = String(params);
    const [color, setColor] = useState(startColor);
    const [storage, setStorage] = useState(startStorage);
    const [actualPrice , setActualPrice] = useState(startPrice)

    const onSetColor = (i: string) => {
        setColor(i)
    }
    const onChooseStorage = (el : any) => {
        console.log(el.memory)
        setStorage(el.memory)
        setActualPrice(el.price)
    }



    return (
        <div className={'block md:flex relative'}>
            <div className={'block w-full md:w-1/2 '}>
                <h2 className={' font-semibold text-center'}>{title}</h2>
                <div className={'mt-12'}/>
                <ProductImage img={String(image)}/>
                <div className={'mt-12 text-center'}>
                    <div className={'flex justify-center'}>color - {color}</div>
                    <div className={'mt-3'} />
                    {colors?.map((el, i) => (
                            <button
                                key={i}
                                onClick={() => onSetColor(el.name)}
                                style={{backgroundColor: el.hex}}
                                className={twMerge(
                                    'w-6 ml-1 border-2 rounded-full h-6',
                                    el.name === color && 'border-2 border-red-900'
                                )}
                            ></button>
                    ))}
                    <div className={'mt-3'}/>
                    <div className={'flex gap-4 justify-center'}>
                        {variants?.map((el, i) => (
                            <Button
                                onClick={() => {
                                    onChooseStorage(el)
                                }}
                                className={twMerge(
                                    'font-semibold rounded-full border-opacity-70 border-2 border-[#5C5C5C]',
                                    String(el.memory) === storage && 'border-2 border-red-900'
                                )}>
                                <p>{el.memory}</p>
                                <p className={'text-xs m-auto ml-3 font-semibold text-opacity-70 text-content1'}>$ {el.price}</p>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            <div className={'mt-10'} />
            <div
                className={'bg-[#333333] flex-col space-y-3 text-center text-default p-3 rounded-3xl w-full md:h-[200px] md:w-[393px] '}>
                <p className={'text-lg font-bold'}>R$ {actualPrice}</p>
                <p className={"text-tiny font-thin text-opacity-70"}>10 month interest-free installments</p>
                <p className={'text-tiny items-center flex gap-2 justify-center font-normal'}><TruckIcon/>free delivery</p>
                <Button className={'text-content1 font-semibold text-lg px-7 py-4 h-10'}>Buy now<StrightCardIcon/></Button>
            </div>
        </div>
    );
};

export default ProductData;