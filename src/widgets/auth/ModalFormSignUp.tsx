import React, {useState} from "react";
import {Button, Checkbox, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import MailIcon from "../../../public/authIcons/MailIcon";
import EyesIcon from "../../../public/authIcons/eyesIcon";
import ButtonGoogleSignup from "./ButtonGoogleSignup";
import {userEmailValidation, userNickNameValidation, userPasswordValidation} from "../../entities/user/validation";
import {z} from "zod";
import Progress from "../../shared/Progress";


interface Props {
    onOpen: (e: any) => void;
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

const ModalFormSignUp = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const {onOpen, isOpen, onOpenChange} = props;
    const [data, setData] = useState({
        "name": '',
        "email": '',
        "password": '',
    });
    const [confirmPassword, setConfirmPassword] = useState('')
    const [checkBox, setCheckBox] = useState(true);
    const [errorMessage, setErrorMessage] = useState({
        'email': '',
        'password': '',
        'confirmPassword': '',
        'name': ''
    })


    const onSetDataUser = (value: string, type: string) => {
        if (type === 'name') {
            setData({...data, "name": value})
        } else if (type === 'password') {
            setData({...data, "password": value})
        } else if (type === 'email') {
            setData({...data, "email": value})
        } else if (type === 'passwordEqual') {
            setConfirmPassword(value)
        }
        return
    }

    const onValidatePassword = () => {
        try {
            userPasswordValidation.parse({password: data.password});
            setErrorMessage({...errorMessage, password: ''}); // Очистка ошибки, если валидация успешна
        } catch (e) {
            if (e instanceof z.ZodError) {
                setErrorMessage({...errorMessage, password: e.errors[0].message}); // Установка первого сообщения об ошибке
            }
        }
    }

    const onValidateEmail = () => {
        try {
            userEmailValidation.parse({email: data.email})
            setErrorMessage({...errorMessage, email: ''})
        } catch (e) {
            if (e instanceof z.ZodError) {
                setErrorMessage({...errorMessage, email: e.errors[0].message})
            }
        }
    }

    const onValidateNickname = () => {
        try {
            userNickNameValidation.parse({nickname: data.name})
            setErrorMessage({...errorMessage, name: ''})
        } catch (e) {
            if (e instanceof z.ZodError) {
                setErrorMessage({...errorMessage, name: e.errors[0].message})
            }
        }
    }
    const onEqualPassword = () => {
        if (data.password !== confirmPassword) {
            setErrorMessage({...errorMessage, confirmPassword: 'These passwords must be equal'})
            return
        } else {
            setErrorMessage({...errorMessage, confirmPassword: ''})
        }
    }


    const onSubmit = async (event : any) => {
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
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                className={'bg-default'}
                backdrop={'blur'}
            >
                <ModalContent>
                    {(onClose) => (
                                <>
                                    {
                                        loading ? <div className={'h-96 pt-40'}><Progress/></div> :
                                            <>
                                                <ModalHeader className="flex flex-col gap-1">Sign up</ModalHeader>
                                                <ModalBody>
                                                    <>
                                                        <Input
                                                            onChange={(event) => {
                                                                onSetDataUser(event.target.value, 'name')
                                                            }}
                                                            errorMessage={errorMessage.name}
                                                            value={data.name}
                                                            onBlur={() => {
                                                                onValidateNickname()
                                                            }}
                                                            isInvalid={errorMessage.name.length !== 0}
                                                            label="Name"
                                                            placeholder="Enter your name"
                                                            variant="bordered"
                                                        />
                                                        <Input
                                                            isInvalid={errorMessage.email.length !== 0}
                                                            onChange={(event) => {
                                                                onSetDataUser(event.target.value, 'email')
                                                            }}
                                                            endContent={
                                                                <MailIcon/>
                                                            }
                                                            errorMessage={errorMessage.email}
                                                            type={'email'}
                                                            onBlur={() => {
                                                                onValidateEmail()
                                                            }}
                                                            onSubmit={() => {
                                                                onValidateEmail()
                                                            }}
                                                            label="Email"
                                                            placeholder="Enter your email"
                                                            variant="bordered"
                                                            value={data.email}
                                                        />
                                                        <Input
                                                            onChange={(event) => {
                                                                onSetDataUser(event.target.value, 'password')
                                                            }}
                                                            endContent={<EyesIcon/>}
                                                            value={data.password}
                                                            label="Password"
                                                            placeholder="Enter your password"
                                                            type="password"
                                                            variant="bordered"
                                                            onBlur={() => {
                                                                onValidatePassword()
                                                            }}
                                                            errorMessage={errorMessage.password}
                                                            isInvalid={errorMessage.password.length !== 0}
                                                        />
                                                        <Input
                                                            onBlur={() => {
                                                                onEqualPassword()
                                                            }}
                                                            errorMessage={errorMessage.confirmPassword}
                                                            isInvalid={errorMessage.confirmPassword.length !== 0}
                                                            value={confirmPassword}
                                                            onChange={(event) => {
                                                                onSetDataUser(event.target.value, 'passwordEqual')
                                                            }}
                                                            endContent={
                                                                <EyesIcon/>
                                                            }
                                                            label="Сonfirm your password"
                                                            placeholder="Enter your password"
                                                            type="password"
                                                            variant="bordered"
                                                        />
                                                        <div className="flex py-2 px-1 justify-between">
                                                            <Checkbox
                                                                isInvalid={!checkBox}
                                                                isSelected={checkBox}
                                                                onChange={() => {
                                                                    setCheckBox(!checkBox)
                                                                }}
                                                                classNames={{
                                                                    label: "text-small",
                                                                    wrapper: ['border-1 border-content1']
                                                                }}
                                                            >
                                                                Remember me
                                                            </Checkbox>
                                                        </div>
                                                    </>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <ButtonGoogleSignup/>
                                                    <Button color="danger" variant="flat" onPress={onClose}>
                                                        Close
                                                    </Button>
                                                    <Button
                                                        type={'submit'}
                                                        onPress={(event) => {
                                                            onSubmit(event)
                                                        }}
                                                        color="primary">
                                                        Create
                                                    </Button>
                                                </ModalFooter>
                                            </>
                                    }
                                </>
                        )}
                </ModalContent>
            </Modal>
        </>
    );
}


export default ModalFormSignUp;