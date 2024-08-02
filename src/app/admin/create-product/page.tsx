'use client';
import React, {useEffect, useState} from 'react';
import {Button, Input, Spacer, Textarea} from "@nextui-org/react";
import {defaultIPhoneProduct, IPhoneProduct} from "../../../models/Products";
import {handleSubmitCreateProduct} from "../../../lib/other";
import SelectOption, {ProductCategory} from "../../../widgets/admin/CreateProduct/SelectOption";
import ColorOption from "../../../widgets/admin/CreateProduct/ColorOption";
import IphoneFormData from "../../../widgets/admin/IphoneFormData";
import IPadFormData from "../../../widgets/admin/IPadFormData";


const categoryMark = [
    'новинка',
    'акция',
    'хит',
    ''
]



const Page = () => {
    const [formData, setFormData] = useState(defaultIPhoneProduct);
    const [categorySelect, setCategorySelect] = useState(ProductCategory.phones)

    console.log(formData)

    const fieldProductCategory = (category: ProductCategory) => {

        switch (category) {
            case ProductCategory.phones :
                return <IphoneFormData formData={formData} setFormData={setFormData}/>
            case ProductCategory.ipad:
                return <>
                    <IPadFormData formData={formData} setFormData={setFormData}/>
                </>
            default :
                setFormData(defaultIPhoneProduct)
                return <IphoneFormData formData={formData} setFormData={setFormData}/>
        }
    }




    return (
        <div className="container space-y-4 mx-auto p-10">
            <form
                onSubmit={(e) => {
                    handleSubmitCreateProduct(e, formData)
                }}
                className={'space-y-4'}
            >
                <h1 className="text-2xl font-bold">Добавить новый продукт</h1>
                <Spacer y={4}/>
                <SelectOption categorySelect={categorySelect} setCategorySelect={setCategorySelect}/>
                <Input
                    fullWidth
                    label="Название продукта"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    classNames={{
                        inputWrapper: ['bg-gray-100']
                    }}
                />
                <Textarea
                    classNames={{
                        inputWrapper: ['bg-gray-100']
                    }}
                    fullWidth
                    label="Описание"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                />
                <Input
                    fullWidth
                    label="Минимальная цена"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                    classNames={{
                        inputWrapper: ['bg-gray-100']
                    }}
                />
                <Spacer y={4}/>
                <ColorOption formData={formData} setFormData={setFormData}/>
                <hr/>
                {fieldProductCategory(categorySelect)}
                <Spacer y={4}/>
                <Button color="primary" size="lg" type="submit">Создать</Button>
            </form>
        </div>
    );
};

export default Page;