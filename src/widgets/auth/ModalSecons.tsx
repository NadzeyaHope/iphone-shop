import React, { useState } from 'react';
import { Button, Checkbox, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import MailIcon from '../../../public/authIcons/MailIcon';
import ButtonGoogleSignup from './ButtonGoogleSignup';
import Progress from '../../shared/Progress';
import { userEmailValidation, userNickNameValidation, userPasswordValidation } from '../../entities/user/validation';
import { z } from 'zod';
import SimpleInput from "../../shared/SimpleInput";
import PasswordInput from "../../shared/PasswordInput";

interface Props {
    onOpen: (e: any) => void;
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

const ModalFormSignUp: React.FC<Props> = ({ onOpen, isOpen, onOpenChange }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checkBox, setCheckBox] = useState(true);
    const [errorMessage, setErrorMessage] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
    });

    const onSetDataUser = (value: string, type: string) => {
        if (type === 'passwordEqual') {
            setConfirmPassword(value);
        } else {
            setData(prevData => ({ ...prevData, [type]: value }));
        }
    };

    const validateField = (validationSchema: any, value: any, field: string) => {
        try {
            validationSchema.parse(value);
            setErrorMessage(prev => ({ ...prev, [field]: '' }));
        } catch (e) {
            if (e instanceof z.ZodError) {
                setErrorMessage(prev => ({ ...prev, [field]: e.errors[0].message }));
            }
        }
    };

    const onEqualPassword = () => {
        if (data.password !== confirmPassword) {
            setErrorMessage(prev => ({ ...prev, confirmPassword: 'These passwords must be equal' }));
        } else {
            setErrorMessage(prev => ({ ...prev, confirmPassword: '' }));
        }
    };

    const onSubmit = async () => {

        if(data.name === ''){
            setErrorMessage({...errorMessage, name: 'Please input name'})
            return;
        }
        if(data.email === ''){
            setErrorMessage({...errorMessage, email: 'Please input email'})
            return;
        }
        if (data.password === ''){
            setErrorMessage({...errorMessage, password: 'Please input password'})
            return;
        }
        if(confirmPassword === ''){
            setErrorMessage({...errorMessage, confirmPassword: 'Please input confirmPassword'})
            return;
        }
        if(!checkBox){
            return;
        }
        try {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setLoading(true);
            const result = await response.json();
            console.log('Form successfully submitted:', result);
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            setLoading(true);
        }
        setLoading(false)
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" className="bg-default" backdrop="blur">
            <ModalContent>
                {onClose => (
                    <>
                        {loading ? (
                            <div className="h-96 pt-40">
                                <Progress />
                            </div>
                        ) : (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Sign up</ModalHeader>
                                <ModalBody>
                                    <SimpleInput
                                        label="Name"
                                        value={data.name}
                                        onChange={e => onSetDataUser(e.target.value, 'name')}
                                        errorMessage={errorMessage.name}
                                        onBlur={() => validateField(userNickNameValidation, { nickname: data.name }, 'name')}
                                    />
                                    <SimpleInput
                                        label="Email"
                                        type="email"
                                        value={data.email}
                                        onChange={e => onSetDataUser(e.target.value, 'email')}
                                        endContent={<MailIcon />}
                                        errorMessage={errorMessage.email}
                                        onBlur={() => validateField(userEmailValidation, { email: data.email }, 'email')}
                                    />
                                    <PasswordInput
                                        label="Password"
                                        value={data.password}
                                        onChange={e => onSetDataUser(e.target.value, 'password')}
                                        errorMessage={errorMessage.password}
                                        onBlur={() => validateField(userPasswordValidation, { password: data.password }, 'password')}
                                    />
                                    <PasswordInput
                                        label="Confirm your password"
                                        value={confirmPassword}
                                        onChange={e => onSetDataUser(e.target.value, 'passwordEqual')}
                                        errorMessage={errorMessage.confirmPassword}
                                        onBlur={onEqualPassword}
                                    />
                                    <div className="flex py-2 px-1 justify-between">
                                        <Checkbox
                                            isInvalid={!checkBox}
                                            isSelected={checkBox}
                                            onChange={() => setCheckBox(!checkBox)}
                                            classNames={{ label: 'text-small', wrapper: ['border-1 border-content1'] }}
                                        >
                                            Remember me
                                        </Checkbox>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <ButtonGoogleSignup />
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button type="submit" onPress={(event)=>{onSubmit()}} color="primary">
                                        Create
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ModalFormSignUp;
