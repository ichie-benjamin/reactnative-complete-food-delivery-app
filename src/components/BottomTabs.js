import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../constants/theme";

const TABS = [
    {
        id: "1",
        text: "Home",
        icon: require("../images/icons/home.png"),
    },
    {
        id: "2",
        text: "Search",
        icon: require("../images/icons/search.png"),
    },
    {
        id: "3",
        text: "Order",
        icon: require("../images/icons/bag.png"),
    },
    {
        id: "4",
        text: "Profile",
        icon: require("../images/icons/user.png"),
    },
];

export default function BottomTabs() {
    const [selectedBottomTab, setSelectedBottomTab] = useState(0);

    return (
        <View
            style={{
                width: "100%",
                paddingVertical: 15,
                backgroundColor: COLORS.white,
                borderTopWidth: 1,
                borderTopColor: COLORS.lightGrey,
                paddingHorizontal: 41,
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            {TABS.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.5}
                    onPress={() => {
                        setSelectedBottomTab(index);
                        onPress;
                    }}
                >
                    <View style={{ alignItems: "center" }}>
                        <Image
                            source={item.icon}
                            style={{ width: 24, height: 24 }}
                            resizeMode="cover"
                            tintColor={
                                selectedBottomTab == index
                                    ? COLORS.orange
                                    : COLORS.gray
                            }
                        />
                        <Text
                            style={{
                                fontFamily: "Mulish_600SemiBold",
                                fontSize: 14,
                                color: COLORS.gray,
                                lineHeight: 21,
                                marginTop: 6,
                                color:
                                    selectedBottomTab == index
                                        ? COLORS.orange
                                        : COLORS.gray,
                            }}
                        >
                            {item.text}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}
