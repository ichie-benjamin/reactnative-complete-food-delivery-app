// MODULES
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle } from "react-native-svg";
import { COLORS } from "../constants";

export default function Buttons({
    text,
    onPress,
    containerStyle,
    price,
    quantity,
}) {
    function Circles() {
        return (
            <Svg
                width={60}
                height={50}
                viewBox="0 0 60 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Circle
                    opacity={0.5}
                    cx={49}
                    cy={49}
                    r={23.75}
                    stroke="#E83939"
                    strokeWidth={12}
                />
                <Circle
                    opacity={0.5}
                    cx={5.75}
                    cy={34}
                    r={3.5}
                    stroke="#E83939"
                    strokeWidth={3}
                />
                <Circle
                    opacity={0.3}
                    cx={54.25}
                    cy={38.5}
                    r={2.5}
                    fill="#fff"
                />
                <Circle opacity={0.3} cx={31.75} r={10} fill="#fff" />
            </Svg>
        );
    }

    return (
        <View style={containerStyle}>
            <TouchableOpacity
                style={{
                    width: "100%",
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                }}
                onPress={onPress}
                activeOpacity={0.3}
            >
                <LinearGradient
                    colors={["#FE7E56", "#EA5F5F"]}
                    style={{
                        width: "100%",
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    {/* Circles */}
                    <View style={{ position: "absolute", right: 0 }}>
                        <Circles />
                    </View>
                    {/* Main Text */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Mulish_700Bold",
                                color: "white",
                                textTransform: "uppercase",
                            }}
                        >
                            {text}
                        </Text>
                    </View>
                    {/* Price */}
                    {price && (
                        <View
                            style={{
                                position: "absolute",
                                left: 12,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Mulish_700Bold",
                                    fontSize: 16,
                                    textTransform: "uppercase",
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    color: COLORS.white,
                                }}
                            >
                                ${price}
                            </Text>
                        </View>
                    )}

                    {/* Quantity */}
                    {quantity > 0 && (
                        <View
                            style={{
                                position: "absolute",
                                right: 14,
                                backgroundColor: COLORS.white,
                                borderRadius: 5,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 14,
                                    textTransform: "uppercase",
                                    paddingHorizontal: 10,
                                    paddingVertical: 5,
                                    color: COLORS.carrot,
                                }}
                            >
                                {quantity}
                            </Text>
                        </View>
                    )}
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}
