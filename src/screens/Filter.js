import React, { useState } from "react";
import {
    ScrollView,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
} from "react-native";

const FILTER = [
    {
        id: "1",
        text: "Price low to high",
    },
    {
        id: "2",
        text: "Price high to low",
    },
    {
        id: "3",
        text: "Top rated",
    },
    {
        id: "4",
        text: "Nearest to me",
    },
    {
        id: "5",
        text: "Most popular",
    },
];

const CUISINES = [
    {
        id: "1",
        text: "Ukrainian",
    },
    {
        id: "2",
        text: "Italian",
    },
    {
        id: "3",
        text: "Georgian",
    },
    {
        id: "4",
        text: "American",
    },
    {
        id: "5",
        text: "Chines",
    },
    {
        id: "6",
        text: "Thai",
    },
    {
        id: "7",
        text: "Asian",
    },
    {
        id: "8",
        text: "Japanese",
    },
];

import { Header, Button, Check, Selected } from "../components";
import { COLORS, CONTAINER, FONTS } from "../constants";

export default function FilterScreen({ navigation }) {
    const [selected, setSelected] = useState(3);
    const [selectedCuisines, setSelectedCuisines] = useState(0);

    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="black-content" />
                <Header
                    title="Filter"
                    onPress={() => navigation.goBack()}
                    arrow={true}
                />
            </View>
        );
    }

    function renderContent() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginHorizontal: 28,
                }}
            >
                {/* Text */}
                <Text
                    style={{
                        ...FONTS.H5,
                        textTransform: "capitalize",
                        marginVertical: 7,
                        color: COLORS.black,
                    }}
                >
                    sort by
                </Text>
                {/* Filter */}
                {FILTER.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                paddingVertical: 15,
                                borderBottomColor: COLORS.lightGrey,
                                borderBottomWidth: 1,
                            }}
                            activeOpacity={0.3}
                            onPress={() => {
                                setSelected(index);
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Mulish_600SemiBold",
                                        fontSize: 14,
                                        color: COLORS.gray,
                                    }}
                                >
                                    {item.text}
                                </Text>

                                {selected == index ? <Check /> : <></>}
                            </View>
                        </TouchableOpacity>
                    );
                })}
                {/* Cuisines */}
                <Text
                    style={{
                        fontFamily: "Mulish_600SemiBold",
                        fontSize: 16,
                        textTransform: "capitalize",
                        marginBottom: 22,
                        color: COLORS.black,
                        marginTop: 40,
                    }}
                >
                    Cuisines
                </Text>
                {/* Category */}
                <View
                    style={{
                        /* height: 30, */
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginBottom: 30,
                    }}
                >
                    {CUISINES.map((item, index) => (
                        <View
                            key={item.id}
                            style={{
                                width: "50%",
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingVertical: 7.5,
                                }}
                                activeOpacity={0.3}
                                onPress={() => {
                                    setSelectedCuisines(index);
                                }}
                            >
                                <View
                                    style={{
                                        height: 24,
                                        width: 24,
                                        backgroundColor:
                                            selectedCuisines == index
                                                ? COLORS.orange
                                                : COLORS.white,
                                        borderRadius: 5,
                                        marginRight: 8,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {selectedCuisines == index && (
                                        <View style={{ right: -1 }}>
                                            <Selected />
                                        </View>
                                    )}
                                </View>
                                <Text
                                    style={{
                                        fontFamily: "Mulish_600SemiBold",
                                        fontSize: 14,
                                        color: COLORS.gray,
                                    }}
                                >
                                    {item.text}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
        );
    }

    function renderButton() {
        return (
            <Button
                containerStyle={{
                    paddingHorizontal: 28,
                    paddingVertical: 16,
                }}
                text="apply"
                onPress={() => navigation.goBack()}
            />
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            {renderHeader()}
            {renderContent()}
            {renderButton()}
        </SafeAreaView>
    );
}
