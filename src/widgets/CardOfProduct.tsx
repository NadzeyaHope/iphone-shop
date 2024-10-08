'use client';
import React, {useEffect, useState} from "react";
import CardOfShopping from "./CardOfShopping";
import Progress from "../shared/Progress";
import {ProductGet} from "../models/Products";


const CardOfProduct = () => {
    const [products, setProducts] = useState<ProductGet[]>([]);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState<string[]>([]);





    useEffect(() => {
        const favoriteIds = localStorage.getItem('favorite');

        if(favoriteIds){
            setFavorites(JSON.parse(favoriteIds))
        }


        fetch('http://localhost:3000/api/test')
            .then(response => {
                if (!response.ok) {
                    console.log('erro')
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
                    img={el.colors[0].imageUrl[0]}
                    title={el.name}
                    price={el.price}
                    mark={'new'}
                    isRed={favorites.includes(el._id)}
                />
            ))}
        </div>
    );
}


export default CardOfProduct;