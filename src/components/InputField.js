import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

import { COLORS } from "../constants";

export default function InputField({
    heading,
    placeholder,
    icon,
    textContentType,
    containerStyle,
    secureTextEntry,
    iconEye,
    onPress,
    keyboardType,
}) {
    return (
        <View style={{ ...containerStyle }}>
            <Text
                style={{
                    fontFamily: "Mulish_400Regular",
                    textTransform: "uppercase",
                    color: COLORS.gray,
                    marginBottom: 5,
                    fontSize: 12,
                }}
            >
                {heading}
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    marginBottom: 30,
                }}
            >
                <TextInput
                    style={{
                        width: "100%",
                        height: 35,
                        borderColor: "black",
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.lightGrey,
                        textTransform: "uppercase",
                        fontFamily: "Mulish_400Regular",
                        paddingRight: 20,
                        fontSize: 16,
                        color: COLORS.black,
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.black}
                    textContentType={textContentType}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                />
                <View
                    style={{
                        position: "absolute",
                        right: 0,
                        alignSelf: "center",
                    }}
                >
                    {icon}
                </View>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        right: 0,
                        alignSelf: "center",
                    }}
                    onPress={onPress}
                >
                    {iconEye}
                </TouchableOpacity>
            </View>
        </View>
    );
}
