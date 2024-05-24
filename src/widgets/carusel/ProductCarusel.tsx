import React from 'react';
import ProductImage from "../../shared/product/ProductImage";
import EmblaCarousel from "./EmblaCarousel";
import {OPTIONS} from "./Carusel";

interface Props {
    img : string[]
}

const ProductCarusel = (props : Props) => {
    const {img} = props;
    return (
        <div className={'h-[300px]'} >
            <EmblaCarousel options={OPTIONS}>
                {img.map((el, index)=>(
                    <div className={'h-[300px]'} ><ProductImage img={el}/></div>
                ))}
            </EmblaCarousel>
        </div>
    );
};

export default ProductCarusel;