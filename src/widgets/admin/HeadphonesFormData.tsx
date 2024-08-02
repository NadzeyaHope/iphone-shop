import React, {useEffect} from 'react';
import {defaultHeadphones, IPadProduct, IPhoneProduct, MacProduct, Product} from "../../models/Products";

interface Props {
    formData: IPadProduct | IPhoneProduct | MacProduct | Product;
    setFormData: (formData: IPadProduct | IPhoneProduct | MacProduct | Product) => void;
}

const HeadphonesFormData = (props: Props) => {
    const {formData, setFormData} = props;
    useEffect(() => {
        setFormData({
            ...defaultHeadphones // assuming defaultAppleWatch contains other default values
        });
    }, []);
    return (
        <div>
        </div>
    );
};
export default HeadphonesFormData;