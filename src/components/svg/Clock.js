import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Clock() {
    return (
        <Svg
            width={16}
            height={17}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M8 15.167A6.667 6.667 0 1 0 8 1.834a6.667 6.667 0 0 0 0 13.333Z"
                stroke="#7D849A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M8 4.5v4l2.667 1.333"
                stroke="#7D849A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
