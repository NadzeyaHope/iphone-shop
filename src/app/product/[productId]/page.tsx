'use client';
import React, {useEffect, useState} from 'react';
import {useParams} from 'next/navigation';
import ProductData from "../../../shared/ProductData";
import {Product} from "../../../widgets/CardOfProduct";

const Page = () => {
    const params = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/test');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                if (params?.productId) {
                    const foundProduct = data.data.find((el: Product) => el._id === params.productId);
                    setProduct(foundProduct || null);
                }
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        };
        fetchProduct();
    }, [params?.productId]);

    return (
        <div>
            <div className={'mt-10'} />
            {product ? (
                <ProductData
                    startStorage={product.variants[0]?.memory}
                    image={product.images[0]}
                    startColor={product.colors[0]?.name}
                    startPrice={product.variants[0]?.price}
                    variants={product.variants}
                    colors={product.colors}
                    title={product.product_name}
                    params={params?.productId}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Page;
