import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { COLORS } from "../constants/theme";
import Minus from "../components/svg/Minus";
import Plus from "../components/svg/Plus";

export default function Counter({ containerStyle, value = 1, onAdd, onMinus }) {
    return (
        <View
            style={{
                backgroundColor: COLORS.lightBlue,
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 5,
                ...containerStyle,
            }}
        >
            {/* Minus */}
            <TouchableOpacity
                style={{
                    padding: 10,
                }}
                onPress={onMinus}
            >
                <Minus />
            </TouchableOpacity>
            {/* Quantity */}
            <View
                style={{
                    paddingHorizontal: 9,
                }}
            >
                <Text
                    style={{
                        fontFamily: "Mulish_600SemiBold",
                        color: COLORS.gray,
                        fontSize: 14,
                    }}
                >
                    {value}
                </Text>
            </View>
            {/* Plus */}
            <TouchableOpacity style={{ padding: 10 }} onPress={onAdd}>
                <Plus />
            </TouchableOpacity>
        </View>
    );
}
