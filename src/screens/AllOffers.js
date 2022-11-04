import React from "react";
import {
    SafeAreaView,
    View,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    StatusBar,
    Text,
    ScrollView,
} from "react-native";

import { Header } from "../components";
import { CONTAINER, width, COLORS, FONTS, OFFERS } from "../constants";

export default function AllOffers({ navigation }) {
    function renderHeader() {
        return (
            <View>
                <Header
                    title="all offers"
                    onPress={() => navigation.goBack()}
                    arrow={true}
                />
                <StatusBar barStyle="black-content" />
            </View>
        );
    }

    function renderContent() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 28,
                }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {OFFERS.map((item) => {
                        return (
                            <View key={item.id} style={{ marginBottom: 16 }}>
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
                                {/* Image */}
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() =>
                                        navigation.navigate("RestaurantMenu")
                                    }
                                >
                                    <ImageBackground
                                        style={{
                                            height: 171,
                                            padding: "6%",
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
                                                        textTransform:
                                                            "capitalize",
                                                    }}
                                                >
                                                    {item.description}
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontFamily:
                                                            "Mulish_700Bold",
                                                        fontSize: 32,
                                                        color: item.discountColor,
                                                        textTransform:
                                                            "capitalize",
                                                    }}
                                                >
                                                    {item.discount}
                                                </Text>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
}
