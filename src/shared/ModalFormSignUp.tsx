import React from "react";
import {
    Button,
    Checkbox,
    Input,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader
} from "@nextui-org/react";
import MailIcon from "../../public/authIcons/MailIcon";
import LockIcon from "../../public/authIcons/LockIcon";
import EyesIcon from "../../public/authIcons/eyesIcon";
import GoogleIcon from "../../public/authIcons/GoogleIcon";

interface Props {
    onOpen: (e: any) => void;
    isOpen: boolean;
    onOpenChange : (isOpen : boolean)=>void;
}

const ModalFormSignUp = (props: Props) => {
    const {onOpen, isOpen, onOpenChange} = props;

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
                            <ModalHeader className="flex flex-col gap-1">Sign up</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    label="Name"
                                    placeholder="Enter your name"
                                    variant="bordered"
                                />
                                <Input
                                    autoFocus
                                    endContent={
                                        <MailIcon/>
                                    }
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <EyesIcon/>
                                    }
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                <Input
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
                                        classNames={{
                                            label: "text-small",
                                            wrapper : ['border-1 border-content1']
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className={'mr-[144px] py-1 rounded-xl border-1 border-content1'} ><GoogleIcon/></Button>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Create
                                    </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}


export default ModalFormSignUp;