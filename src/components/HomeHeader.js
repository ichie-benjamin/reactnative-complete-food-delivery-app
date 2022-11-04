import React, { useState } from "react";
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Image,
} from "react-native";

// CONSTANTS
import { OFFERS, CATEGORIES } from "../constants";
import { COLORS } from "../constants";

export default function HomeHeader() {
    const [categoryColor, setCategoryColor] = useState(1);

    return (
        <ImageBackground
            style={{
                width: "100%",
                height: 180,
                backgroundColor: COLORS.lightBlue,
                marginBottom: 103,
            }}
            resizeMode="cover"
        >
            <View
                style={{
                    paddingHorizontal: 28,
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                {/* PERSON INFO */}
                <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                >
                    {/* <Image
                        source={require("../images/author.png")}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            marginRight: 10,
                        }}
                    /> */}
                    <View>
                        <Text
                            style={{
                                fontFamily: "Mulish_600SemiBold",
                                fontSize: 16,
                                color: "#FFFFFF",
                                paddingVertical: 2,
                            }}
                        >
                            deliver to:
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 16,
                                    color: "#FFFFFF",
                                    paddingVertical: 2,
                                    paddingRight: 10,
                                }}
                            >
                                8000 S Kirkland Ave
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* CATEGORIES */}
                <View
                    style={{
                        position: "absolute",
                        paddingLeft: 28,
                        left: 0,
                        right: 0,
                        bottom: -60,
                    }}
                >
                    <FlatList
                        data={CATEGORIES}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                key={item.id}
                                style={{
                                    paddingRight: 10,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.04,
                                    shadowRadius: 6,

                                    elevation: 9,
                                }}
                                activeOpacity="0.8"
                                /* onPress={() => {
                                    setCategoryColor(item.id);
                                }} */
                            >
                                <View
                                    style={{
                                        width: 73,
                                        height: 73,
                                        backgroundColor: "white",
                                        borderRadius: 5,
                                        marginBottom: 8,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: 40,
                                            height: 40,
                                            tintColor:
                                                categoryColor == 1
                                                    ? "red"
                                                    : "black",
                                        }}
                                        source={item.image}
                                    />
                                </View>
                                <Text
                                    style={{
                                        textAlign: "center",
                                        fontFamily: "Mulish_600SemiBold",
                                        fontSize: 14,
                                        color: "#7D849A",
                                    }}
                                >
                                    {item.text}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                {/* <ActivityIndicator color="white" /> */}
            </View>
        </ImageBackground>
    );
}
