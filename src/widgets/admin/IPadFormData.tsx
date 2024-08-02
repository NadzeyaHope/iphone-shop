import React from 'react';
import OptionList from "./CreateProduct/OptionList";
import {defaultIPadProduct, defaultIPhoneProduct, IPhoneProduct} from "../../models/Products";

interface Props {
    formData: IPhoneProduct;
    setFormData: (formData: IPhoneProduct) => void;
}

const IPadFormData = (props: Props) => {
    const {formData, setFormData} = props;
    setFormData(defaultIPadProduct)
    return (
        <div>
            ipads
        </div>
    );
};
export default IPadFormData;