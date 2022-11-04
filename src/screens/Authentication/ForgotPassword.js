import React from "react";
import {
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    KeyboardAvoidingView,
} from "react-native";

import { COLORS, CONTAINER } from "../../constants";
import { Button, Header, InputField } from "../../components";

export default function ForgotPassword({ navigation }) {
    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="black-content" />
                <Header
                    title="Forgot password"
                    onPress={() => navigation.goBack()}
                    arrow={true}
                />
            </View>
        );
    }

    function renderContent() {
        return (
            <View>
                {/* Description */}
                <Text
                    style={{
                        fontFamily: "Mulish_400Regular",
                        fontSize: 16,
                        color: COLORS.gray,
                        lineHeight: 24,
                        marginVertical: 29,
                    }}
                >
                    Please enter your email address. You will receive a link to
                    create a new password via email.
                </Text>
                {/* Email Field */}
                <InputField
                    heading="email"
                    placeholder="kristinwatson@mail.com"
                />
                {/* Button */}
                <Button
                    text="send"
                    onPress={() => navigation.navigate("ResetPassword")}
                />
            </View>
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
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
