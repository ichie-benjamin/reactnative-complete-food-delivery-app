import React, { useState } from "react";
import {
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Image,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { COLORS } from "../constants/theme";
import Svg, { G, Path } from "react-native-svg";

import OrderInfo from "../components/OrderInfo";

import OrderCounter from "./OrderCounter";

export default function App() {
    /* Trash */
    const Trash = () => (
        <Svg
            width={30}
            height={30}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <G
                opacity={0.87}
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M3.75 7.5h22.5M10 7.5V5a2.5 2.5 0 0 1 2.5-2.5h5A2.5 2.5 0 0 1 20 5v2.5m3.75 0V25a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5V7.5h17.5ZM12.5 13.75v7.5M17.5 13.75v7.5" />
            </G>
        </Svg>
    );

    /* Basic */
    function Swiper() {
        const DATA = [
            {
                id: "1",
                text: "Item 1",
            },
            {
                id: "2",
                text: "Item 2",
            },
            {
                id: "3",
                text: "Item 3",
            },
            {
                id: "4",
                text: "Item 3",
            },
            {
                id: "5",
                text: "Item 1",
            },
            {
                id: "6",
                text: "Item 2",
            },
            {
                id: "7",
                text: "Item 3",
            },
            {
                id: "8",
                text: "Item 3",
            },
        ];

        const [listData, setListData] = useState(DATA);

        const closeRow = (rowMap, rowKey) => {
            if (rowMap[rowKey]) {
                rowMap[rowKey].closeRow();
            }
        };

        const deleteRow = (rowMap, rowKey) => {
            closeRow(rowMap, rowKey);
            const newData = [...listData];
            const prevIndex = listData.findIndex((item) => item.key === rowKey);
            newData.splice(prevIndex, 1);
            setListData(newData);
        };

        const onRowDidOpen = (rowKey) => {
            console.log("This row opened", rowKey);
        };

        const renderItem = (data) => (
            <View style={{ marginHorizontal: 28 }}>
                <TouchableHighlight
                    style={{
                        backgroundColor: "white",
                        height: 81,
                        marginBottom: 10,
                        borderRadius: 5,
                    }}
                    underlayColor={"#fff"}
                >
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        {/* Image */}
                        {/* <Image
                            source={require("../images/image-8.png")}
                            style={{
                                width: 73,
                                height: 81,
                                borderTopLeftRadius: 5,
                                borderBottomLeftRadius: 5,
                                marginRight: 14,
                            }}
                        /> */}
                        {/* Text Block */}
                        <View>
                            <Text
                                style={{
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 16,
                                    textTransform: "capitalize",
                                    marginBottom: 15,
                                }}
                            >
                                Caramel cake with beries
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Mulish_600SemiBold",
                                    fontSize: 14,
                                    color: COLORS.gray,
                                }}
                            >
                                $33.9
                            </Text>
                        </View>
                        {/* Counter */}
                        <View
                            style={{
                                position: "absolute",
                                right: 6,
                                bottom: 6,
                            }}
                        >
                            <OrderCounter />
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );

        const renderHiddenItem = (data, rowMap) => (
            <View
                style={{
                    alignItems: "center",
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    paddingLeft: 15,
                    marginHorizontal: 28,
                }}
            >
                <TouchableOpacity
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        right: 0,
                        width: "100%",
                        backgroundColor: "#FF7F56",
                        width: 81,
                        height: 81,
                        borderRadius: 5,
                    }}
                    onPress={() => deleteRow(rowMap, data.item.key)}
                >
                    <View>
                        <Trash />
                    </View>
                </TouchableOpacity>
            </View>
        );

        const headerComponent = () => <OrderRestaurant />;
        const footerComponent = () => <OrderInfo />;

        return (
            <View
                style={{
                    flex: 1,
                }}
            >
                <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-75}
                    previewRowKey={"0"}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onRowDidOpen={onRowDidOpen}
                    ListHeaderComponent={headerComponent}
                    ListFooterComponent={footerComponent}
                />
            </View>
        );
    }

    return <View style={{ flex: 1 }}>{Swiper()}</View>;
}
