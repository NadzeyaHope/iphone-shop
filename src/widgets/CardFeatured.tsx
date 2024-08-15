import React, {useState} from 'react';
import {Button, Card, Image} from "@nextui-org/react";
import LoveIcon from "../../public/dropdown/LoveIcon";
import {ProductColor} from "../models/Products";

interface Props {
    title: string;
    price: number;
    color: ProductColor[];
    id: string;
    isRed : boolean;
}


const CardFeatured = (props: Props) => {
    const {price, id,isRed: initialIsRed, color, title} = props;
    const [isRed, setIsRed] = useState<boolean>(initialIsRed || false);  // Local state to manage favorite status
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


    return (
        <Card className="bg-default m-auto h-32 w-full p-4">
            <div className={'flex h-full items-center justify-between '}>
                <div className={'w-32'}>
                    <Image
                        className={'m-auto'}
                        removeWrapper
                        width={80}
                        alt="Card example background"
                        src={color?.[0]?.imageUrl[0] || ''}
                    />
                </div>
                <div className={'w-0.5 bg-opacity-20 bg-black h-full'}/>
                <div className={'text-medium w-60 md:text-lg font-semibold'}>{title}</div>
                <div style={{backgroundColor: color?.[0]?.colorHex || '#ffffff'}}
                     className={'w-5 border-2 rounded-full h-5'}></div>
                <div className={'w-0.5 bg-opacity-20 bg-black h-full'}/>
                <h4 className="text-content1 font-semibold text-tiny md:text-lg">USD$ {price}</h4>
                <Button onClick={toggleFavorite} isIconOnly><LoveIcon red={isRed}/></Button>
            </div>
        </Card>
    );
};

export default CardFeatured;