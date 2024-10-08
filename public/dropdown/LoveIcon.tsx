'use client';
import React, {useState} from 'react';

interface Props {
    red : boolean;
}

const LoveIcon = (props : Props) => {
    const {red} = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={red ? {fill : 'red'} : {fill : 'black', opacity : 0.2}}
        >
            <path d="M12 4.248C8.852-1.154 0 .423 0 7.192 0 11.853 5.571 16.619 12 23c6.43-6.381 12-11.147 12-15.808C24 .4 15.125-1.114 12 4.248z"></path>
        </svg>
    );
};

export default LoveIcon;