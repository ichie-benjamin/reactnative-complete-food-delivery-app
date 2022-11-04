import React, { useState } from "react";
import {
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from "react-native";

import { COLORS, SIZES, CONTAINER, FONTS } from "../../constants";
import {
    Button,
    Facebook,
    Twitter,
    Google,
    InputField,
    Check,
    EyeOff,
    EyeOn,
} from "../../components";

export default function SignIn({ navigation }) {
    const [passVissible, setPassVissible] = useState(true);
    const [confirmPassVissible, setConfirmPassVissible] = useState(true);

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            <StatusBar barStyle="Black-content" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={{
                        paddingVertical: SIZES.height * 0.1,
                        paddingHorizontal: 28,
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        {/* Sign Up Text */}
                        <Text
                            style={{
                                ...FONTS.H1,
                                marginBottom: 40,
                                textTransform: "capitalize",
                                color: COLORS.black,
                            }}
                        >
                            Sign up
                        </Text>
                        {/* Name Field */}
                        <InputField
                            heading="name"
                            placeholder="Kristin Watson"
                            icon={<Check />}
                        />
                        {/* Email Field */}
                        <InputField
                            heading="email"
                            placeholder="kristinwatson@mail.com"
                            icon={<Check />}
                        />
                        {/* Password Field */}
                        <InputField
                            heading="password"
                            placeholder="••••••••"
                            secureTextEntry={
                                passVissible == true ? true : false
                            }
                            iconEye={
                                passVissible == true ? <EyeOn /> : <EyeOff />
                            }
                            onPress={() => {
                                setPassVissible(
                                    (passVissible) => !passVissible
                                );
                            }}
                        />
                        {/* Confirm Password Field */}
                        <InputField
                            heading="confirm password"
                            placeholder="••••••••"
                            secureTextEntry={
                                confirmPassVissible == true ? true : false
                            }
                            iconEye={
                                confirmPassVissible == true ? (
                                    <EyeOn />
                                ) : (
                                    <EyeOff />
                                )
                            }
                            onPress={() => {
                                setConfirmPassVissible(
                                    (confirmPassVissible) =>
                                        !confirmPassVissible
                                );
                            }}
                        />
                        <Button
                            text="sign up"
                            onPress={() => navigation.navigate("VerifyNumber")}
                            containerStyle={{ marginBottom: 20 }}
                        />
                        {/* Don’t have an account? */}
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 60,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Mulish_400Regular",
                                    fontSize: 16,
                                    color: "#7D849A",
                                    marginRight: 3,
                                }}
                            >
                                Already have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("SignIn")}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Mulish_400Regular",
                                        fontSize: 16,
                                        color: COLORS.carrot,
                                    }}
                                >
                                    Sign in.
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {/* Social */}
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <TouchableOpacity
                                style={{ marginHorizontal: 7 }}
                                onPress={() => console.log("Facebook")}
                            >
                                <Facebook />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginHorizontal: 7 }}
                                onPress={() => console.log("Twitter")}
                            >
                                <Twitter />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ marginHorizontal: 7 }}
                                onPress={() => console.log("Google")}
                            >
                                <Google />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
