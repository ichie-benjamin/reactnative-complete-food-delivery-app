import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../constants";

export default function Line({ containerStyle }) {
    return (
        <View
            style={{
                width: "100%",
                height: 1,
                backgroundColor: COLORS.lightGrey,
                ...containerStyle,
            }}
        />
    );
}
