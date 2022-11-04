import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    KeyboardAvoidingView,
} from "react-native";
import PhoneInput from "react-native-phone-input";

import { Button, Header } from "../components";
import { COLORS, CONTAINER } from "../constants";

export default function VerifyNumber({ navigation }) {
    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="black-content" />
                <Header
                    onPress={() => navigation.goBack()}
                    arrow={true}
                    title="Verify your phone number"
                    onPress={() => navigation.goBack()}
                />
            </View>
        );
    }

    function renderContent() {
        return (
            <View>
                <Text
                    style={{
                        marginTop: 28,
                        marginBottom: 30,
                        fontFamily: "Mulish_400Regular",
                        fontSize: 16,
                        color: COLORS.gray,
                        lineHeight: 24,
                    }}
                >
                    We have sent you an SMS with a code to number +17
                    0123456789.
                </Text>
                <Text
                    style={{
                        fontFamily: "Mulish_600SemiBold",
                        textTransform: "uppercase",
                        color: COLORS.gray,
                        marginBottom: 14,
                        fontSize: 12,
                    }}
                >
                    phone number
                </Text>
                <PhoneInput
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#E2E2E2",
                        marginBottom: 30,
                        fontSize: 16,
                        fontFamily: "Mulish_400Regular",
                        paddingBottom: 9,
                    }}
                    placeholder="123456789"
                    placeholderTextColor={COLORS.black}
                    initialCountry={"us"}
                />
            </View>
        );
    }

    function renderButton() {
        return (
            <Button
                text="confirm"
                onPress={() => navigation.navigate("OtpCode")}
            />
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            {renderHeader()}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={{ paddingHorizontal: 28 }}>
                    {renderContent()}
                    {renderButton()}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
