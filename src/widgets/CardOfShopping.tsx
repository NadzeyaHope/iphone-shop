'use client';
import React, {Key, useState} from 'react';
import {Button, Card, CardFooter, CardHeader, Image} from "@nextui-org/react";
import LoveIcon from "../../public/dropdown/LoveIcon";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import PencilIcon from "../../public/smallIcons/PencilIcon";

interface Props {
    id: string;
    title: string;
    img: string;
    price: number;
    mark?: string;
}


const CardOfShopping = (props: Props) => {
    const {title, img, price, mark, id} = props;
    const [selectedKey, setSelectedKey] = useState<Key>(id);
    const router = useRouter();
    const {data} = useSession();

    const onSelectionChange = (id: Key) => {
        setSelectedKey(id);
        console.log(selectedKey)
    };

    const onEdit = () => {
        router.push(`/admin/${selectedKey}`);
    }

    const onChangeAccount = () => {
        router.push(`/product/${selectedKey}`);
    };

    const onLoveIconClick = (event: any) => () => {
        event.stopPropagation()
        console.log("Love icon clicked");
        // Дополнительная логика для LoveIcon
    };

    console.log(data?.user.role)

    return (
        <Card
            key={id}
            isPressable
            onPress={() => {
                onSelectionChange(id)
                onChangeAccount()
            }}
            isFooterBlurred
            className="w-[300px] m-auto bg-default"
        >
            <CardHeader className="top-1 flex items-start">
                <p className="text-tiny text-content1/60 uppercase font-bold">{mark}</p>
                {data?.user?.role === "admin" && <div className={'flex w-full gap-4 pr-2 justify-end'}>
                    <Button onPress={() => {
                        onSelectionChange(id)
                        onEdit()
                    }} size={'sm'} className={'bg-red-100'}><PencilIcon/></Button>
                </div>}
            </CardHeader>
            <div className={'h-[250px] m-auto'}>
                <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 m-auto pt-10 pb-5 scale-125 -translate-y-6 object-cover"
                    src={img}
                    width={250}
                />
            </div>
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 ">
                <div className={'flex w-full items-center'} >
                    <div className={'relative m-auto'}>
                        <h4 className="text-content1 text-lg">{title}</h4>
                        <p className={'text-tiny'}>$ {price}, 00</p>
                    </div>
                    <Button
                        isIconOnly
                        onPress={(event) => {
                        onLoveIconClick(event)
                    }}><LoveIcon/></Button>
                </div>
            </CardFooter>
        </Card>

    );
};

export default CardOfShopping;