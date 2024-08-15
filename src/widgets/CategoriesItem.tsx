import React from 'react';
import Ellipse from "../../public/navIcons/Ellipse";
import Image from "next/image";
import CircleIcon from "../../public/smallIcons/CircleIcon";
import {twMerge} from "tailwind-merge";

interface Props {
    image : string;
    title : string;
    className? : string;
    width : number;
    height : number;
}

const CategoriesItem = (props : Props) => {
    const {image,width,height, title, className} = props;
    return (
        <div className={twMerge('bg-black bg-opacity-88 p-1 md:p-4 rounded-full w-16 h-16 md:w-32 md:h-32', className)} >
                <Image className={'m-auto'} width={width} height={height} src={image} alt={'fsd'}/>
        </div>
    );
};

export default CategoriesItem;