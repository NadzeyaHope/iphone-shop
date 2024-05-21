import React from 'react';
import Ellipse from "../../public/navIcons/Ellipse";
import Image from "next/image";
import CircleIcon from "../../public/smallIcons/CircleIcon";
import {twMerge} from "tailwind-merge";

interface Props {
    image : string;
    title : string;
    className? : string
}

const CategoriesItem = (props : Props) => {
    const {image, title, className} = props;
    return (
        <div className={twMerge('ml-5 sm:ml-20', className)} >
            <div className={'relative z-20 block md:hidden'}>
                <Ellipse/>
                <Image className={'absolute z-10 top-[19%] left-[17.5%] '} width={'69'} height={'10'} src={image}
                       alt={'sdfs'}/>
                <p className={'text-xs w-[94%] m-auto py-1 text-center text-default rounded-full  bg-content2 '}>{title}</p>
            </div>
            <div className={'relative z-20 hidden sm:block'}>
                <CircleIcon/>
                <Image className={'absolute z-10 top-[15%] left-[9%] '} width={'100'} height={'100'} src={image}
                       alt={'sdfs'}/>
                <p className={'text-tiny w-full m-auto py-2 mt-2 text-center text-default rounded-full  bg-content2 '}>{title}</p>
            </div>
        </div>
    );
};

export default CategoriesItem;