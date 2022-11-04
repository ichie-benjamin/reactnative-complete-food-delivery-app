import React from "react";
import { View } from "react-native";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export default function Pin({ containerStyle, strokeColor }) {
    return (
        <View style={containerStyle}>
            <Svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <G
                    clipPath="url(#a)"
                    stroke={strokeColor}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <Path d="M14 6.667c0 4.666-6 8.666-6 8.666s-6-4-6-8.667a6 6 0 1 1 12 0Z" />
                    <Path d="M8 8.666a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                </G>
                <Defs>
                    <ClipPath id="a">
                        <Path fill="#fff" d="M0 0h16v16H0z" />
                    </ClipPath>
                </Defs>
            </Svg>
        </View>
    );
}
