import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import { COLORS } from "../../constants";
import { Gift, HomeTab, SearchTab, BagTab, UserTab } from "../../components";

/* Screens */
import Home from "./Home";
import Order from "./Order";
import Profile from "./Profile";
import Search from "./Search";

export default function MainLayout({ navigation }) {
    const [selectedBottomTab, setSelectedBottomTab] = useState("Home");

    const TABS = [
        {
            id: "1",
            text: "Home",
            icon: (
                <HomeTab
                    fill={
                        selectedBottomTab == "Home"
                            ? COLORS.orange
                            : COLORS.gray
                    }
                />
            ),
        },
        {
            id: "2",
            text: "Search",
            icon: (
                <SearchTab
                    fill={
                        selectedBottomTab == "Search"
                            ? COLORS.orange
                            : COLORS.gray
                    }
                />
            ),
        },
        {
            id: "3",
            text: "Order",
            icon: (
                <BagTab
                    fill={
                        selectedBottomTab == "Order"
                            ? COLORS.orange
                            : COLORS.gray
                    }
                />
            ),
        },
        {
            id: "4",
            text: "Profile",
            icon: (
                <UserTab
                    fill={
                        selectedBottomTab == "Profile"
                            ? COLORS.orange
                            : COLORS.gray
                    }
                />
            ),
        },
    ];

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightBlue }}>
            {selectedBottomTab == "Home" && <Home />}
            {selectedBottomTab == "Search" && <Search />}
            {selectedBottomTab == "Order" && navigation.navigate("Order")}
            {selectedBottomTab == "Profile" && <Profile />}
            {/* Tabs */}
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
                            item.text != "Order"
                                ? setSelectedBottomTab(item.text)
                                : navigation.navigate("Order");
                        }}
                    >
                        <View style={{ alignItems: "center" }}>
                            {item.icon}

                            <Text
                                style={{
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 14,
                                    color: COLORS.gray,
                                    lineHeight: 21,
                                    marginTop: 6,
                                    color:
                                        selectedBottomTab == item.text
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

            {selectedBottomTab == "Home" && (
                <StatusBar barStyle="light-content" />
            )}
            {selectedBottomTab == "Search" && (
                <StatusBar barStyle="black-content" />
            )}
            {selectedBottomTab == "Profile" && (
                <StatusBar barStyle="light-content" />
            )}
        </View>
    );
}
