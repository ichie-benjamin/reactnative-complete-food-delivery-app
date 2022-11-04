import React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function Close({ containerStyle, onPress }) {
    return (
        <TouchableOpacity style={containerStyle} onPress={onPress}>
            <Svg
                width={25}
                height={26}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="m7.52 7.864 9.9 9.9M7.52 17.763l9.9-9.9"
                    stroke="#7D849A"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </TouchableOpacity>
    );
}
