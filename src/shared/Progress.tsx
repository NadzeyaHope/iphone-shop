import React from "react";
import {CircularProgress} from "@nextui-org/react";
import {twMerge} from "tailwind-merge";

const Progress = ({className} : {className? : string}) => {
    return (
            <CircularProgress
                className={twMerge('m-auto', className)}
                color="default"
                aria-label="Loading..."
                disableAnimation={true}
            />

    );
}
export default Progress;
