import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

import { COLORS } from "../constants";

export default function ProfileCategory({ onPress, text, itemArrow, icon }) {
    const Arrow = ({ fillColor, strokeColor }) => (
        <Svg
            width={8}
            height={13}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <G clipPath="url(#a)">
                <Path
                    d="m2 11.3 4.8-4.8L2 1.7"
                    stroke={strokeColor}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path
                        fill={fillColor}
                        transform="translate(.8 .5)"
                        d="M0 0h7.2v12H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    );

    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                paddingHorizontal: 28,
                paddingTop: 21,
            }}
            onPress={onPress}
        >
            <View
                style={{
                    borderBottomColor: "#E2E2E2",
                    borderBottomWidth: 1,
                    marginLeft: 12,
                    flex: 1,
                    paddingBottom: 24,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {icon}
                    <Text
                        style={{
                            fontFamily: "Mulish_600SemiBold",
                            fontSize: 16,
                            textTransform: "capitalize",
                            color: COLORS.black,
                            marginLeft: 12,
                        }}
                    >
                        {text}
                    </Text>
                </View>

                {itemArrow && (
                    <Arrow strokeColor={COLORS.gray} fillColor={COLORS.gray} />
                )}
            </View>
        </TouchableOpacity>
    );
}
