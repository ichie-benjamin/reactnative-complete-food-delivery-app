import React, { useState } from "react";
import {
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS, CONTAINER } from "../constants";
import { Header, Copy } from "../components";

const PROMOCODES = [
    {
        id: "1",
        name: "mcdonalds",
        discount: "50% off",
        term: "Valid until June 30, 2021",
        image: require("../images/logos/mc-donalds.png"),
    },
    {
        id: "2",
        name: "mcdonalds",
        discount: "50% off",
        term: "Valid until June 30, 2021",
        image: require("../images/logos/burger-king.png"),
    },
    {
        id: "3",
        name: "mcdonalds",
        discount: "50% off",
        term: "Valid until June 30, 2021",
        image: require("../images/logos/domino.png"),
    },
    {
        id: "4",
        name: "mcdonalds",
        discount: "50% off",
        term: "Valid until June 30, 2021",
        image: require("../images/logos/kfc.png"),
    },
];

export default function MyPromoCodes({ navigation }) {
    const [category, setCategory] = useState("current");

    function Categories() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    paddingHorizontal: 28,
                    marginBottom: 25,
                    marginTop: 10,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 1,
                    }}
                >
                    {/* Button_1 */}
                    <TouchableOpacity onPress={() => setCategory("current")}>
                        <LinearGradient
                            colors={
                                category == "current"
                                    ? ["#FE7E56", "#EA5F5F"]
                                    : ["#fff", "#fff"]
                            }
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ borderRadius: 5, marginHorizontal: 4 }}
                        >
                            <Text
                                style={{
                                    paddingHorizontal: 20,
                                    paddingVertical: 5,
                                    marginHorizontal: 4,
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 14,
                                    color:
                                        category == "current"
                                            ? COLORS.white
                                            : COLORS.gray,
                                }}
                            >
                                Current
                            </Text>
                            <View></View>
                        </LinearGradient>
                    </TouchableOpacity>
                    {/* Button_2 */}
                    <TouchableOpacity onPress={() => setCategory("used")}>
                        <LinearGradient
                            colors={
                                category == "used"
                                    ? ["#FE7E56", "#EA5F5F"]
                                    : ["#fff", "#fff"]
                            }
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ borderRadius: 5, marginHorizontal: 4 }}
                        >
                            <Text
                                style={{
                                    paddingHorizontal: 20,
                                    paddingVertical: 5,
                                    marginHorizontal: 4,
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 14,
                                    color:
                                        category == "used"
                                            ? COLORS.white
                                            : COLORS.gray,
                                }}
                            >
                                Used
                            </Text>
                            <View></View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    function renderPromoCodes() {
        return PROMOCODES.map((item) => (
            <TouchableOpacity
                style={{
                    paddingBottom: 10,
                    marginBottom: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: "#E2E2E2",
                    flexDirection: "row",
                    alignItems: "center",
                }}
                key={item.id}
            >
                <Image
                    source={item.image}
                    style={{
                        width: 73,
                        height: 73,
                        resizeMode: "cover",
                        borderRadius: 5,
                        marginRight: 16,
                        borderRadius: 5,
                    }}
                />
                <View>
                    {/* Name */}
                    <Text
                        style={{
                            textTransform: "capitalize",
                            fontFamily: "Poppins_500Medium",
                            fontSize: 16,
                            color: COLORS.black,
                            textTransform: "capitalize",
                        }}
                    >
                        {item.name}
                    </Text>
                    {/* Discount */}
                    <Text
                        style={{
                            fontFamily: "Mulish_700Bold",
                            fontSize: 20,
                            marginBottom: 5,
                            color: item.discountColor,
                        }}
                    >
                        {item.discount}
                    </Text>
                    {/* Info */}
                    <Text
                        style={{
                            fontFamily: "Mulish_600SemiBold",
                            fontSize: 14,
                            color: COLORS.gray,
                        }}
                    >
                        {item.term}
                    </Text>
                </View>
                <View style={{ position: "absolute", right: 0 }}>
                    <Copy />
                </View>
            </TouchableOpacity>
        ));
    }

    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="black-content" />
                <Header
                    title="My promocodes"
                    onPress={() => navigation.goBack()}
                    arrow={true}
                />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            {renderHeader()}
            {Categories()}
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 28 }}
                showsVerticalScrollIndicator={false}
            >
                {renderPromoCodes()}
            </ScrollView>
        </SafeAreaView>
    );
}
