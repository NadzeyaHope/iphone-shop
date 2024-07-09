import React from 'react';
import {Button, Input, Spacer} from "@nextui-org/react";

interface Props {
    storageOptions: any[];
    setStorageOptions: (newOptions: any[]) => void;
    handleAddStorageOption: () => void;
    productData: any;

}

const StorageCreate = (props : Props) => {
    const {storageOptions,productData, setStorageOptions,handleAddStorageOption} = props;
    return (
        <>
            <Spacer/>
            <h2 className="text-xl font-bold">Варианты памяти</h2>
            {storageOptions.map((option, index) => (
                <div key={index} className="space-y-2">
                    <Input
                        classNames={{
                            inputWrapper: ['bg-gray-100']
                        }}
                        fullWidth
                        label="Оперативная память (RAM)"
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
                        label="Цена"
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
            <Button color="secondary" onClick={handleAddStorageOption} type="button">
                Добавить еще один вариант памяти
            </Button>
        </>
    );
};

export default StorageCreate;