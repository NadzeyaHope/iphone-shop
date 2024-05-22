import React from 'react';
import {EmblaOptionsType} from "embla-carousel";
import CategoriesItem from "../CategoriesItem";
import EmblaCarousel from "./EmblaCarousel";

export const OPTIONS: EmblaOptionsType = {dragFree: true}

const Carusel = () => {
    return (
        <EmblaCarousel options={OPTIONS}>
            <CategoriesItem title={'Air Pods'} image={'/caruselImage/iconairpod.png'}/>
            <CategoriesItem title={'IPhone'} image={'/caruselImage/iconapplewatch.png'}/>
            <CategoriesItem title={'Apple Watch'} image={'/caruselImage/iconIphone.png'}/>
            <CategoriesItem title={'Mac Book'}  image={'/caruselImage/iconIphone.png'}/>
        </EmblaCarousel>
    );
};

export default Carusel;