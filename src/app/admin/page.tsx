import React from 'react';
import {Card, CardHeader, Checkbox, Input} from "@nextui-org/react";
import SelectCategory from "../../shared/SelectCategory";
import ChipCard from "../../shared/ChipCard";

const Page = () => {
    return (
        <Card className={'bg-content2 bg-opacity-80 text-default space-y-6 m-auto w-[600px] px-10'}>
            <CardHeader className={'text-lg font-semibold justify-center'}>
                Add product
            </CardHeader>
            <Input
                type={"text"}
                label={'Name of product:'}
                className={'text-content1'}
                classNames={{
                    inputWrapper: ['rounded-2xl font-lg text-content1 bg-default'],
                    label: ['text-content1']
                }}
            />
            <SelectCategory/>
            <Input
                type={"text"}
                label={'Image src:'}
                className={'text-content1'}
                classNames={{
                    inputWrapper: ['rounded-2xl font-lg text-content1 bg-default'],
                    label: ['text-content1 text-md']
                }}
            />
            <Input
                type={"text"}
                label={'Color name:'}
                className={'text-content1'}
                classNames={{
                    inputWrapper: ['rounded-2xl font-lg text-content1 bg-default'],
                    label: ['text-content1 text-md']
                }}
            />
            <Input
                type={"text"}
                label={'Color hex:'}
                className={'text-content1'}
                classNames={{
                    inputWrapper: ['rounded-2xl font-lg text-content1 bg-default'],
                    label: ['text-content1 text-md']
                }}
            />
            <Input
                type={"text"}
                label={'Color name:'}
                className={'text-content1'}
                classNames={{
                    inputWrapper: ['rounded-2xl font-lg text-content1 bg-default'],
                    label: ['text-content1 text-md']
                }}
            />
            <Checkbox classNames={{label: ['text-default']}} defaultSelected>New</Checkbox>
            <ChipCard/>
        </Card>
    );
};

export default Page;