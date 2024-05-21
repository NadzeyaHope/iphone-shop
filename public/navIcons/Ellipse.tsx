import React from 'react';



const Ellipse = ({className} : {className? : string}) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="102"
            height="102"
            viewBox="0 0 102 102"
            className={className}
        >
            <g filter="url(#filter0_d_4_105)">
                {

                }
                <ellipse cx="51.494" cy="49" rx="39.506" ry="40"></ellipse>
            </g>
            <defs>
                <filter
                    id="filter0_d_4_105"
                    width="101.012"
                    height="102"
                    x="0.988"
                    y="0"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feMorphology
                        in="SourceAlpha"
                        radius="5"
                        result="effect1_dropShadow_4_105"
                    ></feMorphology>
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4_105"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4_105"
                        result="shape"
                    ></feBlend>
                </filter>
            </defs>
        </svg>
    );
};

export default Ellipse;