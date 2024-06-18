import React from 'react';
import DiliveryIcon from "../../../public/personalIcons/DiliveryIcon";
import PersonalCards from "./PersonalCards";
import PayIcon from "../../../public/personalIcons/PayIcon";
import CallIcon from "../../../public/personalIcons/CallIcon";
import {Spacer} from "@nextui-org/react";

const PersonalBody = () => {
    return (
        <div className={'flex flex-wrap gap-x-4 md:gap-x-10 gap-y-4 justify-center'}>
            <PersonalCards
                name={'Доставка'}
                count={0}
                icon={<DiliveryIcon/>}
            />
            <PersonalCards
                name={'Оплачено'}
                count={0}
                icon={<PayIcon/>}
            />
            <PersonalCards
                name={'Свяжитесь с нами'}
                count={':)'}
                icon={<CallIcon/>}
            />
        </div>
    );
};

export default PersonalBody;