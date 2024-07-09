'use client';
import React, {useState} from 'react';
import {onAddProduct} from "../../../lib/admin-fetch";
import {Button, Input, Select, SelectItem, Spacer, Textarea} from "@nextui-org/react";
import Image from "next/image";
import {Product} from "../../../models/Products";
import InputCreateOption from "../../../widgets/admin/InputCreateOption";

const categoryItem = [
    'iPhone',
    'MacBook',
    'AirPods',
    'AppleWatch',
    'iPad'
];

const categoryMark = [
    'новинка',
    'акция',
    'хит',
    ''
]

const Page = () => {
    const [productData, setProductData] = useState<Product>({
        name: '',
        price: '',
        description: '',
        category: 'iPhone',
        colors: [{colorName: '', colorHex: '', imageUrl: [''], price: ''}],
        storageOptions: [{storage: '', price: ''}],
        display: [{size: '', price: ''}],
        dimensions: [{size: '', price: ''}],
        iPadModule: [{variant: '', price: ''}],
        countSIM: [{variant: '', price: ''}],
        mark: 'новинка',
    });

    const handleAddObject = (objectKey: keyof Product, newObject: Record<any, any>) => {
        setProductData({
            ...productData,
            [objectKey]: [...(productData[objectKey] as any), newObject]
        });
    };

    const handleRemoveLastObject = (object: keyof Product) => {
        if ((productData[object] as any).length > 0) {
            setProductData({
                ...productData,
                [object]: (productData[object] as any).slice(0, -1)
            });
        }
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, colorIndex: number, imageIndex: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                const newColors = [...productData.colors];
                const newImageUrl = [...newColors[colorIndex].imageUrl];
                newImageUrl[imageIndex] = String(reader.result);
                newColors[colorIndex].imageUrl = newImageUrl;
                setProductData({...productData, colors: newColors});
            };

            reader.onerror = () => {
                console.error('Ошибка при чтении файла');
            };
        }
    };

    const handleAddImage = (colorIndex: number) => {
        const newColors = [...productData.colors];
        newColors[colorIndex].imageUrl.push('');
        setProductData({...productData, colors: newColors});
    };
    const handleRemoveLastImage = (colorIndex: number) => {
        const newColors = [...productData.colors];
        if (newColors[colorIndex].imageUrl.length > 0) {
            newColors[colorIndex].imageUrl.pop();
            setProductData({...productData, colors: newColors});
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let filteredProductData: any = {
            name: productData.name,
            price: productData.price,
            description: productData.description,
            category: productData.category,
            colors: productData.colors,
            mark: productData.mark,
        };

        if (productData.category === 'iPhone' || productData.category === 'iPad') {
            filteredProductData.storageOptions = productData.storageOptions;
        }
        if (productData.category === 'iPhone') {
            filteredProductData.countSIM = productData.countSIM;
        }
        if (productData.category === 'iPad') {
            filteredProductData.iPadModule = productData.iPadModule;
        }
        if (productData.category === 'AppleWatch') {
            filteredProductData.display = productData.display;
            filteredProductData.dimensions = productData.dimensions;
        }

        try {
            const request = await onAddProduct(productData, '/api/test');
            if (request === true) {
                setProductData({
                    name: '',
                    price: '',
                    description: '',
                    category: 'iPhone',
                    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: ''}],
                    storageOptions: [{storage: '', price: ''}],
                    display: [{size: '', price: ''}],
                    dimensions: [{size: '', price: ''}],
                    iPadModule: [{variant: '', price: ''}],
                    countSIM: [{variant: '', price: ''}],
                    mark: 'новинка',
                });
            }
        } catch (e: any) {
            new Error(e.message);
        }
    };

    return (
        <div className="container mx-auto p-10">
            <h1 className="text-2xl font-bold mb-4">Добавить новый продукт</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    fullWidth
                    label="Название продукта"
                    value={productData.name}
                    onChange={(e) => setProductData({...productData, name: e.target.value})}
                    required
                    classNames={{
                        inputWrapper: ['bg-gray-100']
                    }}
                />
                <Select
                    fullWidth
                    label="Категории"
                    value={productData.category}
                    className="text-3xl"
                    classNames={{
                        mainWrapper: ['bg-gray-100 rounded-xl'],
                        popoverContent: ['bg-gray-100 rounded-xl'],
                    }}
                    onChange={(e) => setProductData({...productData, category: e.target.value})}
                    required
                >
                    {categoryItem.map((category, index) => (
                        <SelectItem
                            onClick={(e) => setProductData({...productData, category: category})}
                            key={index} value={category}>
                            {category}
                        </SelectItem>
                    ))}
                </Select>
                <Select
                    fullWidth
                    label="mark"
                    value={productData.mark}
                    className="text-3xl"
                    classNames={{
                        mainWrapper: ['bg-gray-100 rounded-xl'],
                        popoverContent: ['bg-gray-100 rounded-xl'],
                    }}
                    onChange={(e) => setProductData({...productData, mark: e.target.value})}
                    required
                >
                    {categoryMark.map((category, index) => (
                        <SelectItem
                            onClick={(e) => setProductData({...productData, mark: category})}
                            key={index} value={category}>
                            {category}
                        </SelectItem>
                    ))}
                </Select>
                <Textarea
                    classNames={{
                        inputWrapper: ['bg-gray-100']
                    }}
                    fullWidth
                    label="Описание"
                    value={productData.description}
                    onChange={(e) => setProductData({...productData, description: e.target.value})}
                    required
                />
                <h2 className="text-xl font-bold">Цена</h2>
                <Input
                    fullWidth
                    label="Минимальная цена"
                    value={productData.price}
                    onChange={(e) => setProductData({...productData, price: e.target.value})}
                    required
                    classNames={{
                        inputWrapper: ['bg-gray-100']
                    }}
                />
                <Spacer/>
                <h2 className="text-xl font-bold">Цвета</h2>
                {productData.colors.map((color: any, colorIndex: number) => (
                    <div key={colorIndex} className="space-y-2">
                        <InputCreateOption
                            productData={productData}
                            setProductData={setProductData}
                            optionName={'colors'}
                            optionObject={color}
                            optionObjectKey={'colorName'}
                            label={'Название цвета'}
                            optionObjectIndex={colorIndex}
                        />
                        <InputCreateOption
                            productData={productData}
                            setProductData={setProductData}
                            optionName={'colors'}
                            optionObject={color}
                            optionObjectKey={'colorHex'}
                            label={'Цвет Hex'}
                            optionObjectIndex={colorIndex}
                        />
                        <Spacer/>
                        <InputCreateOption
                            productData={productData}
                            setProductData={setProductData}
                            optionName={'colors'}
                            optionObject={color}
                            optionObjectKey={'price'}
                            label={'Цена (дополнительная цена за цвет)'}
                            optionObjectIndex={colorIndex}
                        />
                        <Spacer/>
                        {color.imageUrl.map((image: string, imageIndex: number) => (
                            <div key={imageIndex} className="space-y-2">
                                <Input
                                    onChange={(e) => handleFileInputChange(e, colorIndex, imageIndex)}
                                    label={`Изображение ${imageIndex + 1}`}
                                    required
                                    labelPlacement="inside"
                                    type="file"
                                    fullWidth={true}
                                    classNames={{
                                        inputWrapper: ['bg-gray-100'],
                                        label: ['text-sm font-tiny w-full pl-60 pt-3 m-auto'],
                                    }}
                                />
                                {image && typeof image === 'string' ? (
                                    <Image src={image} width={100} height={100} alt="Превью изображения"/>
                                ) : null}
                                <Spacer/>
                            </div>
                        ))}
                        <Button size={'md'} className={'mr-4'} color="secondary"
                                onClick={() => handleAddImage(colorIndex)} type="button">
                            добавить изображение
                        </Button>
                        <Button size={'md'} color="danger" onClick={() => {
                            handleRemoveLastImage(colorIndex)
                        }} type="button">
                            удалить последнее
                        </Button>
                        <Spacer/>
                    </div>
                ))}
                <Spacer/>
                <hr/>
                <Button className={'mr-4'} color="secondary" onClick={()=>{handleAddObject('colors',{colorName: '', colorHex: '', imageUrl: [''], price: ''})}} type="button">
                    Добавить еще один цвет
                </Button>
                <Button color="danger" onClick={() => {
                    handleRemoveLastObject('colors')
                }} type="button">
                    Удалить цвет
                </Button>
                <Spacer/>
                {productData.category === 'iPhone' && (
                    <>
                        <h2 className="text-xl font-bold">Память телефона</h2>
                        {productData.storageOptions?.map((storage, storageIndex) => (
                            <div key={storageIndex}>
                                <InputCreateOption
                                    productData={productData}
                                    setProductData={setProductData}
                                    optionName={'storageOptions'}
                                    optionObject={storage}
                                    optionObjectKey={'storage'}
                                    optionObjectIndex={storageIndex}
                                    label={'Память телефона'}
                                />
                                <Spacer y={3}/>
                                <InputCreateOption
                                    productData={productData}
                                    setProductData={setProductData}
                                    optionName={'storageOptions'}
                                    optionObject={storage}
                                    optionObjectKey={'price'}
                                    optionObjectIndex={storageIndex}
                                    label={'Цена прибавляемая к общей'}
                                />
                            </div>
                        ))}
                        <Spacer/>
                        <hr/>
                        <Button className={'mr-4'} color="secondary" onClick={() => {
                            handleAddObject('storageOptions', {storage: '', price: ''})
                        }} type="button">
                            Добавить еще один вариант
                        </Button>
                        <Button color="danger" onClick={() => {
                            handleRemoveLastObject('storageOptions')
                        }} type="button">
                            Удалить вариант
                        </Button>
                        <Spacer/>
                        <h2 className="text-xl font-bold">Количество SIM</h2>
                        {productData.storageOptions?.map((countSIM, countSIMIndex) => (
                            <div key={countSIMIndex}>
                                <InputCreateOption
                                    productData={productData}
                                    setProductData={setProductData}
                                    optionName={'countSIM'}
                                    optionObject={countSIM}
                                    optionObjectKey={'storage'}
                                    optionObjectIndex={countSIMIndex}
                                    label={'Количество SIM'}
                                />
                                <Spacer y={3}/>
                            </div>
                        ))}
                        <Spacer/>
                        <hr/>
                        <Button className={'mr-4'} color="secondary" onClick={() => {
                            handleAddObject('storageOptions', {storage: '', price: ''})
                        }} type="button">
                            Добавить еще один вариант
                        </Button>
                        <Button color="danger" onClick={() => {
                            handleRemoveLastObject('storageOptions')
                        }} type="button">
                            Удалить вариант
                        </Button>
                        <Spacer/>

                    </>
                )}
                {productData.category === 'iPad' && (
                    <>

                    </>
                )}
                {productData.category === 'AppleWatch' && (
                    <>

                    </>
                )}
                {productData.category === 'AirPods' && (
                    <>

                    </>
                )}
                <Spacer/>
                <Button color="primary" size="lg" type="submit">Создать</Button>
            </form>
        </div>
    );
};

export default Page;
