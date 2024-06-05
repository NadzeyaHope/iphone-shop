'use client';
import React from "react";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";


const animals = [
    {
        id : 1,
        name : 'Iphone 15',
    },
    {
        id : 2,
        name : 'Iphone 15',
    },
    {
        id : 3,
        name : 'Iphone 15',
    },
]

const Search = () => {
    return (
        <Autocomplete
            className={''}
            popoverProps={{
                offset: 10,
                classNames: {
                    content: ["p-1 border-small bg-secondary"],
                },
            }}
            allowsCustomValue
            label="Search"
            radius={'full'}
            variant="bordered"
            defaultItems={animals}
            classNames={{
                base : ['w-full ',],
                selectorButton : 'ml-auto',
            }}
        >
            {(item) => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
        </Autocomplete>
    );
};
export default Search;