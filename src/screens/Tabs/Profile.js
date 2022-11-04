import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    ScrollView,
    StatusBar,
} from "react-native";
import { Shadow } from "react-native-shadow-2";

import { useNavigation } from "@react-navigation/native";

import {
    COLORS,
    width,
    SIZES,
    SHADOW_PRESET,
    CONTAINER,
} from "../../constants";
import {
    ProfileCategory,
    Gift,
    Calendar,
    CreditCard,
    PinBig,
    Heart,
    LogOut,
    Edit,
} from "../../components";

export default function Profile() {
    const navigation = useNavigation();

    function profileHeader() {
        return (
            <ImageBackground
                source={require("../../images/background/home-bg.jpg")}
                style={{
                    width: width,
                    height: 180,
                    width: "100%",
                    zIndex: 2,
                }}
                resizeMode="cover"
            >
                {/* Text */}
                <View
                    style={{
                        position: "absolute",
                        bottom: 85,
                        paddingHorizontal: 28,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Poppins_600SemiBold",
                            fontSize: 22,
                            textTransform: "capitalize",
                            color: "white",
                            marginTop: 72,
                        }}
                    >
                        My profile
                    </Text>
                </View>
                {/* Person Info */}
                <View
                    style={{
                        paddingHorizontal: 28,
                        position: "absolute",
                        bottom: -51,
                        width: "100%",
                    }}
                >
                    {/* Block */}
                    <Shadow {...SHADOW_PRESET.shadow}>
                        <View
                            style={{
                                width: SIZES.width - 56,
                                height: 102,
                                backgroundColor: "white",
                                borderRadius: 5,
                                padding: 16,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    alignItems: "center",
                                    flexDirection: "row",
                                }}
                                onPress={() =>
                                    navigation.navigate("EditProfile")
                                }
                                activeOpacity={0.5}
                            >
                                <Image
                                    source={require("../../images/icons/photo.png")}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 35,
                                        marginRight: 16,
                                    }}
                                />
                                <View>
                                    {/* Name */}
                                    <Text
                                        style={{
                                            fontFamily: "Poppins_500Medium",
                                            fontSize: 18,
                                            textTransform: "capitalize",
                                            color: COLORS.black,
                                            marginBottom: 2,
                                            color: COLORS.black,
                                        }}
                                    >
                                        Kristin Watson
                                    </Text>
                                    {/* Email */}
                                    <Text
                                        style={{
                                            color: COLORS.gray,
                                            fontSize: 14,
                                            lineHeight: 21,
                                        }}
                                    >
                                        kristinwatson@mail.com
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        position: "absolute",
                                        right: 0,
                                        top: 0,
                                    }}
                                >
                                    {/* <Edit /> */}
                                </View>
                                <Edit
                                    containerStyle={{
                                        position: "absolute",
                                        right: 0,
                                        top: 0,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Shadow>
                </View>
            </ImageBackground>
        );
    }

    function categoryList() {
        return (
            <View
                style={{
                    paddingTop: 61,
                    paddingBottom: 30,
                    backgroundColor: COLORS.lightBlue,
                }}
            >
                <ProfileCategory
                    itemArrow={true}
                    text="Order History"
                    icon={<Calendar />}
                    onPress={() => navigation.navigate("OrderHistory")}
                />
                <ProfileCategory
                    itemArrow={true}
                    text="Payment Method"
                    icon={<CreditCard />}
                    onPress={() => navigation.navigate("PaymentMethod")}
                />
                <ProfileCategory
                    itemArrow={true}
                    text="My Address"
                    icon={<PinBig strokeColor={COLORS.gray} />}
                    onPress={() => navigation.navigate("MyAddress")}
                />
                <ProfileCategory
                    itemArrow={true}
                    text="My Promocodes"
                    icon={<Gift />}
                    onPress={() => navigation.navigate("MyPromoCodes")}
                />
                <ProfileCategory
                    itemArrow={true}
                    text="My Favorite"
                    icon={<Heart strokeColor={COLORS.gray} />}
                    onPress={() => navigation.navigate("MyFavorite")}
                />
                <ProfileCategory
                    itemArrow={true}
                    text="Sign out"
                    icon={<LogOut />}
                    onPress={() => navigation.navigate("SignIn")}
                />
            </View>
        );
    }

    return (
        <ScrollView
            style={{ ...CONTAINER.container }}
            showsVerticalScrollIndicator={false}
        >
            <StatusBar barStyle="light-content" />
            {profileHeader()}
            {categoryList()}
        </ScrollView>
    );
}
