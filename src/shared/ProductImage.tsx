import React from "react";
import {Image} from "@nextui-org/react";

interface Props {
    img : string
}

const ProductImage =(props : Props) =>{

    const {img} = props;

    return (
            <Image
                isZoomed
                width={400}
                height={400}
                className={'m-auto'}
                alt="NextUI Fruit Image with Zoom"
                src={img}
                removeWrapper={true}
            />
    );
}

export default ProductImage;