import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const COLORS = {
    black: "#222222",
    gray: "#7D849A",
    orange: "#FF7F56",
    carrot: "#E83939",
    lightBlue: "#EEF3FC",
    lightGrey: "#E2E2E2",
    white: "#FFFFFF",
    green: "#00824B",
    transparent: "transparent",
    transparentBlack: "rgba(0, 0, 0, 0.7)",
};

const FONTS = {
    H1: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 28,
    },
    H2: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 22,
    },
    H3: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 20,
    },
    H4: {
        fontFamily: "Poppins_500Medium",
        fontSize: 18,
    },
    H5: {
        fontFamily: "Mulish_600SemiBold",
        fontSize: 16,
    },
};

const SIZES = {
    width,
    height,
};

const CONTAINER = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
};

const LINE = {
    line: {
        width: "100%",
        borderTopWidth: 1,
        borderTopColor: "#E2E2E2",
    },
};

const SHADOW_PRESET = {
    shadow: {
        offset: [0, 1],
        distance: 10,
        startColor: "rgba(6, 38, 100, 0.04)",
        finalColor: "rgba(6, 38, 100, 0.0)",
        offset: [4, 4],
    },
};

export { COLORS, FONTS, SIZES, LINE, CONTAINER, SHADOW_PRESET };
