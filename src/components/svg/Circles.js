import React from "react";
import Svg, { Circle } from "react-native-svg";

const Box = () => (
    <Svg
        width={60}
        height={50}
        viewBox="0 0 60 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Circle
            opacity={0.5}
            cx={49}
            cy={49}
            r={23.75}
            stroke="#E83939"
            strokeWidth={12}
        />
        <Circle
            opacity={0.5}
            cx={5.75}
            cy={34}
            r={3.5}
            stroke="#E83939"
            strokeWidth={3}
        />
        <Circle opacity={0.3} cx={54.25} cy={38.5} r={2.5} fill="#fff" />
        <Circle opacity={0.3} cx={31.75} r={10} fill="#fff" />
    </Svg>
);

export default Box;
