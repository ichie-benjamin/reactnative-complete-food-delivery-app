import React, { useState, useContext } from "react";
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    StatusBar,
} from "react-native";

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
import { COLORS, SIZES, CONTAINER, FONTS } from "../../constants";
import {AuthContext} from "../../context/AuthContext";

export default function SignIn({ navigation }) {
    const [passVissible, setPassVissible] = useState(true);
    const { login } = useContext(AuthContext)

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            <StatusBar barStyle="Black-content" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={{
                        flex: 1,
                        paddingHorizontal: 28,
                        paddingVertical: SIZES.height * 0.1,
                    }}
                >
                    {/* Sign In Text */}
                    <Text
                        style={{
                            ...FONTS.H1,
                            textTransform: "capitalize",
                            marginBottom: 40,
                            color: COLORS.black,
                        }}
                    >
                        Sign in
                    </Text>
                    {/* Email Field */}
                    <InputField
                        heading="email"
                        placeholder="user@gmail.com"
                        icon={<Check />}
                    />
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
                    {/* Forgot your password */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("ForgotPassword")}
                    >
                        <Text
                            style={{
                                textAlign: "right",
                                fontFamily: "Mulish_400Regular",
                                fontSize: 16,
                                color: COLORS.carrot,
                                marginBottom: 30,
                            }}
                        >
                            Forgot your password?
                        </Text>

                    </TouchableOpacity>
                    {/* BUTTON */}
                    <View style={{ marginBottom: 20 }}>
                        <Button
                            text="sign in"
                            onPress={() => { navigation.navigate('MainLayout') }}
                        />
                    </View>
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
                                color: COLORS.gray,
                                marginRight: 3,
                            }}
                        >
                            Don’t have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SignUp")}
                        >
                            <Text
                                style={{
                                    fontFamily: "Mulish_400Regular",
                                    fontSize: 16,
                                    color: COLORS.carrot,
                                }}
                            >
                                Sign up.
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* Social */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
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
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
