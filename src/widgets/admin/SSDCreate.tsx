import React from 'react';
import {Button, Input} from "@nextui-org/react";

interface Props {
    SSDOptions: any[];
    setSSDOptions: (newOptions: any[]) => void;
    handleAddSSDOptions: () => void;
    productData: any;

}

const SSDCreate = (props : Props) => {
    const {SSDOptions,productData, setSSDOptions,handleAddSSDOptions} = props;
    return (
        <>
            <h2 className="text-xl font-bold">Варианты SSD</h2>
            {SSDOptions.map((variant, index) => (
                <div key={index} className="space-y-2">
                    <Input
                        classNames={{
                            inputWrapper: ['bg-gray-100']
                        }}
                        fullWidth
                        label="SSD"
                        value={variant.variantName}
                        onChange={(e) => {
                            const newOptions = [...SSDOptions];
                            newOptions[index].variantName = e.target.value;
                            setSSDOptions(newOptions);
                        }}
                        required
                    />
                    <Input
                        classNames={{
                            inputWrapper: ['bg-gray-100']
                        }}
                        fullWidth
                        label="Цена"
                        value={variant.price}
                        onChange={(e) => {
                            const newOptions = [...SSDOptions];
                            newOptions[index].price = e.target.value;
                            setSSDOptions(newOptions);
                        }}
                        required
                    />
                </div>
            ))}
            <Button color="secondary" onClick={handleAddSSDOptions} type="button">
                Добавить еще один вариант SSD
            </Button>
        </>
    );
};

export default SSDCreate;