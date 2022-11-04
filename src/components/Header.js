import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

import { COLORS } from "../constants";

export default function Header({ title, onPress, containerStyle, arrow }) {
    function Back({ color }) {
        return (
            <Svg
                width={8}
                height={14}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M7 13 1 7l6-6"
                    stroke={color}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        );
    }

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
                height: 50,
                ...containerStyle,
            }}
        >
            <View
                style={{ position: "absolute", left: 0, alignItems: "center" }}
            >
                {/* Arrow */}
                {arrow && (
                    <TouchableOpacity
                        style={{ paddingHorizontal: 28 }}
                        onPress={onPress}
                    >
                        <Back color={COLORS.black} />
                    </TouchableOpacity>
                )}
            </View>

            <Text
                style={{
                    textAlign: "center",
                    fontFamily: "Poppins_500Medium",
                    fontSize: 18,
                    color: COLORS.black,
                    textTransform: "capitalize",
                }}
            >
                {title}
            </Text>
        </View>
    );
}
