import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { COLORS } from "../constants";

export default function Category({ icon, title, description, price, onPress }) {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                marginTop: 20,
            }}
            activeOpacity={0.5}
            onPress={onPress}
        >
            <View style={{ marginRight: 10 }}>{icon}</View>
            <View
                style={{
                    paddingBottom: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#E2E2E2",
                    flex: 1,
                }}
            >
                <Text
                    style={{
                        fontFamily: "Mulish_600SemiBold",
                        fontSize: 16,
                        marginBottom: 4,
                        color: COLORS.black,
                        lineHeight: 16,
                        textTransform: "capitalize",
                    }}
                >
                    {title}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Mulish_600SemiBold",
                            lineHeight: 20,
                            color: COLORS.gray,
                            textTransform: "capitalize",
                        }}
                    >
                        {description}
                    </Text>
                    {price && (
                        <Text
                            style={{
                                fontFamily: "Mulish_400Regular",
                                fontSize: 16,
                                color: COLORS.carrot,
                            }}
                        >
                            ${price}
                        </Text>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}
