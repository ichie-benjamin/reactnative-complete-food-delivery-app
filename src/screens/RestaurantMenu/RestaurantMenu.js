import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Image,
    StatusBar,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import Modal from "react-native-modal";

import {
    COLORS,
    FONTS,
    SIZES,
    LINE,
    CONTAINER,
    SHADOW_PRESET,
    DISHES,
} from "../../constants";
import {
    Back,
    Heart,
    Search,
    Info,
    Truck,
    Star,
    Button,
    Close,
    InfoItem,
    Phone,
    Pin,
    Mail,
    Clock,
} from "../../components";

const CATEGORIES = [
    {
        id: "1",
        category: "Most Popular",
    },
    {
        id: "2",
        category: "Cakes",
    },
    {
        id: "3",
        category: "Ice-cream",
    },
    {
        id: "4",
        category: "Most Popular",
    },
    {
        id: "5",
        category: "Cakes",
    },
    {
        id: "6",
        category: "Ice-cream",
    },
    {
        id: "7",
        category: "Most Popular",
    },
    {
        id: "8",
        category: "Cakes",
    },
];

export default function RestaurantMenu({ navigation }) {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const [favorite, setFavorite] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);

    function likeDislike() {
        return () => setFavorite(!favorite);
    }

    useEffect(() => {
        return likeDislike();
    }, [favorite]);

    function renderHeader() {
        /* Info Block */
        function infoBlock() {
            return (
                <View style={{ paddingHorizontal: 28, bottom: -23 }}>
                    <Shadow {...SHADOW_PRESET.shadow}>
                        <View
                            style={{
                                paddingVertical: 13,
                                backgroundColor: COLORS.white,
                                width: SIZES.width - 56,
                                borderRadius: 5,
                                paddingHorizontal: 20,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Truck />
                                <Text
                                    style={{
                                        marginLeft: 9,
                                        fontFamily: "Mulish_400Regular",
                                        fontSize: 16,
                                    }}
                                >
                                    Free delivery from
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Mulish_700Bold",
                                        fontSize: 16,
                                        color: COLORS.orange,
                                    }}
                                >
                                    {" "}
                                    $200
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Star
                                    strokeColor={COLORS.carrot}
                                    fillColor={COLORS.carrot}
                                />
                                <Text
                                    style={{
                                        marginLeft: 7,
                                        fontFamily: "Mulish_400Regular",
                                        fontSize: 16,
                                    }}
                                >
                                    5.0
                                </Text>
                            </View>
                        </View>
                    </Shadow>
                </View>
            );
        }

        return (
            <ImageBackground
                source={require("../../images/background/background.png")}
                style={{ width: "100%", height: 195 }}
            >
                <StatusBar barStyle="light-content" />
                {/* Header Top */}
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 16,
                            marginTop: 25,
                        }}
                    >
                        {/* Back Button */}
                        <TouchableOpacity
                            style={{
                                paddingHorizontal: 28,
                                paddingVertical: 10,
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Back color={COLORS.white} />
                        </TouchableOpacity>
                        {/* Wrapper */}
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            {/* Search */}
                            <TouchableOpacity
                                style={{
                                    paddingHorizontal: 10,
                                    paddingVertical: 10,
                                }}
                                onPress={() => navigation.navigate("Search")}
                            >
                                <Search />
                            </TouchableOpacity>
                            {/* Heart */}
                            <TouchableOpacity
                                style={{
                                    paddingRight: 28,
                                    paddingLeft: 10,
                                    paddingVertical: 10,
                                }}
                                onPress={() => {
                                    setFavorite(!favorite);
                                }}
                            >
                                <Heart
                                    strokeColor={COLORS.white}
                                    fillColor={
                                        favorite == true
                                            ? COLORS.white
                                            : "rgba(52, 52, 52, 0.0)"
                                    }
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            marginHorizontal: 28,
                            flexDirection: "row",
                        }}
                    >
                        {/* Icon */}
                        <Image
                            source={require("../../images/icons/icon.png")}
                            style={{
                                width: 50,
                                height: 43,
                                marginRight: 16,
                            }}
                        />
                        {/* Info Text */}
                        <View
                            style={{
                                flex: 1,
                                bottom: 4,
                            }}
                        >
                            {/* Name */}
                            <View>
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        ...FONTS.H2,
                                        textTransform: "capitalize",
                                    }}
                                >
                                    croissant cafe
                                </Text>
                            </View>
                            {/* Type */}
                            <Text
                                style={{
                                    fontFamily: "Mulish_400Regular",
                                    fontSize: 16,
                                    color: COLORS.white,
                                    textTransform: "capitalize",
                                }}
                            >
                                Bakery
                            </Text>
                        </View>
                        {/* Info BTN */}
                        <TouchableOpacity
                            style={{ paddingLeft: 15, paddingBottom: 15 }}
                            onPress={() => {
                                setShowInfoModal(true);
                            }}
                        >
                            <Info />
                        </TouchableOpacity>
                    </View>
                </View>
                {infoBlock()}
            </ImageBackground>
        );
    }

    function renderCategory() {
        return (
            <View style={{ marginLeft: 28, marginTop: 41 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {CATEGORIES.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                backgroundColor:
                                    selectedCategoryIndex == item.id
                                        ? COLORS.carrot
                                        : COLORS.white,
                                marginRight: 8,
                                borderRadius: 5,
                                paddingHorizontal: 20,
                                paddingVertical: 7,
                            }}
                            activeOpacity={0.5}
                            onPress={() => {
                                setSelectedCategoryIndex(item.id);
                            }}
                        >
                            <Text
                                style={{
                                    color:
                                        selectedCategoryIndex == item.id
                                            ? COLORS.white
                                            : COLORS.gray,
                                }}
                            >
                                {item.category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        );
    }

    function renderContent() {
        return (
            <View
                style={{
                    paddingHorizontal: 28,
                    marginTop: 40,
                    // marginBottom: 20,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                {DISHES.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate("DishDescription")}
                    >
                        {/* Block */}
                        <View
                            style={{
                                width: (SIZES.width - 28) * 0.445,
                                height: 230,
                                backgroundColor: COLORS.white,
                                marginBottom: 11,
                            }}
                        >
                            {/* Image */}
                            <Image
                                source={item.image}
                                style={{
                                    width: "100%",
                                    height: 130,
                                    resizeMode: "cover",
                                    borderTopRightRadius: 5,
                                    borderTopLeftRadius: 5,
                                }}
                            />
                            {/* Inner Block */}
                            <View
                                style={{
                                    marginTop: 16,
                                    paddingHorizontal: 12,
                                    flex: 1,
                                    paddingBottom: 14,
                                    justifyContent: "space-between",
                                }}
                            >
                                {/* Dish Title */}
                                <Text
                                    style={{
                                        marginBottom: 11,
                                        ...FONTS.H5,
                                        color: COLORS.black,
                                        textTransform: "capitalize",
                                    }}
                                >
                                    {item.name}
                                </Text>
                                {/* Price */}
                                <Text
                                    style={{
                                        fontFamily: "Mulish_600SemiBold",
                                        fontSize: 14,
                                        color: COLORS.gray,
                                    }}
                                >
                                    ${item.price}
                                </Text>
                                {/* Quantity */}
                                {item.quantity > 0 && (
                                    <View
                                        style={{
                                            width: 28,
                                            height: 28,
                                            backgroundColor: COLORS.orange,
                                            position: "absolute",
                                            bottom: 10,
                                            right: 10,
                                            borderRadius: 5,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: COLORS.white,
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                fontSize: 14,
                                            }}
                                        >
                                            {item.quantity}
                                        </Text>
                                    </View>
                                )}
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }

    function renderButton() {
        return (
            <Button
                containerStyle={{
                    paddingHorizontal: 28,
                    paddingVertical: 16,
                    backgroundColor: COLORS.white,
                    ...LINE.line,
                }}
                text="view cart"
                onPress={() => navigation.navigate("Order")}
                quantity={3}
                price={76}
            />
        );
    }

    function renderInfoModal() {
        return (
            <Modal
                isVisible={showInfoModal}
                onBackdropPress={() => setShowInfoModal(false)}
                hideModalContentWhileAnimating={true}
                backdropTransitionOutTiming={0}
                style={{ margin: 0 }}
            >
                {/* Content */}
                <View
                    style={{
                        backgroundColor: COLORS.lightBlue,
                        position: "absolute",
                        width: SIZES.width,
                        bottom: 0,
                        paddingHorizontal: 28,
                        paddingVertical: 40,
                    }}
                >
                    <ScrollView>
                        <Text
                            style={{
                                fontFamily: "Poppins_600SemiBold",
                                fontSize: 20,
                                textTransform: "capitalize",
                                paddingBottom: 20,
                                color: COLORS.black,
                            }}
                        >
                            croissant cafe
                        </Text>
                        <Text
                            style={{
                                marginBottom: 30,
                                fontFamily: "Mulish_400Regular",
                                fontSize: 16,
                                lineHeight: 24,
                                color: COLORS.gray,
                            }}
                        >
                            Et quis amet laboris mollit eu nostrud exercitation.
                            Qui ex aute ipsum duis. Incididunt adipisicing
                            adipisicing voluptate laborum tempor dolor deserunt
                            exercitation in officia minim elit. Aute
                            exercitation Lorem consequat fugiat id ut.
                        </Text>
                        <InfoItem icon={<Phone />} text="+1 387 456 88 74" />
                        <InfoItem
                            icon={<Pin strokeColor={COLORS.gray} />}
                            text="2464 Royal Ln. Mesa, New Jersey 45463"
                        />
                        <InfoItem icon={<Mail />} text="desertshow@mail.com" />
                        <InfoItem
                            icon={<Clock />}
                            text="10 AM - 11 PM, 7 days/week"
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginBottom: 15,
                            }}
                        >
                            <View style={{ marginRight: 13 }}>
                                <Truck />
                            </View>
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
                                        color: COLORS.black,
                                    }}
                                >
                                    Free delivery from
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Mulish_600SemiBold",
                                        fontSize: 14,
                                        color: COLORS.orange,
                                    }}
                                >
                                    {" "}
                                    $200 in order
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <Close
                        containerStyle={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            padding: 16,
                        }}
                        onPress={() => setShowInfoModal(false)}
                    />
                </View>
            </Modal>
        );
    }

    return (
        <View style={{ ...CONTAINER.container }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderHeader()}
                {renderCategory()}
                {renderContent()}
            </ScrollView>
            {renderButton()}
            {renderInfoModal()}
        </View>
    );
}
