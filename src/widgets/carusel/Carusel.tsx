import React from 'react';
import {EmblaOptionsType} from "embla-carousel";
import CategoriesItem from "../CategoriesItem";
import EmblaCarousel from "./EmblaCarousel";

export const OPTIONS: EmblaOptionsType = {dragFree: true}

const Carusel = () => {

    return (
        <>
        <div className={'hidden md:block'}>
            <EmblaCarousel options={OPTIONS}>
                <div className={'flex m-auto space-x-6'} >
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
                </div>
        </EmblaCarousel>
        </div>
    <div className={'block md:hidden'}>
                <EmblaCarousel>
                    <div className={'flex px-4 m-auto space-x-4 '} >
                        <CategoriesItem
                            className={'pt-1'}
                            width={40}
                            height={40}
                            title={'Headphones'} image={'/category/hearphones-removebg-preview.png'}/>
                        <CategoriesItem
                            className={'pt-2'}
                            width={40}
                            height={40}
                            title={'IPhone'} image={'/category/bage-16PRO-removebg-preview.png'}/>
                        <CategoriesItem
                            width={40}
                            height={40}
                            className={'pt-2'}
                            title={'IPad'} image={'/category/ipad13pro1-removebg-preview.png'}/>
                        <CategoriesItem
                            width={60}
                            height={60}
                            title={'MAC'} image={'/category/mac152-removebg-preview.png'}/>
                        <CategoriesItem
                            width={40}
                            height={40}
                            className={'pt-2'}
                            title={'Watch'} image={'/category/watchultraw1-removebg-preview.png'}/>
                    </div>
        </EmblaCarousel>
</div>
</>
    );
};

export default Carusel;