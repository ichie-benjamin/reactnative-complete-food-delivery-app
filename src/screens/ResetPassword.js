import React, { useState, useRef, useEffect } from "react";
import {
    Text,
    View,
    TextInput,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    StatusBar,
    KeyboardAvoidingView,
} from "react-native";

import { Header, Button, EyeOff, EyeOn, InputField } from "../components";
import { COLORS, CONTAINER } from "../constants";

export default function ResetPassword({ navigation }) {
    const [passVissible, setPassVissible] = useState(true);
    const [confirmPassVissible, setConfirmPassVissible] = useState(true);

    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="black-content" />
                <Header
                    title="Reset Password"
                    onPress={() => navigation.goBack()}
                    arrow={true}
                />
            </View>
        );
    }

    function renderContent() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 28,
                }}
            >
                {/* Description */}
                <Text
                    style={{
                        fontFamily: "Mulish_400Regular",
                        fontSize: 16,
                        color: COLORS.gray,
                        lineHeight: 24,
                        marginVertical: 28,
                    }}
                >
                    Enter new password and confirm.
                </Text>
                {/* Password Field */}
                <InputField
                    heading="password"
                    placeholder="••••••••"
                    secureTextEntry={passVissible == true ? true : false}
                    iconEye={passVissible == true ? <EyeOn /> : <EyeOff />}
                    onPress={() => {
                        setPassVissible((passVissible) => !passVissible);
                    }}
                />
                {/* Confirm Password Field */}
                <InputField
                    heading="confirm password"
                    placeholder="••••••••"
                    secureTextEntry={confirmPassVissible == true ? true : false}
                    iconEye={
                        confirmPassVissible == true ? <EyeOn /> : <EyeOff />
                    }
                    onPress={() => {
                        setConfirmPassVissible(
                            (confirmPassVissible) => !confirmPassVissible
                        );
                    }}
                />
                {/* Button */}
                <Button
                    text="change password"
                    onPress={() => navigation.navigate("PasswordHasBeenReset")}
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
                <ScrollView>{renderContent()}</ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
