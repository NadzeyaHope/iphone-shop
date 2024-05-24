import React from 'react';
import ProductImage from "./product/ProductImage";
import {Button} from "@nextui-org/button";
import TruckIcon from "../../public/products/TruckIcon";

const ProductData = ({params}: { params?: string }) => {
    const productId = String(params);
    const item = {
        id: '1',
        title: "iPhone 15 Pro",
        img: ["/products/macbookpng2.svg", "/products/macbookpng2.svg", "/products/macbookpng2.svg"],
        price: "$1200",
        mark: 'new',
        colors: [{"black": '#000000'}, {'gray': '#565C6A'}]
    }

    return (
        <div className={'block md:flex relative'}>
            <div className={'block w-full md:w-1/2 '}>
                <h2 className={' font-semibold text-center'}>{item.title}</h2>
                <div className={'mt-12'}/>
                <ProductImage img={item.img[0]}/>
                <div className={'mt-12'}>
                    <div className={'flex justify-center'}>color - Black</div>
                    <div className={'flex mt-2 gap-2 justify-center '}>
                        <div className={'w-6 rounded-full h-6 bg-amber-200'}></div>
                        <div className={'w-6 rounded-full h-6 bg-amber-400'}></div>
                    </div>
                    <div className={'mt-4'}/>
                    <div className={'flex gap-4 justify-center'}>
                        <Button className={'font-semibold rounded-full border-opacity-70 border-1 border-[#5C5C5C]'}>
                            <p>128 GB</p>
                            <p className={'text-xs m-auto ml-3 font-semibold text-opacity-70 text-content1'}>$
                                9.299,00</p>
                        </Button>
                        <Button className={'font-semibold rounded-full border-opacity-70 border-1 border-[#5C5C5C]'}>
                            <p>128 GB</p>
                            <p className={'text-xs m-auto ml-3 font-semibold text-opacity-70 text-content1'}>$
                                9.299,00</p>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={'bg-[#333333] text-default p-3 rounded-3xl h-[300px] w-full md:w-[393px] '}>
                <p className={'text-lg font-bold'}>R$ 9.299,00</p>
                <p className={"text-tiny font-thin text-opacity-70"} >10 month interest-free installments</p>
                <div className={'flex gap-2'} >
                    <TruckIcon/>
                    <p className={'text-tiny content-center font-normal'}>free delivery</p>
                </div>
            </div>
        </div>
    );
};

export default ProductData;