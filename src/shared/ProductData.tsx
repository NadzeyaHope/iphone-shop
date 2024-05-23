import React from 'react';

const ProductData = ({params} : {params? : string}) => {
    const productId = String(params);


    return (
        <div>
            {productId}
        </div>
    );
};

export default ProductData;