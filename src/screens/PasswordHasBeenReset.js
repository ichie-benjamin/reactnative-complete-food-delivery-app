import React from "react";
import { SafeAreaView, ScrollView, Text, View, StatusBar } from "react-native";

import { COLORS, SIZES, CONTAINER } from "../constants";
import { Button, Key } from "../components";

export default function PasswordHasBeenReset({ navigation }) {
    return (
        <SafeAreaView
            style={{
                ...CONTAINER.container,
                paddingTop:
                    Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
        >
            <StatusBar barStyle="black-content" />
            <ScrollView
                contentContainerStyle={{ flex: 1, paddingHorizontal: 28 }}
            >
                {/* Container */}
                <View style={{ paddingVertical: SIZES.height * 0.1 }}>
                    <View style={{ alignItems: "center" }}>
                        <Key />
                    </View>
                    {/* Title */}
                    <Text
                        style={{
                            fontFamily: "Poppins_600SemiBold",
                            fontSize: 22,
                            textAlign: "center",
                            marginTop: 40,
                            marginBottom: 16,
                            color: COLORS.black,
                            textTransform: "capitalize",
                        }}
                    >
                        Your password has been reset!
                    </Text>
                    {/* Description */}
                    <Text
                        style={{
                            fontFamily: "Mulish_400Regular",
                            fontSize: 16,
                            textAlign: "center",
                            marginBottom: 50,
                            color: COLORS.gray,
                        }}
                    >
                        Qui ex aute ipsum duis. Incididunt adipisicing voluptate
                        laborum
                    </Text>
                    {/* Button */}
                    <Button
                        text="done"
                        onPress={() => navigation.navigate("SignIn")}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
