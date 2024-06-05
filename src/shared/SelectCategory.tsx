'use client'
import React from "react";
import {Select, SelectItem} from "@nextui-org/react";


const categories = [
    {
        key : 0,
        category : 'iphone',
    },
    {
        key : 1,
        category : 'mac book',
    },
    {
        key : 2,
        category : 'apple watch',
    },
    {
        key : 3,
        category : 'air pods',
    },

]

const SelectCategory = () => {
    return (
            <Select
                classNames={{
                    mainWrapper : ['bg-default rounded-2xl'],
                    popoverContent : ['bg-default']
                }}
                label="Select a category"
            >
                {categories.map((item) => (
                    <SelectItem
                    classNames={{
                        base:['bg-content1 bg-opacity-10']
                    }}
                        key={item.key}>
                        {item.category}
                    </SelectItem>
                ))}
            </Select>
    );
}
export default SelectCategory;