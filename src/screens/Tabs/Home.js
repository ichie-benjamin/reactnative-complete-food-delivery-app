import React, { useState } from "react";
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    StatusBar,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Shadow } from "react-native-shadow-2";

import {
    COLORS,
    SIZES,
    SHADOW_PRESET,
    CONTAINER,
    OFFERS,
    FONTS,
} from "../../constants";
import {
    Star,
    FreeDelivery,
    Pin,
    Arrow,
    Heading,
    Gift,
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
        text: "Cakes",
        image: require("../../images/icons/cake.png"),
    },
    {
        id: "3",
        text: "Pizza",
        image: require("../../images/icons/pizza.png"),
    },
    {
        id: "4",
        text: "Chinese",
        image: require("../../images/icons/chinese.png"),
    },
    {
        id: "5",
        text: "Salads",
        image: require("../../images/icons/burger.png"),
    },
    {
        id: "6",
        text: "Fast Foods",
        image: require("../../images/icons/fastfood.png"),
    },
];

export default function Home() {
    const [category, setCategory] = useState(0);

    const navigation = useNavigation();

    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="light-content" />
                {/* Background */}
                <ImageBackground
                    source={require("../../images/background/home-bg.png")}
                    style={{
                        height: 150,
                        flexDirection: "row",
                        alignItems: "center",
                        width: SIZES.width,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            marginHorizontal: 28,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate("EditProfile")}
                    >
                        {/* Image */}
                        <Image
                            source={require("../../images/icons/photo.png")}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                marginRight: 10,
                            }}
                        />
                        {/* Info */}

                        {/*<View style={{ flex: 1 }}>*/}
                        {/*    <Text*/}
                        {/*        style={{*/}
                        {/*            fontFamily: "Mulish_600SemiBold",*/}
                        {/*            fontSize: 16,*/}
                        {/*            textTransform: "capitalize",*/}
                        {/*            color: "white",*/}
                        {/*            marginBottom: 4,*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        deliver to:*/}
                        {/*    </Text>*/}
                        {/*    <View*/}
                        {/*        style={{*/}
                        {/*            flexDirection: "row",*/}
                        {/*            alignItems: "center",*/}
                        {/*            justifyContent: "space-between",*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        <Text*/}
                        {/*            style={{*/}
                        {/*                fontFamily: "Mulish_600SemiBold",*/}
                        {/*                fontSize: 16,*/}
                        {/*                textTransform: "capitalize",*/}
                        {/*                color: "white",*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            8000 S Kirkland Ave, Chicago ...*/}
                        {/*        </Text>*/}
                        {/*        <View>*/}
                        {/*            <Arrow*/}
                        {/*                fillColor={COLORS.white}*/}
                        {/*                strokeColor={COLORS.white}*/}
                        {/*            />*/}
                        {/*        </View>*/}
                        {/*    </View>*/}
                        {/*</View>*/}



                    </TouchableOpacity>
                </ImageBackground>
                {/* Categories */}
                <View style={{ paddingLeft: 28, top: -36 }}>
                    <FlatList
                        horizontal
                        data={RESTAURANTS_CATEGORIES}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <View key={item.key}>
                                    {/* Icon */}

                                    <View
                                        style={{
                                            marginRight: 10,
                                        }}
                                    >
                                        {/* Button */}
                                        <Shadow {...SHADOW_PRESET.shadow}>
                                            <View
                                                style={{
                                                    width: 72,
                                                    height: 72,
                                                    backgroundColor:
                                                        COLORS.white,
                                                    borderRadius: 5,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <TouchableOpacity
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                    }}
                                                    onPress={() =>
                                                        setCategory(index)
                                                    }
                                                >
                                                    <Image
                                                        source={item.image}
                                                        style={{
                                                            width: 43,
                                                            height: 43,
                                                            tintColor:
                                                                category ==
                                                                index
                                                                    ? COLORS.orange
                                                                    : "gray",
                                                        }}
                                                        resizeMode="contain"
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </Shadow>
                                        {/* Text */}
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                marginTop: 8,
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                fontSize: 14,
                                                color:
                                                    category == index
                                                        ? COLORS.orange
                                                        : "gray",
                                            }}
                                        >
                                            {item.text}
                                        </Text>
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>
            </View>
        );
    }

    function renderHotOffers() {
        function OfferItem({ item, index }) {
            return (
                <View style={{ width: 300, height: 161, marginRight: 16 }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("RestaurantMenu")}
                    >
                        <ImageBackground
                            style={{
                                height: 161,
                                width: 300,
                                padding: "5%",
                            }}
                            source={item.image}
                            imageStyle={{
                                borderRadius: 5,
                            }}
                            resizeMode="cover"
                        >
                            <View
                                style={{
                                    alignItems: "flex-end",
                                }}
                            >
                                <View>
                                    <Text
                                        style={{
                                            color: item.descriptionColor,
                                            textAlign: "left",
                                            ...FONTS.H3,
                                            width: 176,
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        {item.description}
                                    </Text>
                                    <Text
                                        style={{
                                            fontFamily: "Mulish_700Bold",
                                            fontSize: 32,
                                            color: item.discountColor,
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        {item.discount}
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    {/* Free Delivery */}
                    <View
                        style={{
                            width: 120,
                            height: 40,
                            backgroundColor: COLORS.orange,
                            position: "absolute",
                            bottom: 0,
                            justifyContent: "center",
                            alignItems: "center",
                            borderTopRightRadius: 5,
                            borderBottomLeftRadius: 5,
                            zIndex: 999,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "Mulish_600SemiBold",
                                fontSize: 14,
                                color: COLORS.white,
                            }}
                        >
                            Free delivery
                        </Text>
                    </View>
                </View>
            );
        }

        return (
            <View style={{ marginBottom: 40 }}>
                <Heading
                    title="Hot Offers"
                    allOffers={true}
                    containerStyle={{ paddingHorizontal: 28 }}
                />
                <FlatList
                    horizontal={true}
                    data={OFFERS}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginLeft: 28 }}
                    initialNumToRender={6}
                    renderItem={({ item, index }) => (
                        <OfferItem item={item} index={index} />
                    )}
                />
            </View>
        );
    }

    function renderPopularRestaurants() {
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
        <View style={{ ...CONTAINER.container }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderHeader()}
                {renderHotOffers()}
                {renderPopularRestaurants()}
            </ScrollView>
        </View>
    );
}
