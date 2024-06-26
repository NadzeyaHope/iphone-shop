"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {Button} from "@nextui-org/button";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    return (
        <div>
            <Button onClick={() => setTheme('light')}>Light Mode</Button>
            <Button onClick={() => setTheme('dark')}>Dark Mode</Button>
        </div>
    )
};