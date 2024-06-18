'use client';
import React from "react";
import {
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    useDisclosure
} from "@nextui-org/react";
import Logo from "../../public/navbar/Logo";
import useLang from "../hooks/useLang";
import {setLang} from "../context/Lang";
import {AllowedLangs} from "../constants/lang";
import ModalFormSignUp from "./auth/ModalFormSignUp";
import {useSession} from "next-auth/react";
import ModalFormLogin from "./auth/ModalFormLogin";
import {signOut} from "next-auth/react";

const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
];


const Sidebar = () => {
    const {lang, translations} = useLang();
    const {isOpen: isOpenLogin, onOpen: onOpenLogin, onOpenChange: onOpenChangeLogin} = useDisclosure();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {isOpen: isOpenSignUp, onOpen: onOpenSignUp, onOpenChange: onOpenChangeSignUp} = useDisclosure();

    const handleSwitchLang = (lang: string) => {
        setLang(lang as AllowedLangs)
        localStorage.setItem('lang', JSON.stringify(lang))
    }

    const handleSwitchToRu = () => handleSwitchLang('ru')
    const handleSwitchToEn = () => handleSwitchLang('en')

    const {data} = useSession()
    console.log(data?.user)

    return (
        <>
            <ModalFormSignUp
                onOpen={onOpenSignUp}
                isOpen={isOpenSignUp}
                onOpenChange={onOpenChangeSignUp}
            />
            <ModalFormLogin onOpen={onOpenLogin} isOpen={isOpenLogin} onOpenChange={onOpenChangeLogin}/>
            <Navbar>
                <NavbarBrand className={'hidden sm:flex'}>
                    <p className="font-bold text-inherit">
                        <Link href={'/'}>
                            <Logo/>
                        </Link>
                    </p>
                </NavbarBrand>
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle/>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-6" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="/">
                            {translations[lang].sidebar.menu_home}
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            {translations[lang].sidebar.menu_catalog}
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            {translations[lang].sidebar.menu_contact}
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            {translations[lang].sidebar.menu_about}
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/profile">
                            Personal
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    {!data ?
                        <>
                            <NavbarItem className="hidden lg:flex">
                                <Button onPress={onOpenLogin} className={'text-primary text-medium'}>
                                    {translations[lang].sidebar.login}
                                </Button>
                            </NavbarItem>
                            <NavbarItem className={'hidden lg:flex'}>
                                <Button onPress={onOpenSignUp} color="primary" href="#" variant="flat">
                                    {translations[lang].sidebar.Sign_up}
                                </Button>
                            </NavbarItem>
                        </>
                        :
                        <Button onClick={async ()=>{await signOut()}} className={'hidden lg:flex'} color={"primary"} variant={'flat'}>Log out</Button>}
                    <NavbarItem className={'border-1 rounded-xl px-2 py-1.5 border-primary'}>
                        <button
                            onClick={handleSwitchToRu}
                            style={lang === 'ru' ? {color: '#6ee7b7'} : {color: '#d1d5db'}}>RU
                        </button>
                        <button
                            onClick={handleSwitchToEn}
                            className={'ml-2'}
                            style={lang === 'en' ? {color: '#6ee7b7'} : {color: '#d1d5db'}}>EN
                        </button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    <NavbarMenuItem key={'profile'}>
                        <Link color={'danger'} className="w-full" href="#" size="lg">Log out</Link>
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar>
        </>
    );
}

export default Sidebar;