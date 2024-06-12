import React from 'react';
import { Input } from '@nextui-org/react';

interface SimpleInputProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage: string;
    onBlur: () => void;
    endContent?: React.ReactNode;
    type?: string;
}

const SimpleInput: React.FC<SimpleInputProps> = ({ label, value, onChange, errorMessage, onBlur, endContent, type = 'text' }) => {
    return (
        <Input
            onChange={onChange}
            endContent={endContent}
            value={value}
            label={label}
            placeholder={`Enter your ${label.toLowerCase()}`}
            type={type}
            variant="bordered"
            onBlur={onBlur}
            errorMessage={errorMessage}
            isInvalid={errorMessage.length !== 0}
        />
    );
};

export default SimpleInput;

