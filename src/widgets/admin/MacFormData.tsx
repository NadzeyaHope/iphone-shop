import React, {useEffect} from 'react';
import OptionList from "./CreateProduct/OptionList";
import {
    defaultAppleWatch,
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

const MacFormData = (props: Props) => {
    const {formData, setFormData} = props;
    // Handle setting default form data outside the render phase
    useEffect(() => {
        setFormData({
            ...defaultMacProduct // assuming defaultAppleWatch contains other default values
        });
    }, []);

    return (
        <div>
            <Spacer y={4}/>
            <OptionList
                formData={formData}
                setFormData={setFormData}
                optionName='SSD'
                optionLabel='SSD'
                optionObjectKey='variant'
            />
            <Spacer y={4}/>
            <hr/>
            <Spacer y={4}/>
            <OptionList
                formData={formData}
                setFormData={setFormData}
                optionName='RAM'
                optionLabel='RAM'
                optionObjectKey='variant'
            />
            <Spacer y={4}/>
        </div>
    );
};
export default MacFormData;