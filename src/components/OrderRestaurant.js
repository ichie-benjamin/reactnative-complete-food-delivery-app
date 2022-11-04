import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { Button, Box, Arrow, Star, Pin, Header } from "../components";
import { COLORS, SIZES, FONTS } from "../constants/theme";

export default function OrderRestaurant({ name, type, rating, distance }) {
    return (
        <TouchableOpacity
            style={{
                marginHorizontal: 28,
                marginBottom: 20,
                marginTop: 10,
                paddingBottom: 10,
                borderBottomColor: COLORS.lightGrey,
                borderBottomWidth: 1,
                flexDirection: "row",
                alignItems: "center",
            }}
            activeOpacity={0.5}
        >
            <Image
                source={require("../images/restaurant-preview/preview.jpg")}
                style={{
                    width: 73,
                    height: 73,
                    resizeMode: "cover",
                    borderRadius: 5,
                    marginRight: 16,
                }}
            />
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        ...FONTS.H4,
                        textTransform: "capitalize",
                        color: COLORS.black,
                    }}
                >
                    {name}
                </Text>
                <Text
                    style={{
                        fontFamily: "Mulish_600SemiBold",
                        fontSize: 14,
                        color: COLORS.gray,
                        marginBottom: 5,
                    }}
                >
                    {type}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Star
                        strokeColor={COLORS.black}
                        containerStyle={{ marginRight: 5 }}
                    />
                    <Text
                        style={{
                            fontFamily: "Mulish_400Regular",
                            color: COLORS.black,
                        }}
                    >
                        {rating}
                    </Text>
                    <Pin
                        strokeColor={COLORS.black}
                        containerStyle={{ marginHorizontal: 5 }}
                    />
                    <Text
                        style={{
                            fontFamily: "Mulish_400Regular",
                            color: COLORS.black,
                        }}
                    >
                        {distance}
                    </Text>
                </View>
            </View>
            <Arrow />
            {/* <ItemArrow /> */}
        </TouchableOpacity>
    );
}
