import React from 'react';
import InputCreateOption from "../InputCreateOption";
import {IPadProduct, IPhoneProduct, ProductCreate} from "../../../models/Products";
import { Button, Spacer } from "@nextui-org/react";
import { handleAddObject, handleRemoveLastObject } from "../../../lib/createProduct";

interface Props {
    formData: IPadProduct | IPhoneProduct ;
    setFormData: (arg: any) => void;
    optionName: keyof IPadProduct | keyof IPhoneProduct ;
    optionLabel: string;
    optionObjectKey: string;
}

const OptionList = (props: Props) => {
    const { formData, setFormData, optionName, optionLabel, optionObjectKey } = props;

    const options = (formData as any)[optionName];

    if (!options) {
        return null;
    }

    return (
        <>
            <h2 className="text-xl font-bold">{optionLabel}</h2>
            <Spacer y={4}/>
            {options.map((option : any, index : number) => (
                <div className={'space-y-4'} key={index}>
                    <InputCreateOption
                        productData={formData}
                        setProductData={setFormData}
                        optionName={optionName as keyof ProductCreate}
                        optionObject={option}
                        optionObjectKey={optionObjectKey}
                        label={`${optionLabel} ${index + 1}`}
                        optionObjectIndex={index}
                    />
                    <InputCreateOption
                        productData={formData}
                        setProductData={setFormData}
                        optionName={optionName as keyof ProductCreate}
                        optionObject={option}
                        optionObjectKey={'price'}
                        label={`Цена (${optionLabel.toLowerCase()})`}
                        optionObjectIndex={index}
                    />
                    <hr/>
                    <Spacer y={4}/>
                </div>
            ))}
            <Button
                className={'mr-4'}
                color="secondary"
                onClick={() => {
                    handleAddObject(setFormData, formData, optionName as keyof ProductCreate, { [optionObjectKey]: '', price: '' });
                }}
                type="button"
            >
                Добавить вариант
            </Button>
            <Button
                color="danger"
                onClick={() => {
                    handleRemoveLastObject(setFormData, formData, optionName as keyof ProductCreate);
                }}
                type="button"
            >
                Удалить вариант
            </Button>
            <Spacer />
        </>
    );
};

export default OptionList;
