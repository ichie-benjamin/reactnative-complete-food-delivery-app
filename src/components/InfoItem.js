import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../constants";

export default function InfoItem({ icon, text }) {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
            }}
        >
            <View style={{ marginRight: 13 }}>{icon}</View>
            <Text
                style={{
                    fontFamily: "Mulish_600SemiBold",
                    fontSize: 14,
                    color: COLORS.gray,
                }}
            >
                {text}
            </Text>
        </View>
    );
}
