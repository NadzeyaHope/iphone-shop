import React from 'react';
import ProductTextChoose from "../../shared/ProductTextChoose";
import {Button, Spacer} from "@nextui-org/react";
import {twMerge} from "tailwind-merge";
import {ProductCreate} from "../../models/Products";

interface Props {
    objectOptions : ProductCreate[] | undefined | any[];
    labelOptions : string;
    onChooseOptions : (el : any)=>void;
    optionsKey : any;
    activeOptions : string | undefined;
    labelKey : string;
}

const ChooseOptions = (props : Props) => {
    const {objectOptions,labelKey, activeOptions,labelOptions,onChooseOptions,optionsKey} = props;
    return (
        <div >
            <Spacer y={4} />
            {
                objectOptions && objectOptions.length > 0 && <>
                    <ProductTextChoose>{labelOptions}</ProductTextChoose>
                    <div className={'flex-wrap text-center space-x-2 space-y-3 justify-center'}>
                        {objectOptions?.map((el, i) => (
                            <Button
                                key={i}
                                onClick={
                                () => onChooseOptions(el[optionsKey])}
                                className={twMerge(
                                    'font-semibold rounded-full border-opacity-70 border-2 border-[#5C5C5C]',
                                    el[optionsKey] === activeOptions && 'border-2 border-red-900'
                                )}
                            >
                                <p>{el[labelKey]}</p>
                                <p className={'text-xs m-auto ml-3 font-semibold text-opacity-70 text-content1'}>$ {el.price}</p>
                            </Button>
                        ))}
                    </div>
                </>
            }
        </div>
    );
};

export default ChooseOptions;