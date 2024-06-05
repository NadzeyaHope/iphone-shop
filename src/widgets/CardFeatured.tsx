import React from 'react';
import {Button, Card, CardFooter, CardHeader, Image} from "@nextui-org/react";
import OkIcon from "../../public/smallIcons/OkIcon";
import TrashIcon from "../../public/smallIcons/TrashIcon";
import PencilIcon from "../../public/smallIcons/PencilIcon";
import LoveIcon from "../../public/dropdown/LoveIcon";

interface Props {
    img: string;
    title: string;
    price: number;
    variants: string;
    color: Record<string, string>
}


const CardFeatured = (props: Props) => {
    const {img, price, variants, color, title} = props;
    return (
        <Card className="bg-default m-auto w-full md:w-[450px]">
            <div className={'flex'} >
                <Image
                    removeWrapper
                    alt="Card example background"
                    className="py-6"
                    src={img}
                    width={100}
                />
                <div className={'m-auto border-r-2 border-opacity-10 border-content1 pr-3 md:pr-10'} >
                    <div className={'text-medium md:text-lg font-semibold'} >{title}</div>
                    <div className={'flex m-auto text-opacity-30 gap-2'}>
                        <div className={'text-gray-400'}>{variants}</div>
                        |
                        <div
                            style={{backgroundColor: color.hex}}
                            className={'w-5 m-auto ml-1 border-2 rounded-full h-5'}
                        ></div>
                    </div>
                </div>
                <div
                    className="flex m-auto gap-3 pr-2 ">
                    <h4 className="text-content1 font-semibold text-tiny md:text-lg">USD$ {price},00</h4>
                    <div className={'m-auto'} ><LoveIcon/></div>
                </div>
            </div>
        </Card>
    );
};

export default CardFeatured;