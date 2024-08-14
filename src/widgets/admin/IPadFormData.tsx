import React, {useEffect} from 'react';
import OptionList from "./CreateProduct/OptionList";
import {defaultIPadProduct, IPadProduct, IPhoneProduct, MacProduct, Product} from "../../models/Products";
import {Spacer} from "@nextui-org/react";

interface Props {
    formData: IPadProduct | IPhoneProduct | MacProduct | Product;
    setFormData: (formData: IPadProduct | IPhoneProduct | MacProduct | Product) => void;
}

const IPadFormData = (props: Props) => {
    const {formData, setFormData} = props;
    useEffect(() => {
        setFormData({
            ...defaultIPadProduct// assuming defaultAppleWatch contains other default values
        });
    }, []);
    return (
        <div>
            <Spacer y={4}/>
            <OptionList
                formData={formData}
                setFormData={setFormData}
                optionName='storageOptions'
                optionLabel='Память ipad'
                optionObjectKey='variant'
            />
            <Spacer y={4}/>
            <hr/>
            <Spacer y={4}/>
            <OptionList
                formData={formData}
                setFormData={setFormData}
                optionName='countSIM'
                optionLabel='SIM/wi-fi only'
                optionObjectKey='variant'
            />
            <Spacer y={4}/>
        </div>
    );
};
export default IPadFormData;