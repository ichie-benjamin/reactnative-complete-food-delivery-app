import React, { useState, useRef } from "react";
import {
    Text,
    View,
    TextInput,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
} from "react-native";
import { OTP } from "react-native-otp-form";

import { Header, Button } from "../components";
import { COLORS, CONTAINER } from "../constants";

export default function OtpCode({ navigation }) {
    const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" });

    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fiveInput = useRef();

    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="black-content" />
                <Header
                    title="Verify your phone number"
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
                    backgroundColor: COLORS.lightBlue,
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
                    Enter your OTP code here.
                </Text>
                {/* Otp Code */}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* 01 */}
                    <View
                        style={{
                            borderRadius: 5,
                            backgroundColor: "white",
                        }}
                    >
                        <TextInput
                            style={{
                                textAlign: "center",
                                paddingHorizontal: 22,
                                paddingVertical: 14.5,
                                textAlign: "center",
                                fontSize: 24,
                                fontFamily: "Mulish_400Regular",
                                color: COLORS.black,
                                width: 59,
                            }}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={firstInput}
                            onChangeText={(text) => {
                                setOtp({ ...otp, 1: text });
                                text && secondInput.current.focus();
                            }}
                        />
                    </View>
                    {/* 02 */}
                    <View
                        style={{
                            borderRadius: 5,
                            backgroundColor: "white",
                        }}
                    >
                        <TextInput
                            style={{
                                textAlign: "center",
                                paddingHorizontal: 22,
                                paddingVertical: 14.5,
                                textAlign: "center",
                                fontSize: 24,
                                fontFamily: "Mulish_400Regular",
                                color: COLORS.black,
                                width: 59,
                            }}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={secondInput}
                            onChangeText={(text) => {
                                setOtp({ ...otp, 2: text });
                                text
                                    ? thirdInput.current.focus()
                                    : firstInput.current.focus();
                            }}
                        />
                    </View>
                    {/* 03 */}
                    <View
                        style={{
                            borderRadius: 5,
                            backgroundColor: "white",
                        }}
                    >
                        <TextInput
                            style={{
                                textAlign: "center",
                                paddingHorizontal: 22,
                                paddingVertical: 14.5,
                                textAlign: "center",
                                fontSize: 24,
                                fontFamily: "Mulish_400Regular",
                                color: COLORS.black,
                                width: 59,
                            }}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={thirdInput}
                            onChangeText={(text) => {
                                setOtp({ ...otp, 3: text });
                                text
                                    ? fourthInput.current.focus()
                                    : secondInput.current.focus();
                            }}
                        />
                    </View>
                    {/* 04 */}
                    <View
                        style={{
                            borderRadius: 5,
                            backgroundColor: "white",
                        }}
                    >
                        <TextInput
                            style={{
                                textAlign: "center",
                                paddingHorizontal: 22,
                                paddingVertical: 14.5,
                                textAlign: "center",
                                fontSize: 24,
                                fontFamily: "Mulish_400Regular",
                                color: COLORS.black,
                                width: 59,
                            }}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={fourthInput}
                            onChangeText={(text) => {
                                setOtp({ ...otp, 4: text });
                                text
                                    ? fiveInput.current.focus()
                                    : thirdInput.current.focus();
                            }}
                        />
                    </View>
                    {/* 05 */}
                    <View
                        style={{
                            borderRadius: 5,
                            backgroundColor: "white",
                        }}
                    >
                        <TextInput
                            style={{
                                textAlign: "center",
                                paddingHorizontal: 22,
                                paddingVertical: 14.5,
                                textAlign: "center",
                                fontSize: 24,
                                fontFamily: "Mulish_400Regular",
                                color: COLORS.black,
                                width: 59,
                            }}
                            keyboardType="number-pad"
                            maxLength={1}
                            ref={fiveInput}
                            onChangeText={(text) => {
                                setOtp({ ...otp, 5: text });
                                !text && fourthInput.current.focus();
                            }}
                        />
                    </View>
                </View>
                {/* Didn’t receive the OTP? Resend. */}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 30,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Mulish_400Regular",
                            fontSize: 16,
                            color: COLORS.gray,
                            marginRight: 3,
                        }}
                    >
                        Didn’t receive the OTP?
                    </Text>
                    <TouchableOpacity onPress={() => console.log("Resend")}>
                        <Text
                            style={{
                                fontFamily: "Mulish_400Regular",
                                fontSize: 16,
                                color: COLORS.carrot,
                            }}
                        >
                            Resend.
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* Button */}
                <Button
                    text="verify"
                    onPress={() => navigation.navigate("MainLayout")}
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

