import React, { useEffect } from 'react';
import { IPadProduct, IPhoneProduct, MacProduct, Product, defaultAppleWatch } from "../../models/Products";

interface Props {
    formData: IPadProduct | IPhoneProduct | MacProduct | Product;
    setFormData: (formData: IPadProduct | IPhoneProduct | MacProduct | Product) => void;
}

const AppleWatchFormData = (props: Props) => {
    const { formData, setFormData } = props;

    // Handle setting default form data outside the render phase
    useEffect(() => {
        setFormData({
            ...defaultAppleWatch // assuming defaultAppleWatch contains other default values
        });
    }, []);

    return (
        <div>
            {/* Add your Apple Watch specific form fields here */}
        </div>
    );
};

export default AppleWatchFormData;
