'use client';
import React, {useState} from 'react';
import {Button, Image, Input, Select, SelectItem, Spacer, Textarea} from "@nextui-org/react";
import {AppleWatch, IPadProduct, IPhoneProduct, ProductCreate} from "../../../models/Products";
import {handleSubmitCreateProduct} from "../../../lib/other";
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

const defaultIPhoneProduct: IPhoneProduct = {
    name: '',
    price: '',
    description: '',
    category: 'iPhone',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: ''}],
    storageOptions:[{variant: '', price: ''}],
    countSIM: [],
};

const defaultIPadProduct: IPadProduct = {
    name: '',
    price: '',
    description: '',
    category: 'iPad',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: ''}],
    storageOptions: [],
    iPadModule: [],
    countSIM: [],
};

const defaultAppleWatch: AppleWatch = {
    name: '',
    price: '',
    description: '',
    category: 'AppleWatch',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: ''}],
    dimensions: [],
    display: [],
};



const Page = () => {
    const [formData, setFormData] = useState(defaultIPhoneProduct);


    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, colorIndex: number, imageIndex: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                const newColors = [...formData.colors];
                const newImageUrl = [...newColors[colorIndex].imageUrl];
                newImageUrl[imageIndex] = String(reader.result);
                newColors[colorIndex].imageUrl = newImageUrl;
                setFormData({...formData, colors: newColors});
            };

            reader.onerror = () => {
                console.error('Ошибка при чтении файла');
            };
        }
    };
    const handleAddImage = (colorIndex: number) => {
        const newColors = [...formData.colors];
        newColors[colorIndex].imageUrl.push('');
        setFormData({...formData, colors: newColors});
    };
    const handleRemoveLastImage = (colorIndex: number) => {
        const newColors = [...formData.colors];
        if (newColors[colorIndex].imageUrl.length > 0) {
            newColors[colorIndex].imageUrl.pop();
            setFormData({...formData, colors: newColors});
        }
    };

    const handleAddObject = (objectKey: keyof ProductCreate, newObject: Record<any, any>) => {
        setFormData({
            ...formData,
            [objectKey]: [...(formData[objectKey] as any), newObject]
        });
    };

    const handleRemoveLastObject = (object: keyof ProductCreate) => {
        if ((formData[object] as any).length > 0) {
            setFormData({
                ...formData,
                [object]: (formData[object] as any).slice(0, -1)
            });
        }
    };



    return (
        <div className="container space-y-4 mx-auto p-10">
            <form
                onSubmit={(e) => {
                    handleSubmitCreateProduct(e, formData)
                }}
                className="space-y-4"
            >
            <h1 className="text-2xl font-bold mb-4">Добавить новый продукт</h1>
            <Select
                label={'Category: '}
                labelPlacement={'outside-left'}
                value={formData.category}
                classNames={{
                    label: ['m-auto text-gray-400'],
                    mainWrapper: ['bg-gray-100 rounded-xl'],
                    popoverContent: ['bg-gray-100 rounded-xl'],
                }}
            >
                <SelectItem onClick={() => {
                    setFormData(defaultIPhoneProduct)
                    setFormData({...formData, category : 'iPhone'})
                }} value={formData.category} key={'iPhone'}>
                    iPhone
                </SelectItem>
                <SelectItem onClick={() => {
                    setFormData(defaultIPadProduct)
                }} value={formData.category} key={'iPad'}>
                    iPad
                </SelectItem>
            </Select>
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
                <hr/>
                {formData.colors.map((color: any, colorIndex: number) => (
                    <div key={colorIndex} className="space-y-2">
                        <InputCreateOption
                            productData={formData}
                            setProductData={setFormData}
                            optionName={'colors'}
                            optionObject={color}
                            optionObjectKey={'colorName'}
                            label={'Название цвета'}
                            optionObjectIndex={colorIndex}
                        />
                        <InputCreateOption
                            productData={formData}
                            setProductData={setFormData}
                            optionName={'colors'}
                            optionObject={color}
                            optionObjectKey={'colorHex'}
                            label={'Цвет Hex'}
                            optionObjectIndex={colorIndex}
                        />
                        <InputCreateOption
                            productData={formData}
                            setProductData={setFormData}
                            optionName={'colors'}
                            optionObject={color}
                            optionObjectKey={'price'}
                            label={'Цена (дополнительная цена за цвет)'}
                            optionObjectIndex={colorIndex}
                        />
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
                            </div>
                        ))}
                        <Button size={'md'} className={'mr-4'} color="secondary"
                                onClick={() => handleAddImage(colorIndex)} type="button">
                            добавить изображение (согласно цвету)
                        </Button>
                        <Button size={'md'} color="danger" onClick={() => {
                            handleRemoveLastImage(colorIndex)
                        }} type="button">
                            удалить последнее
                        </Button>
                    </div>
                ))}
                <hr/>
                <Button className={'mr-4'} color="secondary" onClick={()=>{handleAddObject('colors',{colorName: '', colorHex: '', imageUrl: [''], price: ''})}} type="button">
                    Добавить цвет
                </Button>
                <Button color="danger" onClick={() => {
                    handleRemoveLastObject('colors')
                }} type="button">
                    Удалить цвет
                </Button>
                <hr/>
                {formData.category === 'iPhone' && (
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
                            handleAddObject(('storageOptions' as keyof ProductCreate), {storage: '', price: ''})
                        }} type="button">
                            Добавить еще один вариант
                        </Button>
                        <Button color="danger" onClick={() => {
                            handleRemoveLastObject(('storageOptions' as keyof ProductCreate))
                        }} type="button">
                            Удалить вариант
                        </Button>
                        <Spacer/>
                    </>
                )}
                <Button color="primary" size="lg" type="submit">Создать</Button>
            </form>
        </div>
    );
};

export default Page;