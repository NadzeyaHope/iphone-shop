'use client';
import React, {useEffect, useState} from 'react';
import CardFeatured from "../../widgets/CardFeatured";
import {ProductCreate, ProductGet} from "../../models/Products";
import Progress from "../../shared/Progress";


const Page = () => {
    const [favoriteItems, setFavoriteItems] = useState<ProductGet[]>([]);
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
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(product => {
                setFavoriteItems(product.data)
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            });
    }, []);
    const filteredFavoriteItems = favoriteItems.filter(item => favorites.includes(item._id));


    return (
        <div className={'justify-center'}>
            <div className={'mt-10'}/>
            {loading ? <Progress/> :
                <div
                    className="space-y-5 md:px-64">
                    {filteredFavoriteItems.map((el, index) => (
                        <CardFeatured
                            isRed={favorites.includes(el._id)}
                            id={el._id}
                            key={index}
                            color={el.colors}
                            price={el.price}
                            title={el.name}
                        />
                    ))}
                </div>
            }
        </div>
    )
};
export default Page;