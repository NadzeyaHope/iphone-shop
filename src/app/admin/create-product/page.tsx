'use client';
import React, { useState, useEffect } from 'react';
import { Button, Input, Spacer, Textarea } from "@nextui-org/react";
import { defaultIPhoneProduct, IPadProduct, IPhoneProduct, MacProduct, Product } from "../../../models/Products";
import { handleSubmitCreateProduct } from "../../../lib/other";
import SelectOption, { ProductCategory } from "../../../widgets/admin/CreateProduct/SelectOption";
import ColorOption from "../../../widgets/admin/CreateProduct/ColorOption";
import IphoneFormData from "../../../widgets/admin/IphoneFormData";
import IPadFormData from "../../../widgets/admin/IPadFormData";
import MacFormData from "../../../widgets/admin/MacFormData";
import AppleWatchFormData from "../../../widgets/admin/AppleWatchFormData";
import HeadphonesFormData from "../../../widgets/admin/HeadphonesFormData";
import Progress from "../../../shared/Progress";
import Error from "next/error";

const categoryMark = [
    'новинка',
    'акция',
    'хит',
    ''
]

const Page = () => {
    const [formData, setFormData] = useState<IPadProduct | IPhoneProduct | MacProduct | Product>(defaultIPhoneProduct);
    const [categorySelect, setCategorySelect] = useState(ProductCategory.phones);


    useEffect(() => {
        switch (categorySelect) {
            case ProductCategory.phones:
                setFormData(defaultIPhoneProduct);
                break;
            case ProductCategory.ipad:
                setFormData({
                    ...defaultIPhoneProduct,
                    category: 'iPad',
                    // Add other default values for iPad
                });
                break;
            case ProductCategory.mac:
                setFormData({
                    ...defaultIPhoneProduct,
                    category: 'Mac',
                    // Add other default values for Mac
                });
                break;
            case ProductCategory.watch:
                setFormData({
                    ...defaultIPhoneProduct,
                    category: 'watch',
                    // Add other default values for Apple Watch
                });
                break;
            case ProductCategory.headphones:
                setFormData({
                    ...defaultIPhoneProduct,
                    category: 'headphones',
                    // Add other default values for Headphones
                });
                break;
            default:
                setFormData(defaultIPhoneProduct);
                break;
        }
    }, [categorySelect]);

    const fieldProductCategory = (category: ProductCategory) => {
        switch (category) {
            case ProductCategory.phones:
                return <IphoneFormData formData={formData} setFormData={setFormData} />
            case ProductCategory.ipad:
                return <IPadFormData formData={formData} setFormData={setFormData} />
            case ProductCategory.mac:
                return <MacFormData formData={formData} setFormData={setFormData} />
            case ProductCategory.watch:
                return <AppleWatchFormData formData={formData} setFormData={setFormData} />
            case ProductCategory.headphones:
                return <HeadphonesFormData formData={formData} setFormData={setFormData} />
            default:
                return <IphoneFormData formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div className="container space-y-4 mx-auto p-10">
            <form
                onSubmit={(e) => {
                    const request = handleSubmitCreateProduct(e, formData)
                    setFormData(defaultIPhoneProduct)
                    request ?? <Progress/>
                }}
                className={'space-y-4'}
            >
                <h1 className="text-2xl font-bold">Добавить новый продукт</h1>
                <Spacer y={4} />
                <SelectOption categorySelect={categorySelect} setCategorySelect={setCategorySelect} />
                <Input
                    fullWidth
                    label="Название продукта"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                />
                <Input
                    fullWidth
                    label="Минимальная цена"
                    value={String(formData?.price)}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value)})}
                    required
                    classNames={{
                        inputWrapper: ['bg-gray-100']
                    }}
                />
                <Spacer y={4} />
                <ColorOption formData={formData} setFormData={setFormData} />
                <hr />
                {fieldProductCategory(categorySelect)}
                <Spacer y={4} />
                <Button color="primary" size="lg" type="submit">Создать</Button>
            </form>
        </div>
    );
};

export default Page;
