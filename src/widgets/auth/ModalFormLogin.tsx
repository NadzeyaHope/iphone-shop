import React, {useState} from "react";
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
import MailIcon from "../../../public/authIcons/MailIcon";
import LockIcon from "../../../public/authIcons/LockIcon";
import {signIn} from "next-auth/react";
import {GoogleSignInButton} from "../AuthButtons";

interface Props {
    onOpen: (e: any) => void;
    isOpen: boolean;
    onOpenChange : (isOpen : boolean)=>void;
}

const ModalFormLogin = (props: Props) => {
    const {onOpen, isOpen, onOpenChange} = props;
    const [userInfo, setUserInfo] = useState({email: "", password: ""});
    const handleSubmit = async (e : any) => {
        // validate your userinfo
        e.preventDefault()

        const res = await signIn("credentials", {
            email: userInfo.email,
            password: userInfo.password,
            redirect: false,
        });

        console.log(res);
    };
        return (<>
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
                                <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                                <ModalBody >
                                    <form onSubmit={(event) => {
                                        handleSubmit(event)
                                    }}>
                                        <Input
                                            value={userInfo.email}
                                            autoFocus
                                            onChange={({ target }) =>
                                                setUserInfo({ ...userInfo, email: target.value })
                                            }
                                            endContent={
                                                <MailIcon/>
                                            }
                                            label="Email"
                                            className={'mb-4'}
                                            placeholder="Enter your email"
                                            variant="bordered"
                                        />
                                        <Input
                                            className={'mb-2'}
                                            onChange={({ target }) =>
                                                setUserInfo({ ...userInfo, password: target.value })
                                            }
                                            value={userInfo.password}
                                            endContent={
                                                <LockIcon/>
                                            }
                                            label="Password"
                                            placeholder="Enter your password"
                                            type="password"
                                            variant="bordered"
                                        />
                                        <div className="flex py-2 px-1 justify-between">
                                            <Checkbox
                                                classNames={{
                                                    label: "text-small",
                                                    wrapper: ['border-1 border-content1']
                                                }}
                                            >
                                                Remember me
                                            </Checkbox>
                                            <Link color="primary" href="#" size="sm">
                                                Forgot password?
                                            </Link>
                                            <Button type={'submit'} color="primary" onPress={onClose}>
                                                Sign in
                                            </Button>
                                        </div>
                                    </form>
                                    <GoogleSignInButton/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>
        );
    };

export default ModalFormLogin;