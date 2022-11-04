import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";

import { CONTAINER, COLORS } from "../constants";
import { Header, Check } from "../components";

const ORDER_HISTORY = [
    {
        id: "1",
        name: "Filada Family bar",
        image: require("../images/restaurants/05.jpg"),
        date: "May 26, 2021 - 10:38 AM",
        total: "36.42",
        delivered: true,
        dishes: [
            {
                id: "1",
                dishName: "Tom Yum Goong x 1",
                price: "10.38",
            },
            {
                id: "2",
                dishName: "Yam Pla Dook Foo x 1",
                price: "17.83",
            },
            {
                id: "3",
                dishName: "Pad Phuk Tong x 1",
                price: "8.21",
            },
        ],
    },
    {
        id: "2",
        name: "National rest",
        image: require("../images/restaurants/06.jpg"),
        date: "May 26, 2021 - 10:38 AM",
        total: "84.12",
        delivered: true,
        dishes: [
            {
                id: "1",
                dishName: "Tom Yum Goong x 1",
                price: "10.38",
            },
            {
                id: "2",
                dishName: "Yam Pla Dook Foo x 1",
                price: "17.83",
            },
            {
                id: "3",
                dishName: "Pad Phuk Tong x 1",
                price: "8.21",
            },
        ],
    },
    {
        id: "3",
        name: "Rolls & rolls",
        image: require("../images/restaurants/07.jpg"),
        date: "May 26, 2021 - 10:38 AM",
        total: "52.76",
        delivered: true,
        dishes: [
            {
                id: "1",
                dishName: "Tom Yum Goong x 1",
                price: "10.38",
            },
            {
                id: "2",
                dishName: "Yam Pla Dook Foo x 1",
                price: "17.83",
            },
            {
                id: "3",
                dishName: "Pad Phuk Tong x 1",
                price: "8.21",
            },
        ],
    },
];

export default function OrderHistory({ navigation }) {
    const [activeSections, setActiveSections] = useState([]);

    const setSections = (sections) => {
        setActiveSections(sections.includes(undefined) ? [] : sections);
    };

    function renderHeader(section) {
        return (
            <View
                style={{
                    width: "100%",
                    height: 108,
                    backgroundColor: COLORS.white,
                    borderRadius: 5,
                    flex: 1,
                    flexDirection: "row",
                    marginBottom: 10,
                }}
            >
                {/* IMAGE */}
                <Image
                    source={section.image}
                    style={{
                        width: 104,
                        height: "100%",
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                    }}
                    resizeMode="cover"
                />
                {/* RESTAURANTS INFO */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: 16,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Poppins_500Medium",
                            fontSize: 18,
                            lineHeight: 21,
                            textTransform: "capitalize",
                        }}
                    >
                        {section.name}
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Mulish_600SemiBold",
                            color: "#7D849A",
                            lineHeight: 21,
                        }}
                    >
                        {section.date}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Mulish_600SemiBold",
                                fontSize: 14,
                                lineHeight: 21,
                                color: "#00824B",
                                marginRight: 10,
                            }}
                        >
                            {section.delivered == true
                                ? "Delivered"
                                : "Cencelled"}
                        </Text>
                        <Check />
                    </View>
                    <Text
                        style={{
                            position: "absolute",
                            right: 16,
                            bottom: 15,
                            fontFamily: "Mulish_600SemiBold",
                            fontSize: 14,
                            color: COLORS.black,
                        }}
                    >
                        ${section.total}
                    </Text>
                </View>
            </View>
        );
    }

    function renderContent(section) {
        return (
            <View style={{ marginTop: 10 }}>
                {section.dishes.map((item) => (
                    <View
                        key={item.id}
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Mulish_600SemiBold",
                                fontSize: 14,
                                color: COLORS.gray,
                                marginBottom: 10,
                            }}
                        >
                            {item.dishName}
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Mulish_600SemiBold",
                                fontSize: 14,
                                color: COLORS.gray,
                            }}
                        >
                            ${item.price}
                        </Text>
                    </View>
                ))}
                {/* Repeat Order */}
                <TouchableOpacity
                    style={{
                        flex: 1,
                        height: 50,
                        width: "100%",
                        backgroundColor: "#fff",
                        marginVertical: 20,
                        borderRadius: 5,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => navigation.navigate("Order")}
                >
                    <Text
                        style={{
                            fontFamily: "Mulish_700Bold",
                            fontSize: 14,
                            textTransform: "uppercase",
                            color: "#E83939",
                        }}
                    >
                        repeat order
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            {/* Navigation */}
            <View>
                <StatusBar barStyle="black-content" />
                <Header
                    title="Order history"
                    onPress={() => navigation.goBack()}
                    arrow={true}
                    containerStyle={{ marginBottom: 10 }}
                />
            </View>
            {/* Content */}
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 28 }}
                showsVerticalScrollIndicator={false}
            >
                <Accordion
                    activeSections={activeSections}
                    sections={ORDER_HISTORY}
                    touchableComponent={TouchableOpacity}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    duration={400}
                    onChange={setSections}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
