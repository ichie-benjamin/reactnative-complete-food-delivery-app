import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { COLORS } from "../constants/theme";

export default function Counter() {
    return (
        <View
            style={{
                backgroundColor: COLORS.lightBlue,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignItems: "center",
                borderRadius: 5,
                height: 36,
                padding: 10,
            }}
        >
            <TouchableOpacity></TouchableOpacity>
            <View>
                <Text
                    style={{
                        fontFamily: "Mulish_600SemiBold",
                        color: COLORS.gray,
                        fontSize: 14,
                        paddingHorizontal: 20,
                        lineHeight: 17,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    1
                </Text>
            </View>
            <TouchableOpacity></TouchableOpacity>
        </View>
    );
}
