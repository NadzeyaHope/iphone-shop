import React from 'react';

const Spacer = ({top} : {top? : string}) => {
    return (
        <div className={`mt-[${top}px]`} >
        </div>
    );
};

export default Spacer;