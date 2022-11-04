import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
    Home,
    Search,
    Order,
    Profile,
    MainLayout,
    PasswordHasBeenReset,
    OnBoarding,
    SignIn,
    SignUp,
    OrderSuccess,
    OrderFailed,
    OrderHistory,
    AddNewAddress,
    AddNewCard,
    Checkout,
    AllOffers,
    ResetPassword,
    ForgotPassword,
    RestaurantMenu,
    MyPromoCodes,
    PaymentMethod,
    MyAddress,
    MyFavorite,
    Filter,
    EditProfile,
    VerifyNumber,
    DishDescription,
    OtpCode,
    OrderTracking,
} from "../screens";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerShown: false,
                }}
                initialRouteName={"OnBoarding"}
            >
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="MainLayout" component={MainLayout} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
                <Stack.Screen name="Filter" component={Filter} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="OrderFailed" component={OrderFailed} />
                <Stack.Screen name="AllOffers" component={AllOffers} />
                <Stack.Screen
                    name="RestaurantMenu"
                    component={RestaurantMenu}
                />
                <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
                <Stack.Screen
                    name="PasswordHasBeenReset"
                    component={PasswordHasBeenReset}
                />
                <Stack.Screen name="AddNewCard" component={AddNewCard} />
                <Stack.Screen name="Checkout" component={Checkout} />
                <Stack.Screen name="MyAddress" component={MyAddress} />
                <Stack.Screen name="OrderHistory" component={OrderHistory} />
                <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
                <Stack.Screen name="MyFavorite" component={MyFavorite} />
                <Stack.Screen name="MyPromoCodes" component={MyPromoCodes} />
                <Stack.Screen
                    name="DishDescription"
                    component={DishDescription}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />
                <Stack.Screen name="VerifyNumber" component={VerifyNumber} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="OtpCode" component={OtpCode} />
                <Stack.Screen name="OrderTracking" component={OrderTracking} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen
                    name="Order"
                    component={Order}
                    options={{ gestureEnabled: false }}
                />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
