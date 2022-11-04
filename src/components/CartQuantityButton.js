import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { COLORS } from "../constants";

export default function CartQuantityButton({
    containerStyle,
    iconStyle,
    quantity,
    onPress,
}) {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                backgroundColor: COLORS.lightBlue,
                ...containerStyle,
            }}
            onPress={onPress}
        ></TouchableOpacity>
    );
}
