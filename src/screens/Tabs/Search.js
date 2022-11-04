import React, { useState } from "react";
import {
    Text,
    SafeAreaView,
    View,
    TextInput,
    Image,
    ScrollView,
    StatusBar,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { COLORS, CONTAINER } from "../../constants";
import {
    Star,
    FreeDelivery,
    Pin,
    Filter,
    ProfileCategory,
    Header,
    Heading,
} from "../../components";

const POPULAR_RESTAURANTS = [
    {
        id: "1",
        name: "Filada Family bar",
        image: require("../../images/restaurants/05.jpg"),
        type: "Asian food",
        rating: "5.0",
        distance: "0.2 km",
    },
    {
        id: "2",
        name: "Chiken taste",
        image: require("../../images/restaurants/06.jpg"),
        type: "Asian food",
        rating: "5.0",
        distance: "0.2 km",
    },
    {
        id: "3",
        name: "Rolls & rolls",
        image: require("../../images/restaurants/07.jpg"),
        type: "Asian food",
        rating: "5.0",
        distance: "0.2 km",
    },
    {
        id: "4",
        name: "National rest",
        image: require("../../images/restaurants/09.jpg"),
        type: "Asian food",
        rating: "5.0",
        distance: "0.2 km",
    },
];

const RESTAURANTS_CATEGORIES = [
    {
        id: "1",
        text: "Burger",
        image: require("../../images/icons/burger.png"),
    },
    {
        id: "2",
        text: "Salads",
        image: require("../../images/icons/salad.png"),
    },
    {
        id: "3",
        text: "Pizza",
        image: require("../../images/icons/pizza.png"),
    },
    {
        id: "4",
        text: "Pasta",
        image: require("../../images/icons/spaghetti.png"),
    },
    {
        id: "5",
        text: "Salads",
        image: require("../../images/icons/burger.png"),
    },
    {
        id: "6",
        text: "Pizza",
        image: require("../../images/icons/salad.png"),
    },
];

export default function Search() {
    const navigation = useNavigation();
    const [category, setCategory] = useState(0);

    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="black-content" />
                <View style={{ marginHorizontal: 28, marginTop: 15 }}>
                    <View
                        style={{
                            width: "100%",
                            height: 50,
                            backgroundColor: COLORS.white,
                            flexDirection: "row",
                            alignItems: "center",
                            borderRadius: 5,
                            paddingHorizontal: 20,
                        }}
                    >
                        <TextInput
                            placeholder="Search for a dish..."
                            style={{
                                flex: 1,
                                fontFamily: "Mulish_600SemiBold",
                                fontSize: 14,
                                color: COLORS.gray,
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Filter")}
                        >
                            <Filter />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginLeft: 28, marginBottom: 40 }}>
                    <FlatList
                        data={RESTAURANTS_CATEGORIES}
                        horizontal
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={{
                                    paddingHorizontal: 28,
                                    marginTop: 16,
                                    paddingVertical: 8,
                                    backgroundColor:
                                        category == index
                                            ? COLORS.carrot
                                            : COLORS.white,
                                    marginRight: 8,
                                    borderRadius: 5,
                                }}
                                onPress={() => setCategory(index)}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Mulish_600SemiBold",
                                        fontSize: 14,
                                        color:
                                            category == index
                                                ? COLORS.white
                                                : COLORS.gray,
                                    }}
                                >
                                    {item.text}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        );
    }

    function renderRestaurants() {
        return (
            <View style={{ paddingHorizontal: 28, marginBottom: 20 }}>
                <Heading title="Popular Restaurants" />
                {POPULAR_RESTAURANTS.map((item) => (
                    <View key={item.id}>
                        <TouchableOpacity
                            style={{
                                width: "100%",
                                height: 140,
                                backgroundColor: COLORS.white,
                                borderRadius: 5,
                                flexDirection: "row",
                                marginBottom: 12,
                            }}
                            activeOpacity={0.6}
                            onPress={() =>
                                navigation.navigate("RestaurantMenu")
                            }
                        >
                            <Image
                                source={item.image}
                                style={{
                                    width: 124,
                                    height: 140,
                                    borderTopLeftRadius: 5,
                                    borderBottomLeftRadius: 5,
                                }}
                            />
                            {/* Rating */}
                            <View
                                style={{
                                    backgroundColor: COLORS.white,
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    paddingVertical: 6,
                                    paddingHorizontal: 12,
                                    borderTopLeftRadius: 5,
                                    borderBottomRightRadius: 5,
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Star
                                    fillColor={COLORS.carrot}
                                    containerStyle={{ marginRight: 7 }}
                                />
                                <Text
                                    style={{
                                        fontFamily: "Mulish_600SemiBold",
                                        fontSize: 12,
                                    }}
                                >
                                    {item.rating}
                                </Text>
                            </View>
                            {/* Info */}
                            <View
                                style={{
                                    paddingVertical: 24,
                                    paddingHorizontal: 16,
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Poppins_500Medium",
                                        fontSize: 18,
                                        textTransform: "capitalize",
                                        color: COLORS.black,
                                        marginBottom: 4,
                                    }}
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Mulish_400Regular",
                                        textTransform: "capitalize",
                                        color: COLORS.gray,
                                        flex: 1,
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
                                    {/* <Pin /> */}
                                    <Pin strokeColor={COLORS.gray} />
                                    <Text
                                        style={{
                                            paddingLeft: 5,
                                            paddingRight: 8,
                                            color: COLORS.gray,
                                        }}
                                    >
                                        {item.distance} - $$ -
                                    </Text>
                                    {/* Free Delivery */}
                                    <FreeDelivery />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderHeader()}
                {renderRestaurants()}
            </ScrollView>
        </SafeAreaView>
    );
}
