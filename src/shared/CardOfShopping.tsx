'use client';
import React, {Key, useState} from 'react';
import {Card, CardFooter, CardHeader, Image} from "@nextui-org/react";
import LoveIcon from "../../public/dropdown/LoveIcon";
import {useRouter} from "next/navigation";

interface Props {
    id: string;
    title: string;
    img: string;
    price: string;
    mark?: string;
}


const CardOfShopping = (props: Props) => {
    const {title, img, price, mark, id} = props;
    const [selectedKey, setSelectedKey] = useState<Key>(id);
    const router = useRouter();

    const onSelectionChange = (id: Key) => {
        setSelectedKey(id);
        console.log(selectedKey)
    };

    const onChangeAccount = () => {
        router.push(`/product/${selectedKey}`);
    };

    return (
        <Card
            key={id}
            isPressable
            onPress={()=> {
                onSelectionChange(id)
                onChangeAccount()
            }}
            isFooterBlurred
            className="w-[300px] bg-default col-span-12 sm:col-span-5"
        >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-content1/60 uppercase font-bold">{mark}</p>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full pt-10 pb-5 h-full scale-125 -translate-y-6 object-cover"
                src={img}
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                    <h4 className="text-content1 text-medium">{title}</h4>
                    <p className={'text-tiny'}>{price}</p>
                </div>
                <LoveIcon/>
            </CardFooter>
        </Card>

    );
};

export default CardOfShopping;