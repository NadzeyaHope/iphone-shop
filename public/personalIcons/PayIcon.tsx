import React from 'react';

const PayIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="47"
            height="47"
            fill="none"
            viewBox="0 0 47 47"
        >
            <g filter="url(#filter0_dd_41_568)">
                <path
                    fill="url(#pattern0_41_568)"
                    d="M4 0H43V39H4z"
                    shapeRendering="crispEdges"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_dd_41_568"
                    width="47"
                    height="47"
                    x="0"
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
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_41_568"
                    ></feBlend>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                        in2="effect1_dropShadow_41_568"
                        result="effect2_dropShadow_41_568"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect2_dropShadow_41_568"
                        result="shape"
                    ></feBlend>
                </filter>
                <pattern
                    id="pattern0_41_568"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                >
                    <use transform="scale(.01111)" xlinkHref="#image0_41_568"></use>
                </pattern>
                <image
                    id="image0_41_568"
                    width="90"
                    height="90"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyElEQVR4nO2cvW7UQBhFpwEKEDUICiQEJVDxVyDx8zKQgBSeJA4rzXdmu5R5BhCiSRBEggroQ4UQBUFKqIxGbIFQ7HWyuzMT+x7p6zZe++Tu3bGttXNCCCGEEEIIIQ5mY2PjpJktmdmWmf0C6hwzee9N4AlwwvUJ4LyZbeeS2zLvR6PROdejJG8XILUp4e96kWwzW8ots8M8dscd4G0BIqfNpjvuALsFiJxWHz/dcYeGg1vENrtsfxH7UwRItERTaqKB+2YWgM//n3S0/E2t6ugu+LKZvSqlE+ljRwN3ge8lHRh9E+29v2Rm30o7MArbn5kBXnZdi7Zso5boFkIID7pKlugZmKwuDjqL2gNWenPVKzfAl4b0ruTet17RdI1CSZ4zTV0s0YlEm9nzeb/XoGkRvRdlx9tTufexFxxmadeHsb/XbuJNimdVVZ2SaJKI/xhCuKhEk0Z2kmTn/ihTwJjZU4kmiegtiSZJqnclmjT1IdFIdJ37S0yJJr84VQf5paqjkejsiUOJJrskVQf5BaqjKWt0woJE17lTqESTXtTk1tuq9/7m+vr66TjALaAC9lUdzEXyzng8vtbUs9776/E16mhmS3Kb5H9ltyVbX4ZMFb16iLtJaxLN0RIdO7mr6BDCbYnmaKJHo9GZrqLjayWaxYuuquqsRKPqKH2qrok2sxdKNEcWvR+XbtMkhxBumNlviWamtfROm+woGfjatg23aAr46NdzmngyshaXcPELMo6Z3Yl10ZZkiSbtP0qJRqLrAupCiaYAeaoO8otVRyPR2VOHEk12UaoO8ksspaOLf4waPRHd9KP7QY1LIHqc+yAZiOhHuQ+SoTzhEXgzcNFbSUSHEK4CP3IfMPlm2aXCzO4NUbaZfYjPvnYp8d5fAV4PSbL3/oLLhZk9BDCzTz1cZ+9Onv2/nDzJQgghhBBCCCGEEK5M/gDV/AVnYlIcUAAAAABJRU5ErkJggg=="
                ></image>
            </defs>
        </svg>
    );
};

export default PayIcon;