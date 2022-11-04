import React from "react";
import {
    Text,
    SafeAreaView,
    StatusBar,
    Image,
    ScrollView,
    View,
    TouchableOpacity,
    FlatList,
    ImageBackground,
} from "react-native";

import { COLORS, CONTAINER } from "../constants";
import { Header, Add, ApplePay, PayPal, EditBig, PlusBig } from "../components";

const CREDIT_CARDS = [
    {
        id: "1",
        number: "7741   6588   2123   6644",
        name: "Kristin Watson",
        expirationDate: "12/21",
        logo: require("../images/logos/visa.png"),
        background: require("../images/background/card-bg-1.png"),
    },
    {
        id: "2",
        number: "7741   6588   2123   6644",
        name: "Kristin Watson",
        expirationDate: "12/21",
        logo: require("../images/logos/visa.png"),
        background: require("../images/background/card-bg-2.png"),
    },
    {
        id: "3",
        number: "7741   6588   2123   6644",
        name: "Kristin Watson",
        expirationDate: "12/21",
        logo: require("../images/logos/visa.png"),
        background: require("../images/background/card-bg-3.png"),
    },
];

export default function PaymentMethod({ navigation }) {
    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="black-content" />
                <Header
                    onPress={() => navigation.goBack()}
                    title="Payment method"
                    arrow={true}
                />
            </View>
        );
    }

    function renderItem({ item, index }) {
        return (
            <TouchableOpacity style={{ marginLeft: 10 }} activeOpacity={1}>
                <ImageBackground
                    source={item.background}
                    style={{ width: 279, height: 170, padding: 20 }}
                    imageStyle={{ borderRadius: 10 }}
                >
                    <Image
                        source={item.logo}
                        style={{
                            width: 45,
                            height: 17,
                            resizeMode: "contain",
                            marginBottom: 27,
                        }}
                    />
                    <Text
                        style={{
                            fontFamily: "Mulish_400Regular",
                            fontSize: 16,
                            color: COLORS.white,
                            flex: 1,
                        }}
                    >
                        {item.number}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontFamily: "Mulish_600SemiBold",
                                fontSize: 11,
                                textTransform: "uppercase",
                            }}
                        >
                            {item.name}
                        </Text>
                        <Text
                            style={{
                                color: "white",
                                fontFamily: "Mulish_600SemiBold",
                                fontSize: 11,
                            }}
                        >
                            EXP.END {item.expirationDate}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }

    function renderContent() {
        return (
            <View>
                {/* Top Info */}
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 28,
                        marginVertical: 22,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Mulish_600SemiBold",
                            fontSize: 16,
                            textTransform: "capitalize",
                            color: COLORS.black,
                            lineHeight: 18,
                        }}
                    >
                        Credit cards
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("AddNewCard")}
                    >
                        <Add />
                    </TouchableOpacity>
                </View>
                {/* FlatList Slider */}
                <FlatList
                    data={CREDIT_CARDS}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    /* pagingEnabled={true} */
                />
                {/* Payment System */}
                <View style={{ paddingHorizontal: 28, marginTop: 30 }}>
                    {/* Apple */}
                    <TouchableOpacity
                        style={{
                            width: "100%",
                            height: 100,
                            paddingVertical: 25,
                            paddingHorizontal: 20,
                            backgroundColor: COLORS.white,
                            borderRadius: 5,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 10,
                        }}
                        activeOpacity={0.4}
                    >
                        <View>
                            <ApplePay />
                            <Text
                                style={{
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 14,
                                    lineHeight: 21,
                                    color: COLORS.gray,
                                    textTransform: "capitalize",
                                    marginTop: 6,
                                }}
                            >
                                Apple Pay
                            </Text>
                        </View>
                        <EditBig />
                    </TouchableOpacity>
                    {/* Apple */}
                    <TouchableOpacity
                        style={{
                            width: "100%",
                            height: 100,
                            paddingVertical: 25,
                            paddingHorizontal: 20,
                            backgroundColor: COLORS.white,
                            borderRadius: 5,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 10,
                        }}
                        activeOpacity={0.4}
                    >
                        <View>
                            <PayPal />
                            <Text
                                style={{
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 14,
                                    lineHeight: 21,
                                    color: COLORS.gray,
                                    textTransform: "capitalize",
                                    marginTop: 6,
                                }}
                            >
                                Apple Pay
                            </Text>
                        </View>
                        <PlusBig />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            {renderHeader()}
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderContent()}
            </ScrollView>
        </SafeAreaView>
    );
}
