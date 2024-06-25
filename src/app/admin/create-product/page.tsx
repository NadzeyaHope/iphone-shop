"use client";
import { Button, Input, Spacer, Textarea } from '@nextui-org/react';
import { useState } from "react";
import Image from "next/image";

const AddPhonePage: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [colors, setColors] = useState([{ colorName: '', colorHex: '', imageUrl: '', price: '' }]);
    const [storageOptions, setStorageOptions] = useState([{ storage: '', price: '' }]);
    const [price, setPrice] = useState('');

    const handleAddColor = () => {
        setColors([...colors, { colorName: '', colorHex: '', imageUrl: '', price: '' }]);
    };

    const handleAddStorageOption = () => {
        setStorageOptions([...storageOptions, { storage: '', price: '' }]);
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                const newColors = [...colors];
                newColors[index].imageUrl = String(reader.result);
                setColors(newColors);
            };

            reader.onerror = () => {
                console.error('Ошибка при чтении файла');
            };
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const phoneData = {
            name,
            price,
            description,
            colors,
            storageOptions
        };

        try {
            const response = await fetch('/api/test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(phoneData),
            });

            if (response.ok) {
                console.log('Phone data submitted successfully');
                // Очистить форму или перенаправить пользователя
            } else {
                console.error('Failed to submit phone data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mx-auto p-10">
            <h1 className="text-2xl font-bold mb-4">Add new product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    fullWidth
                    label="Phone Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    classNames={{
                        inputWrapper: ['bg-gray-100']
                    }}
                />
                <Input
                    fullWidth
                    label="Min price without color and storage"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
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
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <Spacer />
                <h2 className="text-xl font-bold">Colors</h2>
                {colors.map((color, index) => (
                    <div key={index} className="space-y-2">
                        <Input
                            classNames={{
                                inputWrapper: ['bg-gray-100']
                            }}
                            fullWidth
                            label="Color Name"
                            value={color.colorName}
                            onChange={(e) => {
                                const newColors = [...colors];
                                newColors[index].colorName = e.target.value;
                                setColors(newColors);
                            }}
                            required
                        />
                        <Input
                            classNames={{
                                inputWrapper: ['bg-gray-100']
                            }}
                            fullWidth
                            label="Color Hex"
                            value={color.colorHex}
                            onChange={(e) => {
                                const newColors = [...colors];
                                newColors[index].colorHex = e.target.value;
                                setColors(newColors);
                            }}
                            required
                        />
                        <Spacer/>
                            <Input
                                onChange={(e) => handleFileInputChange(e, index)}
                                type={'file'}
                                classNames={{
                                    base : ['w-1/2'],
                                }}
                            />
                            {color.imageUrl && typeof color.imageUrl === 'string' ? (
                                <Image src={color.imageUrl} width={100} height={100} alt={'Превью изображения'} />
                            ) : null}
                        <Spacer/>
                        <Input
                            classNames={{
                                inputWrapper: ['bg-gray-100']
                            }}
                            fullWidth
                            label="Price"
                            value={color.price}
                            onChange={(e) => {
                                const newColors = [...colors];
                                newColors[index].price = e.target.value;
                                setColors(newColors);
                            }}
                            required
                        />
                    </div>
                ))}
                <Spacer />
                <Button color={'secondary'} onClick={handleAddColor} type="button">
                    Add another color option
                </Button>
                <Spacer />
                <h2 className="text-xl font-bold">Storage Options</h2>
                {storageOptions.map((option, index) => (
                    <div key={index} className="space-y-2">
                        <Input
                            classNames={{
                                inputWrapper: ['bg-gray-100']
                            }}
                            fullWidth
                            label="Storage (GB)"
                            value={option.storage}
                            onChange={(e) => {
                                const newOptions = [...storageOptions];
                                newOptions[index].storage = e.target.value;
                                setStorageOptions(newOptions);
                            }}
                            required
                        />
                        <Input
                            classNames={{
                                inputWrapper: ['bg-gray-100']
                            }}
                            fullWidth
                            label="Price"
                            value={option.price}
                            onChange={(e) => {
                                const newOptions = [...storageOptions];
                                newOptions[index].price = e.target.value;
                                setStorageOptions(newOptions);
                            }}
                            required
                        />
                    </div>
                ))}
                <Spacer />
                <Button color={'secondary'} onClick={handleAddStorageOption} type="button">
                    Add another storage option
                </Button>
                <Spacer />
                <Button color={'primary'} size={'lg'} type="submit">Create</Button>
            </form>
        </div>
    );
};

export default AddPhonePage;
