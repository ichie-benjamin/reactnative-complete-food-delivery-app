import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants/theme";
import { RadioButton } from "react-native-paper";

// COMPONENTS
import Button from "../components/Button";

export default function NewAddress() {
    const [checked, setChecked] = React.useState("first");

    return (
        <View>
            <View
                style={{
                    width: "100%",
                    backgroundColor: "red",
                }}
            >
                {/* Info */}
                <View
                    style={{
                        paddingVertical: 30,
                        paddingHorizontal: 28,
                        backgroundColor: COLORS.lightBlue,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Poppins_600SemiBold",
                            textTransform: "capitalize",
                            color: COLORS.black,
                            marginBottom: 29,
                        }}
                    >
                        Add new address
                    </Text>
                    {/* Title */}
                    <Text
                        style={{
                            fontFamily: "Mulish_600SemiBold",
                            textTransform: "uppercase",
                            fontSize: 12,
                            color: COLORS.gray,
                            marginBottom: 14,
                        }}
                    >
                        title
                    </Text>
                    <TextInput
                        placeholder="My mom"
                        style={{
                            paddingBottom: 9,
                            borderBottomWidth: 1,
                            borderBottomColor: "#E2E2E2",
                            fontFamily: "Mulish_400Regular",
                            color: COLORS.black,
                            textTransform: "uppercase",
                            marginBottom: 30,
                        }}
                        placeholderTextColor={COLORS.black}
                    />
                    {/* New Address */}
                    <Text
                        style={{
                            fontFamily: "Mulish_600SemiBold",
                            textTransform: "uppercase",
                            fontSize: 12,
                            color: COLORS.gray,
                            marginBottom: 14,
                        }}
                    >
                        new address
                    </Text>
                    <TextInput
                        placeholder="3646 S 58th Ave, Cicero, IL 60804, USA"
                        style={{
                            paddingBottom: 9,
                            borderBottomWidth: 1,
                            borderBottomColor: "#E2E2E2",
                            fontFamily: "Mulish_400Regular",
                            color: COLORS.black,
                            textTransform: "uppercase",
                            marginBottom: 30,
                        }}
                        placeholderTextColor={COLORS.black}
                    />
                    {/* Use current location */}
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <RadioButton
                            value="first"
                            status={
                                checked === "first" ? "checked" : "unchecked"
                            }
                            onPress={() => setChecked("first")}
                            theme="ReactNativePaper.Theme"
                        />
                        <Text>Use current location</Text>
                    </View>
                </View>
                {/* Button */}
                <View
                    style={{
                        paddingHorizontal: 28,
                        paddingVertical: 16,
                        backgroundColor: "white",
                        borderTopWidth: 1,
                        borderTopColor: "#E2E2E2",
                    }}
                >
                    <Button text="save " />
                </View>
            </View>
        </View>
    );
}
