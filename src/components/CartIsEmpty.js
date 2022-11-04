import { View, Text } from "react-native";
import React from "react";

import Box from "../components/svg/Box";
import { FONTS, COLORS } from "../constants";

export default function CartIsEmpty() {
    return (
        <View
            style={{
                paddingHorizontal: 28,
                alignItems: "center",
                paddingTop: 26,
            }}
        >
            <Box />
            {/* Your cart is empty! */}
            <Text
                style={{
                    ...FONTS.H2,
                    marginBottom: 16,
                    marginTop: 52,
                    textTransform: "capitalize",
                }}
            >
                Your cart is empty!
            </Text>
            {/* Description */}
            <Text
                style={{
                    textAlign: "center",
                    fontFamily: "Mulish_400Regular",
                    fontSize: 16,
                    color: COLORS.gray,
                    paddingHorizontal: 28,
                }}
            >
                Qui ex aute ipsum duis. Incididunt adipisicing voluptate laborum
            </Text>
        </View>
    );
}
