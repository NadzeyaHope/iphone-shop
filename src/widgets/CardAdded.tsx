import React from 'react';
import {Button, Card, CardFooter, CardHeader, Image} from "@nextui-org/react";
import OkIcon from "../../public/smallIcons/OkIcon";
import TrashIcon from "../../public/smallIcons/TrashIcon";
import PencilIcon from "../../public/smallIcons/PencilIcon";

interface Props {
    img: string;
    title: string;
    price: number;
    variants: string;
    color: Record<string, string>
}


const CardAdded = (props: Props) => {
    const {img, price, variants, color, title} = props;
    return (
        <Card
            className="w-full md:w-[350px] m-auto bg-default"
        >
            <CardHeader className="flex justify-between">
                <Button><TrashIcon/></Button>
                {title}
                <Button><PencilIcon/></Button>
            </CardHeader>
            <div className={'m-auto'}>
                <Image
                    removeWrapper
                    alt="Card example background"
                    className="m-auto"
                    src={img}
                    width={200}
                />
            </div>
            <div className={'mt-5'}/>
            <div className={'flex m-auto text-opacity-30 gap-2'}>
                <div className={'text-gray-400'}>{variants}</div>
                |
                <div
                    style={{backgroundColor: color.hex}}
                    className={'w-5 m-auto ml-1 border-2 rounded-full h-5'}
                ></div>
            </div>
            <div className={'mt-3'}/>
            <CardFooter
                className="bg-content1 text-center bg-opacity-5 space-y-3 block bottom-0 border-t-1 border-zinc-100/50 ">
                <h4 className="text-content1 font-semibold text-lg">USD$ {price},00</h4>
                <Button className={'bg-content1 p-6 text-lg rounded-full text-default'}>Finish comperar <OkIcon/></Button>
            </CardFooter>
        </Card>
    );
};

export default CardAdded;