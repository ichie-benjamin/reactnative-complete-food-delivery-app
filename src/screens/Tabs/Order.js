import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import {
    Counter,
    Button,
    Header,
    Basket,
    Star,
    PromocodeApplied,
    Arrow,
    OrderPin,
    CartIsEmpty,
    ApplyPromocode,
    Line,
} from "../../components";
import { COLORS, FONTS, CONTAINER, LINE } from "../../constants";

const ORDER = [
    {
        id: "1",
        name: "croissant cafe",
        type: "Bakery",
        rating: "5.0 -",
        distance: "0.2 km",
        image: require("../../images/restaurants/06.jpg"),
        dishes: [
            {
                id: "1",
                name: "Caramel cake with beries",
                price: "$18.35",
                image: require("../../images/dishes/11.jpg"),
                qty: 1,
            },
            {
                id: "2",
                name: "Cheesecake with chocol...",
                price: "$18.35",
                image: require("../../images/dishes/12.jpg"),
                qty: 1,
            },
            {
                id: "3",
                name: "Chocolate cake with ch...",
                price: "$18.35",
                image: require("../../images/dishes/13.jpg"),
                qty: 1,
            },
        ],
        subtotal: "$76",
        discount: "15",
        delivery: "Free",
        total: "76",
    },
];

export default function Order({ navigation }) {
    const [myCartList, setMyCartList] = useState(ORDER[0].dishes);
    const [promocode, setPromocode] = useState(false);

    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="black-content" />
                <Header
                    arrow={true}
                    title="My order"
                    onPress={() => navigation.goBack()}
                />
            </View>
        );
    }

    function renderContent() {
        function HeaderComponent() {
            return (
                <View>
                    {ORDER.map((item) => {
                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={{
                                    height: 83,
                                    paddingBottom: 10,
                                    flexDirection: "row",
                                    marginBottom: 20,
                                    marginTop: 10,
                                    borderBottomWidth: 1,
                                    borderBottomColor: COLORS.lightGrey,
                                    alignItems: "center",
                                }}
                                activeOpacity={0.5}
                                onPress={() =>
                                    navigation.navigate("RestaurantMenu")
                                }
                            >
                                {/* Image */}
                                <Image
                                    source={item.image}
                                    style={{
                                        width: 73,
                                        height: 73,
                                        borderRadius: 5,
                                    }}
                                />
                                {/* Info */}
                                <View style={{ paddingLeft: 16, flex: 1 }}>
                                    <Text
                                        style={{
                                            ...FONTS.H4,
                                            textTransform: "capitalize",
                                            color: COLORS.black,
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={{
                                            fontFamily: "Mulish_600SemiBold",
                                            fontSize: 14,
                                            color: COLORS.gray,
                                            marginBottom: 5,
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
                                        <Text
                                            style={{
                                                paddingLeft: 5,
                                                paddingRight: 6,
                                                fontFamily: "Mulish_400Regular",
                                                fontSize: 14,
                                                color: COLORS.black,
                                            }}
                                        >
                                            {item.rating}
                                        </Text>
                                        <OrderPin strokeColor={COLORS.black} />
                                        <Text
                                            style={{
                                                paddingLeft: 5,
                                                paddingRight: 6,
                                                fontFamily: "Mulish_400Regular",
                                                fontSize: 14,
                                                color: COLORS.black,
                                            }}
                                        >
                                            {item.distance} - $$
                                        </Text>
                                    </View>
                                </View>
                                <Arrow
                                    fillColor={COLORS.gray}
                                    strokeColor={COLORS.gray}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            );
        }

        function FooterComponent() {
            return (
                <View style={{ paddingTop: 10 }}>
                    {ORDER.map((item) => {
                        return (
                            <View key={item.id}>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={{ marginBottom: 30 }}
                                    onPress={() => setPromocode(true)}
                                >
                                    {promocode ? (
                                        <PromocodeApplied />
                                    ) : (
                                        <ApplyPromocode />
                                    )}
                                </TouchableOpacity>
                                <View>
                                    {/* Subtotal */}
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...FONTS.H4,
                                                marginBottom: 10,
                                                color: COLORS.black,
                                            }}
                                        >
                                            Subtotal
                                        </Text>
                                        <Text
                                            style={{
                                                ...FONTS.H4,
                                                marginBottom: 10,
                                                color: COLORS.black,
                                            }}
                                        >
                                            {item.subtotal}
                                        </Text>
                                    </View>
                                    {/* Discount */}
                                    {promocode && (
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                marginBottom: 9,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontFamily:
                                                        "Mulish_600SemiBold",
                                                    color: COLORS.gray,
                                                }}
                                            >
                                                Discount
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily:
                                                        "Mulish_600SemiBold",
                                                    color: COLORS.gray,
                                                }}
                                            >
                                                -{item.discount}
                                            </Text>
                                        </View>
                                    )}

                                    {/* Delivery */}
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            marginBottom: 8,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                color: COLORS.gray,
                                            }}
                                        >
                                            Delivery
                                        </Text>
                                        <Text
                                            style={{
                                                color: COLORS.green,
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                            }}
                                        >
                                            {item.delivery}
                                        </Text>
                                    </View>
                                    <Line />
                                    {/* Total */}
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            marginTop: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...FONTS.H2,
                                                marginBottom: 10,
                                                color: COLORS.black,
                                            }}
                                        >
                                            Total
                                        </Text>
                                        <Text
                                            style={{
                                                ...FONTS.H2,
                                                marginBottom: 10,
                                                color: COLORS.black,
                                            }}
                                        >
                                            $
                                            {promocode
                                                ? Math.round(item.total) -
                                                  Math.round(item.discount)
                                                : item.total}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>
            );
        }

        function updateQuantityHandler(newQty, id) {
            const newMyCartList = myCartList.map((cl) =>
                cl.id === id ? { ...cl, qty: newQty } : cl
            );

            setMyCartList(newMyCartList);
        }

        function ItemComponent({ data }) {
            return (
                <View
                    style={{
                        backgroundColor: COLORS.white,
                        height: 81,
                        borderRadius: 5,
                        flexDirection: "row",
                        marginBottom: 10,
                    }}
                >
                    <Image
                        source={data.item.image}
                        style={{
                            width: 73,
                            height: 81,
                            borderTopLeftRadius: 5,
                            borderBottomLeftRadius: 5,
                        }}
                    />
                    <View
                        style={{
                            paddingHorizontal: 14,
                            paddingTop: 12,
                            paddingBottom: 13.5,
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.H5,
                                color: COLORS.black,
                                textTransform: "capitalize",
                            }}
                        >
                            {data.item.name}
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Mulish_600SemiBold",
                                color: COLORS.gray,
                            }}
                        >
                            {data.item.price}
                        </Text>
                    </View>
                    {/* Counter */}
                    <Counter
                        value={data.item.qty}
                        onAdd={() =>
                            updateQuantityHandler(
                                data.item.qty + 1,
                                data.item.id
                            )
                        }
                        onMinus={() => {
                            if (data.item.qty > 1) {
                                updateQuantityHandler(
                                    data.item.qty - 1,
                                    data.item.id
                                );
                            }
                        }}
                        containerStyle={{
                            position: "absolute",
                            right: 6,
                            bottom: 6,
                        }}
                    />
                </View>
            );
        }

        function removeMyCartHandler(id) {
            let newMyCartList = [...myCartList];
            const index = newMyCartList.findIndex((cart) => cart.id === id);
            newMyCartList.splice(index, 1);
            setMyCartList(newMyCartList);
        }

        function HiddenComponent({ data }) {
            return (
                <TouchableOpacity
                    style={{
                        width: 81,
                        height: 81,
                        backgroundColor: COLORS.orange,
                        borderRadius: 5,
                        alignSelf: "flex-end",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onPress={() => removeMyCartHandler(data.item.id)}
                >
                    <Basket />
                </TouchableOpacity>
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
                    text="checkout"
                    onPress={() => navigation.navigate("Checkout")}
                />
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <SwipeListView
                    data={myCartList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={(data) => <ItemComponent data={data} />}
                    renderHiddenItem={(data) => <HiddenComponent data={data} />}
                    rightOpenValue={-75}
                    ListHeaderComponent={<HeaderComponent />}
                    ListFooterComponent={<FooterComponent />}
                    contentContainerStyle={{
                        paddingBottom: 40,
                        paddingHorizontal: 28,
                    }}
                    showsVerticalScrollIndicator={false}
                    disableRightSwipe={true}
                />
                {renderButton()}
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            {renderHeader()}
            {myCartList.length > 0 ? renderContent() : <CartIsEmpty />}
        </SafeAreaView>
    );
}
