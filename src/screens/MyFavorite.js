import React, { useState } from "react";
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Header, Arrow, Star, Pin } from "../components";
import { COLORS, CONTAINER, FONTS } from "../constants";

const MY_FAVORITE = [
    {
        id: "1",
        name: "Chiken taste",
        type: "Bakery",
        rating: "5.0 -",
        distance: "0.2 km",
        image: require("../images/restaurants/05.jpg"),
    },
    {
        id: "2",
        name: "croissant cafe",
        type: "Bakery",
        rating: "5.0 -",
        distance: "0.2 km",
        image: require("../images/restaurants/06.jpg"),
    },
    {
        id: "3",
        name: "National rest",
        type: "Bakery",
        rating: "5.0 -",
        distance: "0.2 km",
        image: require("../images/restaurants/07.jpg"),
    },
    {
        id: "4",
        name: "Filada Family bar",
        type: "Bakery",
        rating: "5.0 -",
        distance: "0.2 km",
        image: require("../images/restaurants/09.jpg"),
    },
    {
        id: "5",
        name: "Rolls & rolls",
        type: "Bakery",
        rating: "5.0 -",
        distance: "0.2 km",
        image: require("../images/restaurants/10.jpg"),
    },
];

export default function MyFavorite({ navigation }) {
    const [selectedMenuType, setSelectedMenuType] = useState("restaurants");

    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="black-content" />
                <Header
                    title="My Favorite"
                    onPress={() => navigation.goBack()}
                    arrow={true}
                />
            </View>
        );
    }

    function renderCategories() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginBottom: 20,
                    paddingHorizontal: 28,
                }}
            >
                {/* Category 1 */}
                <TouchableOpacity
                    onPress={() => setSelectedMenuType("restaurants")}
                >
                    <LinearGradient
                        colors={
                            selectedMenuType == "restaurants"
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
                                lineHeight: 21,
                                color:
                                    selectedMenuType == "restaurants"
                                        ? COLORS.white
                                        : COLORS.gray,
                            }}
                        >
                            Restaurants
                        </Text>
                        <View></View>
                    </LinearGradient>
                </TouchableOpacity>
                {/* Category 2 */}
                <TouchableOpacity onPress={() => setSelectedMenuType("food")}>
                    <LinearGradient
                        colors={
                            selectedMenuType == "food"
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
                                lineHeight: 21,
                                color:
                                    selectedMenuType == "food"
                                        ? COLORS.white
                                        : COLORS.gray,
                            }}
                        >
                            Food
                        </Text>
                        <View></View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }

    function renderContent() {
        return (
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 28, marginTop: 10 }}
                showsVerticalScrollIndicator={false}
            >
                {MY_FAVORITE.map((item) => {
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                paddingBottom: 10,
                                marginBottom: 20,
                                borderBottomWidth: 1,
                                borderBottomColor: "#E2E2E2",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                            activeOpacity={0.5}
                            onPress={() =>
                                navigation.navigate("RestaurantMenu")
                            }
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    flex: 1,
                                }}
                            >
                                <Image
                                    source={item.image}
                                    style={{
                                        width: 73,
                                        height: 73,
                                        resizeMode: "cover",
                                        borderRadius: 5,
                                        marginRight: 16,
                                    }}
                                />
                                <View>
                                    <Text
                                        style={{
                                            textTransform: "capitalize",
                                            ...FONTS.H4,
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={{
                                            color: COLORS.gray,
                                            paddingBottom: 5,
                                        }}
                                    >
                                        {item.type}
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Star strokeColor={COLORS.black} />
                                        <Text>5.0 -</Text>
                                        <Pin strokeColor={COLORS.black} />
                                        <Text>0.2 km - $$</Text>
                                    </View>
                                </View>
                            </View>
                            <Arrow
                                fillColor={COLORS.gray}
                                strokeColor={COLORS.gray}
                            />
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            {renderHeader()}
            {renderCategories()}
            {renderContent()}
        </SafeAreaView>
    );
}
