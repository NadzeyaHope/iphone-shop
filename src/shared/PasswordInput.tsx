import React, {useState} from 'react';
import {Input} from '@nextui-org/react';
import EyesIcon from "../../public/authIcons/eyesIcon";

interface PasswordInputProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage: string;
    onBlur: () => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({label, value, onChange, errorMessage, onBlur}) => {
    const [inputType, setInputType] = useState<'password' | 'text'>('password');

    const togglePasswordVisibility = () => {
        setInputType(prevType => (prevType === 'password' ? 'text' : 'password'));
    };

    return (
        <Input
            onChange={onChange}
            endContent={
                <button type="button" onClick={togglePasswordVisibility}>
                    <EyesIcon/>
                </button>
            }
            value={value}
            label={label}
            placeholder={`Enter your ${label.toLowerCase()}`}
            type={inputType}
            variant="bordered"
            onBlur={onBlur}
            errorMessage={errorMessage}
            isInvalid={errorMessage.length !== 0}
        />
    );
};

export default PasswordInput;
