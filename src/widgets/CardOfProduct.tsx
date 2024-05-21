'use client';
import React from "react";
import CardOfShopping from "@/shared/CardOfShopping";

const CardOfProduct = () => {
    const list = [
        {
            id: '1',
            title: "iPhone 15 Pro",
            img: "/products/macbookpng2.svg",
            price: "$1200",
            mark: 'new',
        },
        {
            id: '2',
            title: "iPhone 15 Pro",
            img: "/products/macbookpng2.svg",
            price: "$1200",
            mark: 'new',
        },
        {
            id: '2',
            title: "iPhone 15 Pro",
            img: "/products/macbookpng2.svg",
            price: "$1200",
            mark: 'new',
        },
    ];

    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {list.map((item, index) => (
                <CardOfShopping
                    price={item.price}
                    title={item.title}
                    img={item.img}
                    key={item.id}
                    mark={item.mark}
                />
            ))}
        </div>
    );
}


export default CardOfProduct;