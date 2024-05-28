'use client';
import React, {useEffect, useState} from "react";
import CardOfShopping from "../shared/CardOfShopping";

export interface ColorsProduct {
    name : string;
    hex : string
}
export interface VariantsProduct {
    memory : string;
    price : number
}

export type Product = {
    _id : string;
    product_name : string;
    images : string[];
    mark : string;
    colors : ColorsProduct[];
    variants : VariantsProduct[];

}

const CardOfProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);


    useEffect( () => {
        fetch('http://localhost:3000/api/test')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                    console.log(data.data)
                    setProducts(data.data)
            })
            .catch(error => {
                // Обработка ошибок
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);


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
            id: '3',
            title: "iPhone 15 Pro",
            img: "/products/macbookpng2.svg",
            price: "$1200",
            mark: 'new',
        },
    ];


    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {products.map((el)=>(
                <CardOfShopping
                    key={el._id}
                    id={el._id}
                    img={el.images[0]}
                    title={el.product_name}
                    price={el.variants[0].price}
                    mark={el.mark}
                />
            ))}
        </div>
    );
}


export default CardOfProduct;