import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Mail() {
    return (
        <Svg
            width={16}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M2.667 2.667h10.666c.734 0 1.334.6 1.334 1.333v8c0 .733-.6 1.333-1.334 1.333H2.667c-.734 0-1.334-.6-1.334-1.333V4c0-.733.6-1.333 1.334-1.333Z"
                stroke="#7D849A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M14.667 4 8 8.667 1.333 4"
                stroke="#7D849A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
