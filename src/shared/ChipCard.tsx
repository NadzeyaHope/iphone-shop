'use client';
import React, {useState} from "react";
import {Button, Chip, Input} from "@nextui-org/react";

const initialFruits = ["65 GB"]

const ChipCard = () => {
    const [fruits, setFruits] = React.useState(initialFruits);
    const [newChip, setNewChip] = useState('');

    const onChangeChip = (value : string) => {
        setNewChip(value);
    }
    const onAddChip = () => {
        setFruits([...initialFruits, newChip])
    }

    const handleClose = (fruitToRemove : string) => {
        setFruits(fruits.filter(fruit => fruit !== fruitToRemove));
        if (fruits.length === 1) {
            setFruits(initialFruits);
        }
    };

    return (
        <div className={'text-content1 '}>
                <Input
                    type={"text"}
                    value={newChip}
                    onChange={(e)=>{onChangeChip(e.target.value)}}
                    label={'Add variants storages:'}
                    className={'text-content1'}
                    classNames={{
                        inputWrapper: ['rounded-2xl font-lg text-content1 bg-default'],
                        label: ['text-content1 text-md']
                    }}
                    endContent={<Button
                        onClick={onAddChip}
                        className={'border-1 border-content1'}>add chip</Button>}
                />
            <div className="flex gap-2 mt-5">
                {fruits.map((fruit, index) => (
                    <Chip isDisabled={false} key={index} onClose={() => handleClose(fruit)} variant="shadow">
                        {fruit}
                    </Chip>
                ))}
            </div>
        </div>
    );
}


export default ChipCard;