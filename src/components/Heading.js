import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import All from "../components/svg/All";

export default function Heading({ title, allOffers = false, containerStyle }) {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 15,
                ...containerStyle,
            }}
        >
            <Text
                style={{
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: 22,
                    textTransform: "capitalize",
                }}
            >
                {title}
            </Text>
            {allOffers && (
                <TouchableOpacity
                    onPress={() => navigation.navigate("AllOffers")}
                >
                    <All />
                </TouchableOpacity>
            )}
        </View>
    );
}
