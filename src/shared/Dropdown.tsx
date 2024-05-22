'use client';
import React from "react";
import {Link, Navbar, NavbarContent, NavbarItem} from "@nextui-org/react";
import HomeIcon from "../../public/dropdown/HomeIcon";
import LoveIcon from "../../public/dropdown/LoveIcon";
import ShopIcon from "../../public/dropdown/ShopIcon";
import UserIcon from "../../public/dropdown/UserIcon";
import {usePathname} from "next/navigation";
import {motion} from "framer-motion";
import HeartIcon from "../../public/dropdown/HeartIcon";


const navigateItem = [
    {
        icon: <HomeIcon/>,
        url: '/',
        active: false,
    },
    {
        icon: <HeartIcon/>,
        url: '/featured-products',
        active: true,
    },
    {
        icon: <ShopIcon/>,
        url: '/added-products',
        active: false,
    },
    {
        icon: <UserIcon/>,
        url: '/personal',
        active: false,
    },

]


const Dropdown = () => {
    const path = usePathname()


    return (
        <Navbar
            className={'w-full'}
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "justify-between",
                ],
                base: ['bg-content1 m-auto rounded-full'],
                wrapper: ['p-2'],
                content : ['gap-1'],
            }}
        >
            <NavbarContent>
                {navigateItem.map((item, index) => (
                    <NavbarItem key={index}
                                className={` rounded-full  justify-center m-auto`}>
                        <Link className={`${path === item.url ? 'bg-focus' : 'bg-content1'} rounded-full px-3`}  color="foreground" href={item.url}>
                            {item.icon}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    );
}


export default Dropdown;