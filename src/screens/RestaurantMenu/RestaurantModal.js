import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { COLORS, FONTS } from "../../constants";
import { Close, Phone, Pin, Mail, Clock, Truck } from "../../components";

export default function RestaurantModal({
    description,
    name,
    phoneNumber,
    address,
    email,
    timing,
    freeDeliveryFrom,
    isVisible,
    onClose,
}) {
    return (
        <View
            style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                paddingHorizontal: 28,
                paddingVertical: 40,
                backgroundColor: COLORS.lightBlue,
            }}
        >
            {/* Close BTN */}
            <TouchableOpacity
                style={{
                    padding: 16,
                    position: "absolute",
                    right: 0,
                    top: 0,
                }}
                onPress={onClose}
            >
                <Close />
            </TouchableOpacity>

            {/* Name */}
            <Text
                style={{
                    ...FONTS.H3,
                    textTransform: "capitalize",
                    marginBottom: 20,
                    color: COLORS.black,
                }}
            >
                {name}
            </Text>
            {/* Description */}
            <Text
                style={{
                    fontFamily: "Mulish_400Regular",
                    fontSize: 16,
                    color: COLORS.gray,
                    lineHeight: 24,
                    marginBottom: 30,
                }}
            >
                {description}
            </Text>
            {/* Phone */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 15,
                }}
            >
                <Phone />
                <Text
                    style={{
                        marginLeft: 12,
                        fontFamily: "Mulish_600SemiBold",
                        fontSize: 14,
                        color: COLORS.gray,
                    }}
                >
                    {phoneNumber}
                </Text>
            </View>
            {/* Address */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 15,
                }}
            >
                <Pin />
                <Text
                    style={{
                        marginLeft: 12,
                        fontFamily: "Mulish_600SemiBold",
                        fontSize: 14,
                        color: COLORS.gray,
                    }}
                >
                    {address}
                </Text>
            </View>
            {/* Email */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 15,
                }}
            >
                <Mail />
                <Text
                    style={{
                        marginLeft: 12,
                        fontFamily: "Mulish_600SemiBold",
                        fontSize: 14,
                        color: COLORS.gray,
                    }}
                >
                    {email}
                </Text>
            </View>
            {/* Timing */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 15,
                }}
            >
                <Clock />
                <Text
                    style={{
                        marginLeft: 12,
                        fontFamily: "Mulish_600SemiBold",
                        fontSize: 14,
                        color: COLORS.gray,
                    }}
                >
                    {timing}
                </Text>
            </View>
            {/* Delivery From */}
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 15,
                }}
            >
                <Truck />
                <Text
                    style={{
                        marginLeft: 12,
                        fontFamily: "Mulish_600SemiBold",
                        fontSize: 14,
                        color: COLORS.gray,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Mulish_600SemiBold",
                            fontSize: 14,
                            color: COLORS.black,
                        }}
                    >
                        Free delivery from{" "}
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Mulish_600SemiBold",
                            fontSize: 14,
                            color: COLORS.orange,
                        }}
                    >
                        ${freeDeliveryFrom}
                    </Text>
                </Text>
            </View>
        </View>
    );
}
