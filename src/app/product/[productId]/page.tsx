"use client";
import React, {useEffect, useState} from 'react';
import {useParams} from 'next/navigation';
import Progress from "../../../shared/Progress";
import ProductData from "../../../widgets/ProductData";
import {ProductGet} from "../../../models/Products";


const Page: React.FC = () => {
    const params = useParams();
    const [product, setProduct] = useState<ProductGet | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/test');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                if (params?.productId) {
                    const foundProduct = data.data.find((el: any) => el._id === params.productId);
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
            <div className={'mt-10'}/>
            {product ? (
                <ProductData
                    productData={product}
                />
            ) : (
                <Progress/>
            )}
        </div>
    );
};

export default Page;
