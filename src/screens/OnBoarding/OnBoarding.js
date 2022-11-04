import React, { useState, useRef } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    StatusBar,
} from "react-native";

import { COLORS, SIZES, CONTAINER } from "../../constants";
import { Button, Skip, Back } from "../../components";

const SLIDES = [
    {
        id: "1",
        title: "Find nearby restaurant!",
        description:
            "Searching for the nearest restaurant ? we show you ones few kilometers away",
        img: require("../../images/onboarding/onboarding-4.png"),
    },
    {
        id: "2",
        title: "Easy Payment!",
        description:
            "With our multiple payment options you can never be stranded",
        img: require("../../images/onboarding/onboarding-1.png"),
    },
    {
        id: "3",
        title: "Fast Delivery!",
        description:
            "Get your food to your doorstep in less than 30 mins",
        img: require("../../images/onboarding/onboarding-2.png"),
    },
    {
        id: "34",
        title: "Get Fresh Foods!",
        description:
            "Your care about your health ? then you must not eat anywhere, All our vendors are verified",
        img: require("../../images/onboarding/onboarding-3.png"),
    },
];

export default function OnBoardin({ navigation }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef();

    function updateCurrentSlideIndex(e) {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / SIZES.width);
        setCurrentSlideIndex(currentIndex);
    }

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex !== SLIDES.length) {
            const offset = nextSlideIndex * SIZES.width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const goToPrevtSlide = () => {
        const nextSlideIndex = currentSlideIndex - 1;
        if (nextSlideIndex !== SLIDES.length) {
            const offset = nextSlideIndex * SIZES.width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex - 1);
        }
    };

    function renderDots() {
        return (
            <View>
                <View
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                    }}
                >
                    {SLIDES.map((_, index) => {
                        return (
                            <View
                                key={index}
                                style={[
                                    styles.dot,
                                    currentSlideIndex == index && {
                                        backgroundColor: "#FF7F56",
                                    },
                                ]}
                            />
                        );
                    })}
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            <StatusBar barStyle="Black-content" />
            {currentSlideIndex == 0 && (
                <TouchableOpacity
                    style={{
                        height: 50,
                        justifyContent: "center",
                        alignItems: "flex-end",
                        paddingHorizontal: 28,
                    }}
                    onPress={() => navigation.navigate("SignIn")}
                >
                    <Skip />
                </TouchableOpacity>
            )}

            {currentSlideIndex == SLIDES.length - 1 && (
                <TouchableOpacity
                    style={{
                        height: 50,
                        justifyContent: "center",
                        alignItems: "flex-start",
                        paddingHorizontal: 28,
                    }}
                    onPress={() => goToPrevtSlide()}
                >
                    <Back color="black" />
                </TouchableOpacity>
            )}

            {currentSlideIndex !== 0 &&
                currentSlideIndex !== SLIDES.length - 1 && (
                    <View
                        style={{
                            height: 50,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingHorizontal: 28,
                        }}
                    >
                        <TouchableOpacity onPress={() => goToPrevtSlide()}>
                            <Back color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SignIn")}
                        >
                            <Skip />
                        </TouchableOpacity>
                    </View>
                )}
            {/* Flat List */}
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={SLIDES}
                pagingEnabled
                renderItem={({ item }) => (
                    <View>
                        {/* Image */}
                        <View style={{ width: SIZES.width }}>
                            <Image
                                source={item?.img}
                                style={{
                                    height: 290,
                                    width: "100%",
                                    resizeMode: "contain",
                                }}
                            />
                        </View>
                        {/* Info */}
                        <View
                            style={{
                                width: SIZES.width,
                                alignItems: "center",
                                marginTop: 52,
                                marginBottom: 40,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Poppins_600SemiBold",
                                    fontSize: 22,
                                    marginBottom: 16,
                                    textTransform: "capitalize",
                                    color: COLORS.black,
                                }}
                            >
                                {item.title}
                            </Text>
                            <Text
                                style={{
                                    textAlign: "center",
                                    width: 320,
                                    fontFamily: "Mulish_400Regular",
                                    fontSize: 16,
                                    color: COLORS.gray,
                                    lineHeight: 24,
                                }}
                            >
                                {item.description}
                            </Text>
                        </View>
                        {renderDots()}
                    </View>
                )}
            />
            {/* Button */}
            <Button
                text="next"
                onPress={
                    currentSlideIndex == SLIDES.length - 1
                        ? () => navigation.navigate("SignIn")
                        : goToNextSlide
                }
                containerStyle={{
                    paddingHorizontal: 28,
                    paddingVertical: 20,
                    position: "absolute",
                    bottom: 0,
                    width: SIZES.width,
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    dot: {
        width: 10,
        height: 10,
        marginHorizontal: 5,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#FF7F56",
    },
});
