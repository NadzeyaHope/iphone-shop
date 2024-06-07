'use client';
import React, {useEffect, useState} from "react";
import CardOfShopping from "./CardOfShopping";
import Progress from "../shared/Progress";

export interface ColorsProduct {
    name: string;
    hex: string
}

export interface VariantsProduct {
    memory: string;
    price: number
}

export type Product = {
    _id: string;
    product_name: string;
    images: string[];
    mark: string;
    colors: ColorsProduct[];
    variants: VariantsProduct[];

}

const CardOfProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
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
                setLoading(false);
            })
            .catch(error => {
                // Обработка ошибок
                console.error('There has been a problem with your fetch operation:', error);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <Progress/>
    }

    return (
        <div
            className="grid justify-center gap-y-4 md:gap-y-14 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {products.map((el) => (
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