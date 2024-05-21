'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Logo from "../../public/navbar/Logo";
import LoveIcon from "../../public/dropdown/LoveIcon";
import ShopIcon from "../../public/dropdown/ShopIcon";

const Sidebar = ()=>{
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">
                    <Link href={'/'} >
                        <Logo/>
                    </Link>
                </p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-6" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Promotions
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        About us
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                {/*<NavbarItem className="hidden lg:flex">*/}
                {/*    <Link href="#"><LoveIcon/></Link>*/}
                {/*</NavbarItem>*/}
                {/*<NavbarItem className="hidden lg:flex">*/}
                {/*    <Link href="#"><ShopIcon/></Link>*/}
                {/*</NavbarItem>*/}
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default Sidebar;