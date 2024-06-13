import Search from "../shared/Search";
import Carusel from "../widgets/carusel/Carusel";
import CardOfProduct from "../widgets/CardOfProduct";
import React from "react";


export default function Page() {


    return (
        <main>
            <div className={'mt-5'}/>
            <div className={'w-full md:w-full lg:w-[70%] m-auto'}>
                <Search/>
                <div className={'mt-5 md:mt-20'}/>
                <Carusel/>
            </div>
            <div className={'mt-10 md:mt-24'}/>
            <div className={'w-full px-0 lg:px-5 md:px-5 m-auto'}>
                <CardOfProduct/>
                <div/>
            </div>
        </main>
    );
}
