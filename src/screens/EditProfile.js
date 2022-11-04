import React from "react";
import {
    View,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
} from "react-native";

import { CONTAINER } from "../constants";
import { Header, Button, InputField, Check, Avatar } from "../components";

export default function EditProfile({ navigation }) {
    function renderHeader() {
        return (
            <View>
                <StatusBar barStyle="black-content" />
                <Header
                    title="Edit profile"
                    arrow={true}
                    onPress={() => navigation.goBack()}
                />
            </View>
        );
    }

    function renderContent() {
        return (
            <View>
                <Avatar photo={require("../images/icons/photo.png")} />
                <InputField
                    heading="name"
                    placeholder="Kristin Watson"
                    icon={<Check />}
                />
                <InputField
                    heading="Email"
                    placeholder="kristinwatson@mail.com"
                    icon={<Check />}
                    keyboardType="email-address"
                />
                <InputField
                    heading="phone number"
                    placeholder="+38 0123456789"
                    icon={<Check />}
                    keyboardType="phone-pad"
                />
                <InputField
                    heading="location"
                    placeholder="Chicago, USA"
                    icon={<Check />}
                />
            </View>
        );
    }

    function renderButton() {
        return (
            <Button
                text="save changes"
                onPress={() => navigation.navigate("MainLayout")}
                containerStyle={{ marginTop: 10 }}
            />
        );
    }

    return (
        <SafeAreaView style={{ ...CONTAINER.container }}>
            {renderHeader()}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <ScrollView
                    contentContainerStyle={{ paddingHorizontal: 28 }}
                    showsVerticalScrollIndicator={false}
                >
                    {renderContent()}
                    {renderButton()}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
