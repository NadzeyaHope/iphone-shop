import React from 'react';
import {Container} from "../../shared/Container";
import {Link} from "@nextui-org/react";

const FooterPrivicy = () => {
    return (
        <div className={'text-focus mb-20 md:mb-10 text-tiny mt-5'}>
            <Container className={'flex justify-between'} >
                <div>
                    2023 PAO "Ростелеком" Все права защищены
                    <hr/>
                    (18+)
                </div>
                <div className={'block space-y-3 md:flex md:space-x-3 md:space-y-0'} >
                    <Link className={'text-focus text-tiny'} >Политика оброботки данных</Link>
                    <Link className={'text-focus text-tiny'}>Политика конфиденциальности</Link>
                </div>
            </Container>
        </div>
    );
};

export default FooterPrivicy;