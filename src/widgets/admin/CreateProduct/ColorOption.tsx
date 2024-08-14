import React from 'react';
import InputCreateOption from "../InputCreateOption";
import {Button, Image, Input, Spacer} from "@nextui-org/react";
import {ProductCreate} from "../../../models/Products";
import {handleRemoveLastObject} from "../../../lib/createProduct";


interface Props {
    formData: ProductCreate;
    setFormData: (arg: any) => void;
}

const ColorOption = (props: Props) => {
    const {formData, setFormData} = props;

    const handleRemoveLastImage = (colorIndex: number) => {
        const newColors = [...formData.colors];
        if (newColors[colorIndex].imageUrl.length > 0) {
            newColors[colorIndex].imageUrl.pop();
            setFormData({...formData, colors: newColors});
        }
    };


    const handleAddImage = (colorIndex: number) => {
        const newColors = [...formData.colors];
        newColors[colorIndex].imageUrl.push('');
        setFormData({...formData, colors: newColors});
    };

    const handleAddObject = (setFormData: (arg: any) => void, formData: ProductCreate, objectKey: keyof ProductCreate, newObject: Record<any, any>) => {
        setFormData({
            ...formData,
            [objectKey]: [...(formData[objectKey] as any), newObject]
        });
    };


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

    return (
        <div>
            <h2 className="text-xl font-bold">Цвет продукта</h2>
            <Spacer y={4}/>
            {formData.colors.map((color: any, colorIndex: number) => (
                <div className={'space-y-4 '} key={colorIndex}>
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
                        <div key={imageIndex}>
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
                                <Image src={image} width={100} height={100} alt="Превью изображения"/>) : null}
                        </div>
                    ))}
                    <Button className={'mr-2'} size={'md'} color="secondary" onClick={() => handleAddImage(colorIndex)}
                            type="button">
                        добавить изображение (согласно цвету)
                    </Button>
                    <Button size={'md'} color="danger" onClick={() => {
                        handleRemoveLastImage(colorIndex)
                    }} type="button">
                        удалить последнее
                    </Button>
                    <Spacer y={4}/>
                </div>
            ))}
            <hr/>
            <Button className={'mr-4 mt-4 mb-4'} color="secondary" onClick={() => {
                handleAddObject(setFormData, formData, 'colors', {
                    colorName: '',
                    colorHex: '',
                    imageUrl: [''],
                    price: ''
                })
            }} type="button">
                Добавить цвет
            </Button>
            <Button color="danger" onClick={() => {
                handleRemoveLastObject(setFormData, formData, 'colors')
            }} type="button">
                Удалить цвет
            </Button>
        </div>
    );
};

export default ColorOption;