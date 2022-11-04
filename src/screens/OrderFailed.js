import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

import { COLORS, SIZES, CONTAINER, FONTS } from "../constants";
import { Button, Fail } from "../components";

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
                <Fail containerStyle={{ alignItems: "center" }} />
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
                    Sorry! Your order has failed!
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
                    Something went wrong. Please try again to contimue your
                    order.
                </Text>
                {/* Button */}
                <Button
                    text="try again"
                    containerStyle={{ marginBottom: 25 }}
                    onPress={() => navigation.navigate("MainLayout")}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
