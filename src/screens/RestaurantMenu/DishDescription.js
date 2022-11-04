import React, { useState, useRef, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";

import { Button, Counter, Back } from "../../components";
import { COLORS, SIZES, LINE, SLIDE } from "../../constants";

export default function DishDescription({ navigation }) {
    const [dishQuantity, setDishQuantity] = useState(1);

    useEffect(() => {
        const itemMinus = () => {
            dishQuantity > 1
                ? () => setDishQuantity(dishQuantity - 1)
                : () => {};
        };

        itemMinus();
    }, [dishQuantity]);

    function renderContent() {
        return (
            <View
                style={{
                    width: SIZES.width,
                    backgroundColor: COLORS.white,
                    paddingHorizontal: 28,
                    paddingTop: 30,
                }}
            >
                {renderDots()}
                {/* Name */}
                <Text
                    style={{
                        fontFamily: "Poppins_500Medium",
                        fontSize: 18,
                        textTransform: "capitalize",
                        lineHeight: 24,
                        marginBottom: 8,
                    }}
                >
                    Caramel Ice-cream with beries
                </Text>
                {/* Description */}
                <Text
                    style={{
                        fontFamily: "Mulish_400Regular",
                        color: COLORS.gray,
                        fontSize: 16,
                        lineHeight: 24,
                        marginBottom: 14,
                    }}
                >
                    Qui ex aute ipsum duis. Incididunt adipisicing voluptate
                    laborum
                </Text>
                {/* Price */}
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 18,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "flex-end",
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.carrot,
                                fontFamily: "Mulish_400Regular",
                                fontSize: 20,
                                marginRight: 10,
                            }}
                        >
                            $9.95
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Mulish_600SemiBold",
                                fontSize: 14,
                                color: COLORS.gray,
                            }}
                        >
                            350g
                        </Text>
                    </View>
                    {/* Counter */}
                    <Counter
                        onMinus={() => setDishQuantity(dishQuantity - 1)}
                        onAdd={() => setDishQuantity(dishQuantity + 1)}
                        value={dishQuantity}
                    />
                </View>
            </View>
        );
    }

    function renderSlider() {
        return (
            <View
                style={{
                    width: SIZES.width,
                }}
            >
                <Image
                    style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "cover",
                    }}
                    source={{ uri: "https://via.placeholder.com/375x552" }}
                />
            </View>
        );
    }

    function renderNav() {
        return (
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    position: "absolute",
                    paddingTop: 40,
                    padding: 28,
                }}
            >
                <Back color={COLORS.black} />
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
                text="add to cart"
                onPress={() => console.log("Add to Cart")}
                quantity={3}
                price={76}
            />
        );
    }

    return (
        <View style={{ flex: 1 }}>
            {renderSlider()}
            {renderNav()}
            {renderContent()}
            {renderButton()}
        </View>
    );
}

const styles = StyleSheet.create({
    dot: {
        width: 10,
        height: 10,
        marginHorizontal: 5,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#FFFFFF",
    },
});
