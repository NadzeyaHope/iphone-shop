import React from 'react';
import {EmblaOptionsType} from "embla-carousel";
import CategoriesItem from "../CategoriesItem";
import EmblaCarousel from "./EmblaCarousel";

export const OPTIONS: EmblaOptionsType = {dragFree: true}

const Carusel = () => {

    return (
        <EmblaCarousel options={OPTIONS}>
            <CategoriesItem
                width={70}
                height={70}
                title={'Headphones'} image={'/category/hearphones-removebg-preview.png'}/>
            <CategoriesItem
                width={70}
                height={70}
                title={'IPhone'} image={'/category/bage-16PRO-removebg-preview.png'}/>
            <CategoriesItem
                width={75}
                height={75}
                className={'pt-5'}
                title={'IPad'} image={'/category/ipad13pro1-removebg-preview.png'}/>
            <CategoriesItem
                width={100}
                height={100}
                title={'MAC'} image={'/category/mac152-removebg-preview.png'}/>
            <CategoriesItem
                width={80}
                height={80}
                title={'Watch'} image={'/category/watchultraw1-removebg-preview.png'}/>
        </EmblaCarousel>
    );
};

export default Carusel;