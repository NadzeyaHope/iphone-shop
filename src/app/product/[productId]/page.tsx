"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProductData from "../../../widgets/ProductData";
import Progress from "../../../shared/Progress";
import {ColorsProduct, VariantsProduct} from "../../../models/Products";

type Product = {
    _id: string;
    name: string;
    description: string;
    price : string;
    colors: ColorsProduct[];
    storageOptions: VariantsProduct[];
}

const Page: React.FC = () => {
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
                    price={product.price}
                    key={product._id}
                    startStorage={product.storageOptions?.[0]?.storage || ''}
                    image={product.colors?.[0]?.imageUrl || ''}
                    startColor={product.colors?.[0]?.colorName || ''}
                    startPrice={product.storageOptions?.[0]?.price || ''}
                    variants={product.storageOptions}
                    colors={product.colors}
                    title={product.name}
                    params={params?.productId}
                />
            ) : (
                <Progress/>
            )}
        </div>
    );
};

export default Page;
