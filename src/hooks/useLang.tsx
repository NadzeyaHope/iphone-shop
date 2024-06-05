import React from 'react';
import {useUnit} from "effector-react";
import {$lang} from "../context/Lang";
import translationsJson from './../../public/translations/translations.json';

const UseLang = () => {

    const lang = useUnit($lang)
    const translations = translationsJson
    return {lang, translations}
};

export default UseLang;