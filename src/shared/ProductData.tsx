import React, {useState} from 'react';
import ProductImage from "./product/ProductImage";
import {Button} from "@nextui-org/button";
import TruckIcon from "../../public/products/TruckIcon";
import StrightCardIcon from "../../public/products/StrightCardIcon";
import {twMerge} from "tailwind-merge";

const ProductData = ({params}: { params?: string }) => {
    const productId = String(params);
    const [color, setColor] = useState(0);
    const [storage, setStorage] = useState(0);

    const onSetColor = (i: number) => {
        setColor(i)
    }
    const onChooseStorage = (i : number) => {
        setStorage(i)
    }

    const item = {
        id: '1',
        title: "iPhone 15 Pro",
        mark: 'new',
        img: ["/products/macbookpng2.svg", "/products/macbookpng2.svg", "/products/macbookpng2.svg"],
        colors: [
            {color: 'Black', colorId: '#000000'},
            {color: 'Gray', colorId: '#565C6A'},
        ],
        storage : [
            {price : '8.299,00', memoryStorage : '128 GB'},
            {price : '9.299,00', memoryStorage : '428 GB'},
        ]

    }

    return (
        <div className={'block md:flex relative'}>
            <div className={'block w-full md:w-1/2 '}>
                <h2 className={' font-semibold text-center'}>{item.title}</h2>
                <div className={'mt-12'}/>
                <ProductImage img={item.img[0]}/>
                <div className={'mt-12 text-center'}>
                    {item.colors.map((el, i) => (
                        <div className={'flex-col justify-center'}>
                            {i === color &&
                                <div className={'flex justify-center'}>color - {el.color}</div>
                            }
                        </div>
                    ))}
                    <div className={'mt-3'} />
                    {item.colors.map((el, i) => (
                        <button
                            key={i}
                            onClick={() => onSetColor(i)}
                            style={{backgroundColor: el.colorId}}
                            className={twMerge(
                                'w-6 ml-1 border-2 rounded-full h-6',
                                i === color && 'border-2 border-red-900'
                            )}
                        ></button>
                    ))}
                    <div className={'mt-3'}/>
                    <div className={'flex gap-4 justify-center'}>
                        {item.storage.map((el, i) => (
                            <Button
                            onClick={()=>{onChooseStorage(i)}}
                                className={twMerge(
                                'font-semibold rounded-full border-opacity-70 border-2 border-[#5C5C5C]',
                                i === storage && 'border-2 border-red-900'
                                )}>
                        <p>{el.memoryStorage}</p>
                        <p className={'text-xs m-auto ml-3 font-semibold text-opacity-70 text-content1'}>$ {el.price}</p>
                    </Button>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={'bg-[#333333] flex-col space-y-3 text-center text-default p-3 rounded-3xl w-full md:h-[200px] md:w-[393px] '}>
                <p className={'text-lg font-bold'}>R$ 9.299,00</p>
                <p className={"text-tiny font-thin text-opacity-70"}>10 month interest-free installments</p>
                <p className={'text-tiny items-center flex gap-2 justify-center font-normal'}><TruckIcon/>free delivery
                </p>
                <Button className={'text-content1 font-semibold text-lg px-7 py-4 h-10'}>Buy
                    now <StrightCardIcon/></Button>
            </div>
        </div>
    );
};

export default ProductData;