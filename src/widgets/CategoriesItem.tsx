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
        <div className={twMerge('bg-black bg-opacity-88 p-4 rounded-full w-32 h-32 m-auto', className)} >
                <Image className={'m-auto'} width={width} height={height} src={image} alt={'fsd'}/>
        </div>
    );
};

export default CategoriesItem;