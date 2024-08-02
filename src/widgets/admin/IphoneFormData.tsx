import React, {useEffect} from 'react';
import OptionList from "./CreateProduct/OptionList";
import {
    defaultIPhoneProduct,
    defaultMacProduct,
    IPadProduct,
    IPhoneProduct,
    MacProduct,
    Product
} from "../../models/Products";
import {Spacer} from "@nextui-org/react";

interface Props {
    formData: IPadProduct | IPhoneProduct | MacProduct | Product;
    setFormData: (formData: IPadProduct | IPhoneProduct | MacProduct | Product) => void;
}

const IphoneFormData = (props: Props) => {
    const {formData, setFormData} = props;
    useEffect(() => {
        setFormData({
            ...defaultIPhoneProduct // assuming defaultAppleWatch contains other default values
        });
    }, []);
    return (
        <div>
            <Spacer y={4}/>
            <OptionList
                formData={formData}
                setFormData={setFormData}
                optionName='storageOptions'
                optionLabel='Память телефона'
                optionObjectKey='variant'
            />
            <Spacer y={4}/>
            <hr/>
            <Spacer y={4}/>
            <OptionList
                formData={formData}
                setFormData={setFormData}
                optionName='countSIM'
                optionLabel='SIM'
                optionObjectKey='variant'
            />
            <Spacer y={4}/>
        </div>
    );
};

export default IphoneFormData;