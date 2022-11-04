import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import Navigation from "./src/navigation/StackNavigation";
import {AuthProvider} from "./src/context/AuthContext";

export default function App() {
    let [fontsLoaded] = useFonts({
        Mulish_400Regular: require("./src/fonts/Mulish-Regular.ttf"),
        Mulish_600SemiBold: require("./src/fonts/Mulish-SemiBold.ttf"),
        Mulish_700Bold: require("./src/fonts/Mulish-Bold.ttf"),
        Poppins_500Medium: require("./src/fonts/Poppins-Medium.ttf"),
        Poppins_600SemiBold: require("./src/fonts/Poppins-SemiBold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
       return (<AuthProvider >
            <Navigation />
        </AuthProvider>)
        // return <Navigation />;
    }
}
