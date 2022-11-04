import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,
    StatusBar,
} from "react-native";

import { Header, Button, Line } from "../components";
import { COLORS, CONTAINER } from "../constants";

const ADDRESS = [
    {
        id: 1,
        title: "Home",
        address: "8000 S Kirkland Ave, Chicago, IL 6065...",
        icon: require("../images/icons/home.png"),
    },
    {
        id: 2,
        title: "Work",
        address: "6391 Elgin St. Celina, Delaware 10299",
        icon: require("../images/icons/briefcase.png"),
    },
    {
        id: 3,
        title: "Other",
        address: "3891 Ranchview Dr. Richardson, Califor...",
        icon: require("../images/icons/map-pin.png"),
    },
];

export default function MyAddress({ navigation }) {
    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="black-content" />
                <Header
                    title="My Address"
                    arrow={true}
                    onPress={() => navigation.goBack()}
                />
                <Line containerStyle={{ marginTop: 10 }} />
            </View>
        );
    }

    function renderContent() {
        return (
            <ScrollView contentContainerStyle={{ paddingHorizontal: 28 }}>
                {ADDRESS.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={{
                            flexDirection: "row",
                            marginTop: 20,
                        }}
                        activeOpacity={0.5}
                    >
                        <Image
                            source={item.icon}
                            style={{ width: 20, height: 20, marginRight: 10 }}
                        />
                        <View
                            style={{
                                paddingBottom: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: "#E2E2E2",
                                flex: 1,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 16,
                                    marginBottom: 4,
                                    color: COLORS.black,
                                    lineHeight: 16,
                                }}
                            >
                                {item.title}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Mulish_600SemiBold",
                                    lineHeight: 20,
                                    color: COLORS.gray,
                                }}
                            >
                                {item.address}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
                {/* Button */}
                <View style={{ marginTop: 30 }}>
                    <Button
                        text="add new address"
                        onPress={() => navigation.navigate("AddNewAddress")}
                    />
                </View>
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
}
