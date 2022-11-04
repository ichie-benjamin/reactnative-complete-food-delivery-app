import { View, Text, TextInput } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

import { COLORS } from "../constants";

export default function EditProfileCategory({ name, check, placeholder }) {
    const Check = (props) => (
        <Svg
            width={14}
            height={10}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12.333 1 5 8.333 1.667 5"
                stroke="#00824B"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );

    return (
        <View>
            {/* Text */}
            <Text
                style={{
                    fontFamily: "Mulish_600SemiBold",
                    textTransform: "uppercase",
                    color: COLORS.gray,
                }}
            >
                {name}
            </Text>
            {/* Input */}
            <View
                style={{
                    marginBottom: 30,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <TextInput
                    style={{
                        borderBottomColor: "#E2E2E2",
                        borderBottomWidth: 1,
                        paddingVertical: 9,
                        flex: 1,
                        paddingRight: 20,
                        fontFamily: "Mulish_400Regular",
                        textTransform: "capitalize",
                        flex: 1,
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.black}
                />
                {check && <Check />}
            </View>
        </View>
    );
}
