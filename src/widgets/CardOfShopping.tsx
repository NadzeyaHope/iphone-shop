'use client';
import React, {Key, useEffect, useState} from 'react';
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
    isRed? : boolean;
}

const CardOfShopping = (props: Props) => {
    const {title, isRed: initialIsRed, img, price, mark, id} = props;
    const [isRed, setIsRed] = useState<boolean>(initialIsRed || false);  // Local state to manage favorite status
    const [selectedKey, setSelectedKey] = useState<Key>(id);
    const router = useRouter();
    const {data} = useSession();

    useEffect(() => {
        // Check if this item is in the localStorage favorites on initial load
        const favoriteIds = localStorage.getItem('favorite');
        if (favoriteIds) {
            const favoritesArray = JSON.parse(favoriteIds);
            if (favoritesArray.includes(id)) {
                setIsRed(true);
            }
        }
    }, [id]);

    const toggleFavorite = () => {
        let favoriteIds = localStorage.getItem('favorite');
        let favoritesArray = favoriteIds ? JSON.parse(favoriteIds) : [];

        if (favoritesArray.includes(id)) {
            // If the id is already in favorites, remove it
            favoritesArray = favoritesArray.filter((favId: string) => favId !== id);
            setIsRed(false);  // Update the state
        } else {
            // If the id is not in favorites, add it
            favoritesArray.push(id);
            setIsRed(true);  // Update the state
        }

        // Update localStorage with the new favorites array
        localStorage.setItem('favorite', JSON.stringify(favoritesArray));
    };

    const onSelectionChange = (id: Key) => {
        setSelectedKey(id);
    };

    const onEdit = () => {
        router.push(`/admin/edit/${selectedKey}`);
    }

    const onChangeAccount = () => {
        router.push(`/product/${selectedKey}`);
    };

    return (
        <div className={'m-auto'}>
            <Card
                key={id}
                isPressable
                onPress={() => {
                    onSelectionChange(id);
                    onChangeAccount();
                }}
                isFooterBlurred
                className="relative w-[300px] m-auto bg-default"
            >
                <CardHeader className="top-1 flex items-start">
                    <p className="text-tiny text-content1/60 uppercase font-bold">{mark}</p>
                    {data?.user?.role === "admin" && (
                        <div className={'flex w-full gap-4 pr-2 justify-end'}>
                            <Button onPress={() => {
                                onSelectionChange(id);
                                onEdit();
                            }} size={'sm'} className={'bg-red-100'}>
                                <PencilIcon />
                            </Button>
                        </div>
                    )}
                </CardHeader>
                <div className={'h-[250px] m-auto'}>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className={'w-full h-full'}
                        src={img}
                    />
                </div>
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 ">
                    <div className={'flex w-full items-center'}>
                        <div className={'relative m-auto'}>
                            <h4 className="text-content1 text-lg">{title}</h4>
                            <p className={'text-tiny'}>$ {price}, 00</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
            <Button className={'absolute z-10 ml-[250px] mt-[-285px]'} isIconOnly onPress={toggleFavorite}>
                <LoveIcon red={isRed}/>
            </Button>
        </div>
    );
};

export default CardOfShopping;
