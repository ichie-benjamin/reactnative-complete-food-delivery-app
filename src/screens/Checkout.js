import React, { useState, useEffect, useRef } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
    Button,
    Header,
    Category,
    Clipboard,
    PinBig,
    CreditCard,
    Line,
    Close,
    ApplePay,
    PayPal,
    Select,
} from "../components";
import { CONTAINER, COLORS, LINE, SIZES, FONTS } from "../constants";

const PAYMENT = [
    {
        id: "1",
        logo: <ApplePay />,
        pay: "Aple Pay",
    },
    {
        id: "2",
        logo: <PayPal />,
        pay: "Pay Pal",
    },
];

const CREDIT_CARDS = [
    {
        id: "1",
        number: "7741 ******** 6644",
    },
    {
        id: "2",
        number: "7632 ******** 6754",
    },
];

const ADDRESS = [
    {
        id: "1",
        name: "Home",
        description: "8000 S Kirkland Ave, Chicago, IL 606...",
    },
    {
        id: "2",
        name: "work",
        description: "6391 Elgin St. Celina, Delaware 10299",
    },
    {
        id: "3",
        name: "other",
        description: "3891 Ranchview Dr. Richardson, Califo...",
    },
    {
        id: "4",
        name: "Current location",
        description: "8000 S Kirkland Ave, Chicago, IL 606...",
    },
];

export default function Checkout({ navigation }) {
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    function renderHeader() {
        return (
            <View>
                <Header
                    title="Checkout"
                    arrow={true}
                    onPress={() => navigation.goBack()}
                />
                <Line containerStyle={{ marginTop: 10 }} />
            </View>
        );
    }

    function renderContent() {
        return (
            <ScrollView contentContainerStyle={{ paddingHorizontal: 28 }}>
                <KeyboardAwareScrollView>
                    <Category
                        title="My order"
                        description={"Croissant cafe"}
                        icon={<Clipboard />}
                        price={"60.95"}
                    />
                    <Category
                        title="Delivery address"
                        description={"8000 S Kirkland Ave, Chicago, IL 6065..."}
                        icon={<PinBig strokeColor={COLORS.gray} />}
                        onPress={() => setShowAddressModal(true)}
                    />
                    <Category
                        title="Payment method"
                        description={"7741 ******** 6644"}
                        icon={<CreditCard />}
                        onPress={() => setShowPaymentModal(true)}
                    />
                    <Text
                        style={{
                            marginTop: 30,
                            fontFamily: "Mulish_600SemiBold",
                            textTransform: "uppercase",
                            color: COLORS.gray,
                            marginBottom: 10,
                        }}
                    >
                        comment
                    </Text>
                    <View
                        style={{
                            borderBottomColor: COLORS.lightGrey,
                            borderBottomWidth: 1,
                            height: 80,
                        }}
                    >
                        <TextInput
                            style={{ flex: 1, paddingBottom: 20 }}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </ScrollView>
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
                text="send order"
                onPress={() => navigation.navigate("OrderSuccess")}
            />
        );
    }

    function addressModal() {
        const [selectAddress, setSelectAddress] = useState(0);

        return (
            <Modal
                isVisible={showAddressModal}
                onBackdropPress={() => setShowAddressModal(false)}
                hideModalContentWhileAnimating={true}
                backdropTransitionOutTiming={0}
                style={{ margin: 0 }}
            >
                <View
                    style={{
                        backgroundColor: COLORS.lightBlue,
                        position: "absolute",
                        width: SIZES.width,
                        bottom: 0,
                        paddingHorizontal: 28,
                        paddingVertical: 40,
                    }}
                >
                    <ScrollView>
                        {/* Choose delivery address */}
                        <Text
                            style={{
                                fontFamily: "Poppins_600SemiBold",
                                fontSize: 20,
                                textTransform: "capitalize",
                                paddingBottom: 20,
                                color: COLORS.black,
                            }}
                        >
                            Choose delivery address
                        </Text>
                        {ADDRESS.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={{
                                        marginBottom: 20,
                                        borderBottomColor: COLORS.lightGrey,
                                        borderBottomWidth: 1,
                                    }}
                                    activeOpacity={0.5}
                                    onPress={() => setSelectAddress(index)}
                                >
                                    <Text
                                        style={{
                                            marginBottom: 4,
                                            ...FONTS.H5,
                                            color: COLORS.black,
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={{
                                            marginBottom: 10,
                                            fontFamily: "Mulish_600SemiBold",
                                            fontSize: 14,
                                            color: COLORS.gray,
                                        }}
                                    >
                                        {item.description}
                                    </Text>
                                    <Select
                                        containerStyle={{
                                            position: "absolute",
                                            right: 0,
                                            top: 10,
                                        }}
                                        isSelect={
                                            selectAddress == index
                                                ? true
                                                : false
                                        }
                                    />
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                    <Close
                        containerStyle={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            padding: 16,
                        }}
                        onPress={() => setShowAddressModal(false)}
                    />
                </View>
            </Modal>
        );
    }

    function paymentModal() {
        const [selectPayment, setSelectPayment] = useState(null);
        const [selectCard, setSelectedCard] = useState(0);

        return (
            <Modal
                isVisible={showPaymentModal}
                onBackdropPress={() => setShowPaymentModal(false)}
                hideModalContentWhileAnimating={true}
                backdropTransitionOutTiming={0}
                style={{ margin: 0 }}
            >
                <View
                    style={{
                        backgroundColor: COLORS.lightBlue,
                        position: "absolute",
                        width: SIZES.width,
                        bottom: 0,
                        paddingHorizontal: 28,
                        paddingVertical: 40,
                    }}
                >
                    <ScrollView>
                        {/* Choose payment method Text */}
                        <Text
                            style={{
                                fontFamily: "Poppins_600SemiBold",
                                fontSize: 20,
                                textTransform: "capitalize",
                                paddingBottom: 20,
                                color: COLORS.black,
                            }}
                        >
                            Choose payment method
                        </Text>
                        {/* Selected Payment */}
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 30,
                            }}
                        >
                            {PAYMENT.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        style={{
                                            width: SIZES.width / 2.5,
                                            height: 130,
                                            backgroundColor: "white",
                                            borderRadius: 5,
                                            padding: 20,
                                        }}
                                        onPress={() => setSelectPayment(index)}
                                        activeOpacity={0.5}
                                        key={item.id}
                                    >
                                        {item.logo}
                                        <Text
                                            style={{
                                                fontFamily:
                                                    "Mulish_600SemiBold",
                                                fontSize: 14,
                                                color: COLORS.gray,
                                                marginTop: 6,
                                            }}
                                        >
                                            {item.pay}
                                        </Text>
                                        <View
                                            style={{
                                                position: "absolute",
                                                right: 16,
                                                bottom: 16,
                                            }}
                                        >
                                            <Select
                                                isSelect={
                                                    selectPayment == index
                                                        ? true
                                                        : false
                                                }
                                                onPress={() =>
                                                    setSelectPayment(index)
                                                }
                                            />
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                        {/* Credit cards Text */}
                        <Text
                            style={{
                                fontFamily: "Poppins_600SemiBold",
                                fontSize: 20,
                                textTransform: "capitalize",
                                paddingBottom: 20,
                                color: COLORS.black,
                            }}
                        >
                            Credit cards
                        </Text>
                        {/* Selected Card */}
                        {CREDIT_CARDS.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={item.id}
                                    style={{
                                        marginBottom: 24,
                                        borderBottomColor: "#E2E2E2",
                                        borderBottomWidth: 1,
                                        height: 38,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                    activeOpacity={0.5}
                                    onPress={() => setSelectedCard(index)}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "Mulish_400Regular",
                                            fontSize: 16,
                                            color: COLORS.gray,
                                        }}
                                    >
                                        {item.number}
                                    </Text>
                                    <Select
                                        isSelect={
                                            selectCard == index ? true : false
                                        }
                                        onPress={() => setSelectedCard(index)}
                                    />
                                </TouchableOpacity>
                            );
                        })}
                        {/* Close */}
                    </ScrollView>
                    <Close
                        containerStyle={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            padding: 16,
                        }}
                        onPress={() => setShowPaymentModal(false)}
                    />
                </View>
            </Modal>
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            {renderHeader()}
            {renderContent()}
            {renderButton()}
            {addressModal()}
            {paymentModal()}
        </SafeAreaView>
    );
}
