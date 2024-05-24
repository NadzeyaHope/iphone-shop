'use client';
import React, {ReactNode} from 'react';
import {EmblaOptionsType} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react';
import './styles/embla.css';
import './styles/carousel.css';


type PropType = {
    options?: EmblaOptionsType;
    children: ReactNode;
    className? : string;
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const {options, className, children} = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    return (
        <div className={className} >
            <section className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {children}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EmblaCarousel
