import React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export default function Truck() {
    return (
        <Svg
            width={16}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <G
                clipPath="url(#a)"
                stroke="#7D849A"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M10.667 2h-10v8.667h10V2ZM10.667 5.333h2.666l2 2v3.334h-4.666V5.334Z" />
                <Path d="M3.667 14a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334ZM12.333 14a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Z" />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" d="M0 0h16v16H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}
