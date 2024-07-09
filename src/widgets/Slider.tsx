// components/Slider.tsx
import React from 'react';
import Slider from 'react-slick';

interface SliderProps {
    images: string[];
}

const ImageSlider: React.FC<SliderProps> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    if (images.length === 1) {
        return (
            <div className="w-full max-w-screen-lg mx-auto p-4">
                <img src={images[0]} alt="Single Slide" className="w-full h-[500px] object-cover rounded-lg shadow-md" />
            </div>
        );
    }

    return (
        <div className="w-full max-w-screen-lg mx-auto">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="p-4">
                        <img src={image} alt={`Slide ${index}`} className="w-full h-[500px] object-cover rounded-lg shadow-md" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
