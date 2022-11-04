import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

// CONSTANTS
import { CATEGORIES } from "../constants/dummyData";

export default function SearchSorting() {
    return (
        <View style={{ paddingLeft: 28 }}>
            <FlatList
                data={CATEGORIES}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View key={item.id}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: 5,
                                marginRight: 8,
                            }}
                        >
                            <Text
                                style={{
                                    paddingHorizontal: 20,
                                    paddingVertical: 7,
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 14,
                                    color: "#7D849A",
                                }}
                            >
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}
