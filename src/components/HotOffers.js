import React from "react";
import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Image,
} from "react-native";

// CONSTANTS
import { OFFERS, CATEGORIES } from "../constants/dummyData";
import { COLORS } from "../constants/theme";

// COMPONENTS

export default function HotOffers({ onPress }) {
    function renderOfferItem({ item }) {
        return (
            <TouchableOpacity>
                <ImageBackground
                    style={{ width: 300, height: 161, marginRight: 16 }}
                    resizeMode="cover"
                    source={item.image}
                    imageStyle={{ borderRadius: 5 }}
                ></ImageBackground>
            </TouchableOpacity>
        );
    }

    return (
        <View
            style={
                {
                    /* paddingHorizontal: 28, */
                }
            }
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 14,
                    paddingHorizontal: 28,
                }}
            >
                <Text
                    style={{
                        color: COLORS.black,
                        fontFamily: "Poppins_600SemiBold",
                        fontSize: 22,
                        textTransform: "capitalize",
                    }}
                >
                    Hot offers
                </Text>
                <TouchableOpacity></TouchableOpacity>
            </View>
            {/* FlatList */}
            <View style={{ paddingLeft: 28 }}>
                <FlatList
                    horizontal
                    data={OFFERS}
                    renderItem={renderOfferItem}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
}
