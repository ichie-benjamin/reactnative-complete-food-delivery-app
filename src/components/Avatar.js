import { View, ImageBackground } from "react-native";
import React from "react";

import EditProfileIcon from "../components/svg/EditProfileIcon";

export default function Avatar({ photo }) {
    return (
        <View
            style={{
                alignItems: "center",
                marginTop: 20,
                marginBottom: 40,
            }}
        >
            <ImageBackground
                style={{ width: 100, height: 100 }}
                source={photo}
                imageStyle={{ borderRadius: 50 }}
            >
                <View
                    style={{
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                    }}
                >
                    <EditProfileIcon />
                </View>
            </ImageBackground>
        </View>
    );
}
