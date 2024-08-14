import React from 'react';
import InputCreateOption from "../InputCreateOption";
import {IPadProduct, IPhoneProduct, ProductCreate} from "../../../models/Products";
import {Button, Spacer} from "@nextui-org/react";
import {handleAddObject, handleRemoveLastObject} from "../../../lib/createProduct";

interface Props {
    formData : IPhoneProduct | IPadProduct;
    setFormData : (arg : any) => void;
}

const StorageOption = (props : Props) => {
    const {formData, setFormData} = props;
    return (
        <>
            <h2 className="text-xl font-bold">Память телефона</h2>
            {formData.storageOptions?.map((storage, storageIndex) => (
                <div key={storageIndex}>
                    <InputCreateOption
                        productData={formData}
                        setProductData={setFormData}
                        optionName={('storageOptions' as keyof ProductCreate)}
                        optionObject={storage}
                        optionObjectKey={'variant'}
                        label={'Вариант памяти телефона'}
                        optionObjectIndex={storageIndex}
                    />
                    <InputCreateOption
                        productData={formData}
                        setProductData={setFormData}
                        optionName={('storageOptions' as keyof ProductCreate)}
                        optionObject={storage}
                        optionObjectKey={'price'}
                        label={'цена (которая прибавиться к сумме согласно памяти)'}
                        optionObjectIndex={storageIndex}
                    />
                </div>
            ))}
            <Spacer/>
            <hr/>
            <Button className={'mr-4'} color="secondary" onClick={() => {
                handleAddObject(setFormData, formData,('storageOptions' as keyof ProductCreate), {storage: '', price: ''})
            }} type="button">
                Добавить еще один вариант
            </Button>
            <Button color="danger" onClick={() => {
                handleRemoveLastObject(setFormData, formData,('storageOptions' as keyof ProductCreate))
            }} type="button">
                Удалить вариант
            </Button>
            <Spacer/>
        </>
    );
};

export default StorageOption;