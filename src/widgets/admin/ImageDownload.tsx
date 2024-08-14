import React from 'react';
import {Button, Input, Spacer} from "@nextui-org/react";
import Image from "next/image";
import InputCreateOption from "./InputCreateOption";
import {a} from "@nextui-org/slider/dist/use-slider-a94a4c83";
import {Product} from "../../models/Products";

interface Props {
    colors : any;
    productData : any;
    setProductData : any;
}

const ImageDownload = (props : Props) => {
    const {colors, productData, setProductData}  = props;

    const handleRemoveLastObject = (object: keyof Product) => {
        if ((productData[object] as any).length > 0) {
            setProductData({
                ...productData,
                [object]: (productData[object] as any).slice(0, -1)
            });
        }
    };

    const handleAddObject = (objectKey: keyof Product, newObject: Record<any, any>) => {
        setProductData({
            ...productData,
            [objectKey]: [...(productData[objectKey] as any), newObject]
        });
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, colorIndex: number, imageIndex: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                const newColors = [...colors];
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

    return (
        <div>
            {colors.map((color: any, colorIndex: number) => (
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
        </div>
    );
};

export default ImageDownload;