import React from "react";
import { View, Text, Image } from "react-native";

export default function Product({ name, price, previewImage }) {
    return (
        <View
            style={{
                width: "100%",
                height: 81,
                marginBottom: 10,
                flexDirection: "row",
            }}
        >
            <Image
                source={require("../images/onboarding/onboarding-1.png")}
                style={{ width: 73, height: "100%" }}
            />
            <View
                style={{
                    paddingTop: 12,
                    paddingBottom: 13.5,
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    flex: 1,
                    paddingLeft: 14,
                }}
            >
                <Text>Caramel cake with beries</Text>
                <Text>$33.9</Text>
            </View>
        </View>
    );
}
