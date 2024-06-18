import React, {ReactNode} from 'react';
import {Link} from "@nextui-org/react";

interface Props {
    name : string;
    icon : ReactNode;
    count? : number | string;
}

const PersonalCards = (props : Props) => {
    const {icon, count, name} = props;
    return (
        <Link className={'bg-white flex-col space-y-1 md:space-y-3 py-4 md:py-7 cursor-pointer text-center w-32 md:w-44 rounded-2xl shadow-2xl '}>
            {icon}
            <p className={'font-semibold text-content1 text-center text-medium'}>{name}</p>
            <p className={'font-semibold text-content1 text-lg'}>{count}</p>
        </Link>
    );
};

export default PersonalCards;