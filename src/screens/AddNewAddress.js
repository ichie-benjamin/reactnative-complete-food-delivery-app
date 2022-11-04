import React, { useRef, useEffect, useState } from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    StatusBar,
    KeyboardAvoidingView,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Shadow } from "react-native-shadow-2";

const destination = { latitude: 37.771707, longitude: -122.4053769 };
const GOOGLE_MAPS_APIKEY = "AIzaSyDaG8heb2urT4EICboyOWL_2dcwSOq9ubI";

import { COLORS, LINE, SIZES, SHADOW_PRESET } from "../constants";
import { Back, Call, Button, Select, InputField } from "../components";

export default function AddNewAddress({ navigation }) {
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
                <StatusBar barStyle="black-content" />
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
                <KeyboardAvoidingView
                    // behavior={Platform.OS === "ios" ? "padding" : "height"}
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    // style={{ flex: 1 }}
                >
                    <View
                        style={{
                            width: SIZES.width,
                        }}
                    >
                        <ScrollView
                            style={{
                                backgroundColor: COLORS.lightBlue,
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
                                Add new address
                            </Text>
                            <InputField heading="title" placeholder="My mom" />
                            <InputField
                                heading="new address"
                                placeholder="3646 S 58th Ave, Cicero, IL 60804, USA"
                            />
                            {/* Use current location */}
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                                activeOpacity={0.5}
                            >
                                <Select isSelect={true} />
                                <Text
                                    style={{
                                        paddingLeft: 10,
                                        fontFamily: "Mulish_600SemiBold",
                                        fontSize: 14,
                                        color: COLORS.gray,
                                    }}
                                >
                                    Use current location
                                </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </Shadow>
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
                text="save"
                onPress={() => navigation.navigate("MyAddress")}
            />
        );
    }

    return (
        <View style={{ flex: 1 }}>
            {renderNavigation()}
            {renderMap()}
            {renderContent()}
            {renderButton()}
        </View>
    );
}
