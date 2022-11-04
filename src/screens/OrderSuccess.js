import React from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { COLORS, SIZES, CONTAINER, FONTS } from "../constants";
import { Button, Success } from "../components";

import { useNavigation } from "@react-navigation/native";

export default function OrderSuccess() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            {/* Scroll View */}
            <ScrollView
                style={{
                    flex: 1,
                    paddingHorizontal: 28,
                    paddingVertical: SIZES.height * 0.1,
                }}
            >
                <Success containerStyle={{ alignItems: "center" }} />
                {/* Title */}
                <Text
                    style={{
                        textAlign: "center",
                        marginTop: 40,
                        marginBottom: 16,
                        color: COLORS.black,
                        textTransform: "capitalize",
                        ...FONTS.H2,
                        paddingHorizontal: 40,
                    }}
                >
                    Thank you for your order!
                </Text>
                {/* Description */}
                <Text
                    style={{
                        fontFamily: "Mulish_400Regular",
                        fontSize: 16,
                        textAlign: "center",
                        marginBottom: 50,
                        color: COLORS.gray,
                        paddingHorizontal: 34,
                    }}
                >
                    You can track your order by clicking the button below.
                </Text>
                {/* Button */}
                <Button
                    text="track my order"
                    containerStyle={{ marginBottom: 25 }}
                    onPress={() => navigation.navigate("OrderTracking")}
                />
                {/* Continue Shopping */}
                <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                >
                    <Text
                        style={{
                            fontFamily: "Mulish_400Regular",
                            fontSize: 16,
                            color: COLORS.gray,
                        }}
                    >
                        Continue
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("MainLayout")}
                    >
                        <Text
                            style={{
                                fontFamily: "Mulish_400Regular",
                                fontSize: 16,
                                color: COLORS.carrot,
                            }}
                        >
                            {" "}
                            Shopping
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
