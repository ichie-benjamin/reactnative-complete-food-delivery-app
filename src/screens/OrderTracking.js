import React, { useRef, useEffect, useState } from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Shadow } from "react-native-shadow-2";

const destination = { latitude: 37.771707, longitude: -122.4053769 };
const GOOGLE_MAPS_APIKEY = "AIzaSyDaG8heb2urT4EICboyOWL_2dcwSOq9ubI";

import { COLORS, SIZES } from "../constants";
import { Back, Call } from "../components";

export default function OrderTracking({ navigation }) {
    const mapView = useRef();
    const initialRegion = {
        latitude: 25.237604,
        longitude: 55.35744,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
    const origin = { latitude: 25.28106, longitude: 55.38622 };
    const destination = { latitude: 25.293511, longitude: 55.40052 };

    function renderNavigation() {
        return (
            <SafeAreaView style={{ position: "absolute", zIndex: 1 }}>
                <TouchableOpacity
                    style={{ padding: 28 }}
                    onPress={() => navigation.goBack()}
                >
                    <Back color={COLORS.gray} />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    function renderMap() {
        return (
            <MapView
                ref={mapView}
                style={{ flex: 1 }}
                initialRegion={initialRegion}
                provider={PROVIDER_GOOGLE}
            >
                {/* Marker 1 */}
                <Marker
                    coordinate={origin}
                    icon={require("../images/icons/point-1.png")}
                    tracksViewChanges={false}
                />
                {/* Marker 2 */}
                <Marker
                    coordinate={destination}
                    icon={require("../images/icons/point-1.png")}
                    tracksViewChanges={false}
                />
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    lineDashPattern={[50, 50]}
                    strokeColor="hotpink"
                />
            </MapView>
        );
    }

    function renderContent() {
        return (
            <Shadow
                offset={[0, 0]}
                distance={15}
                startColor={"rgba(6, 38, 100, 0.06)"}
                finalColor={"rgba(6, 38, 100, 0.0)"}
            >
                <View
                    style={{
                        width: SIZES.width,
                    }}
                >
                    <ScrollView style={{ backgroundColor: COLORS.lightBlue }}>
                        <View
                            style={{
                                paddingVertical: 30,
                                paddingHorizontal: 28,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Poppins_600SemiBold",
                                    textTransform: "capitalize",
                                    fontSize: 20,
                                    marginBottom: 21,
                                }}
                            >
                                Order tracking
                            </Text>
                            {/* Courier */}
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    paddingBottom: 10,
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#E2E2E2",
                                    marginBottom: 30,
                                }}
                            >
                                {/* Courier Info */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        source={require("../images/icons/photo.png")}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 20,
                                            marginRight: 10,
                                        }}
                                    />
                                    <View>
                                        <Text
                                            style={{
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                fontSize: 16,
                                                color: COLORS.black,
                                                marginBottom: 4,
                                            }}
                                        >
                                            Ralph Edwards
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: "Mulish_400Regular",
                                                fontSize: 16,
                                                color: COLORS.gray,
                                            }}
                                        >
                                            Сourier
                                        </Text>
                                    </View>
                                </View>
                                {/* Call Icon */}
                                <TouchableOpacity>
                                    <Call />
                                </TouchableOpacity>
                            </View>
                            {/* Text */}
                            <View style={{ flexDirection: "row" }}>
                                <View
                                    style={{ marginRight: 9, marginTop: 3.5 }}
                                >
                                    {/* <Status /> */}
                                </View>
                                <View>
                                    {/* Info */}
                                    <View style={{ marginBottom: 16 }}>
                                        <Text
                                            style={{
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                fontSize: 16,
                                                textTransform: "capitalize",
                                                marginBottom: 4,
                                                color: COLORS.black,
                                            }}
                                        >
                                            Croissant cafe
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                fontSize: 14,
                                                textTransform: "capitalize",
                                                marginBottom: 4,
                                                color: COLORS.gray,
                                            }}
                                        >
                                            8101 S Kenneth Ave, Chicago, IL
                                            60652, USA
                                        </Text>
                                    </View>
                                    {/* Info */}
                                    <View style={{ marginBottom: 16 }}>
                                        <Text
                                            style={{
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                fontSize: 16,
                                                textTransform: "capitalize",
                                                marginBottom: 4,
                                                color: COLORS.black,
                                            }}
                                        >
                                            Courier
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                fontSize: 14,
                                                textTransform: "capitalize",
                                                marginBottom: 4,
                                                color: COLORS.gray,
                                            }}
                                        >
                                            Delivering
                                        </Text>
                                    </View>
                                    {/* Info */}
                                    <View style={{ marginBottom: 16 }}>
                                        <Text
                                            style={{
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                fontSize: 16,
                                                textTransform: "capitalize",
                                                marginBottom: 4,
                                                color: COLORS.black,
                                            }}
                                        >
                                            Home
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                fontSize: 14,
                                                textTransform: "capitalize",
                                                marginBottom: 4,
                                                color: COLORS.gray,
                                            }}
                                        >
                                            8000 S Kirkland Ave, Chicago, IL
                                            60652, USA
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Shadow>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            {renderNavigation()}
            {renderMap()}
            {renderContent()}
        </View>
    );
}
