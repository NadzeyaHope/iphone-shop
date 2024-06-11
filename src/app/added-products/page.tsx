import React from 'react';
import CardAdded from "../../widgets/CardAdded";

const item = [
    {
    img : '/products/iphone15.jpg',
    title : 'IPhone 15 Pro',
    price : 699,
    variants : '64 GB',
    color : {name : "Black", hex : "#000000"},
},
    {
        img : '/products/iphone15.jpg',
        title : 'IPhone 15 Pro',
        price : 699,
        variants : '64 GB',
        color : {name : "Black", hex : "#000000"},
    },
    {
        img : '/products/iphone15.jpg',
        title : 'IPhone 15 Pro',
        price : 699,
        variants : '64 GB',
        color : {name : "Black", hex : "#000000"},
    },
    {
        img : '/products/iphone15.jpg',
        title : 'IPhone 15 Pro',
        price : 699,
        variants : '64 GB',
        color : {name : "Black", hex : "#000000"},
    },
]

const Page = () => {
    return (
        <div className={'justify-center'}>
            <div className={'mt-20'} />
            <div
                className="grid gap-y-4 md:gap-y-14 grid-cols-1 md:grid-cols-2">
                {item.map((el, index) => (
                    <CardAdded
                        key={index}
                        color={el.color}
                        variants={el.variants}
                        title={el.title}
                        img={el.img}
                        price={el.price}
                    />
                ))}
            </div>
        </div>
    )
};

export default Page;