import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Star({ fillColor, strokeColor, containerStyle }) {
    return (
        <View style={containerStyle}>
            <Svg
                width={14}
                height={14}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="m7 1.167 1.802 3.651 4.031.59-2.916 2.84.688 4.014L7 10.366l-3.605 1.896.688-4.014-2.916-2.84 4.03-.59L7 1.167Z"
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </View>
    );
}
