import React from 'react';
import CardAdded from "../../widgets/CardAdded";
import CardOfShopping from "../../widgets/CardOfShopping";
import CardFeatured from "../../widgets/CardFeatured";

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
            <div className={'mt-10'} />
            <div
                className="grid justify-center gap-y-6 grid-cols-1 ">
                {item.map((el) => (
                    <CardFeatured
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