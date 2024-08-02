import React from 'react';
import {Select, SelectItem} from "@nextui-org/react";

interface Props {
    setCategorySelect: (arg: any) => void;
    categorySelect: ProductCategory;
}

export enum  ProductCategory{
    phones = 'phones',
    ipad = 'ipad',
}

const SelectOption = (props: Props) => {
    const {categorySelect, setCategorySelect} = props;
    return (
        <Select
            label={'Category: '}
            value={categorySelect}
            labelPlacement={'outside-left'}
            classNames={{
                label: ['m-auto text-gray-400'],
                mainWrapper: ['bg-gray-100 rounded-xl'],
                popoverContent: ['bg-gray-100 rounded-xl'],
            }}
        >
            {Object.values(ProductCategory).map(category => (
                <SelectItem onClick={() => {
                    setCategorySelect(category)
                }} value={category} key={category}>
                    {category}
                </SelectItem>
            ))}
        </Select>
    );
};

export default SelectOption;