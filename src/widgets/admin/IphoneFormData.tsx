import React from 'react';
import OptionList from "./CreateProduct/OptionList";
import {defaultIPhoneProduct, IPhoneProduct} from "../../models/Products";
import {Spacer} from "@nextui-org/react";

interface Props {
    formData: IPhoneProduct;
    setFormData: (formData: IPhoneProduct) => void;
}

const IphoneFormData = (props: Props) => {
    const {formData, setFormData} = props;
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