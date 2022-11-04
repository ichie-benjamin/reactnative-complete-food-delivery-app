import * as React from "react";
import Svg, {
    G,
    Circle,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Call = (props) => (
    <Svg
        width={70}
        height={70}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G filter="url(#a)">
            <Circle cx={35} cy={35} r={20} fill="url(#b)" />
        </G>
        <Path
            d="M42.5 38.69v2.25a1.502 1.502 0 0 1-1.635 1.5 14.843 14.843 0 0 1-6.472-2.302 14.624 14.624 0 0 1-4.5-4.5 14.843 14.843 0 0 1-2.303-6.503 1.5 1.5 0 0 1 1.493-1.635h2.25a1.5 1.5 0 0 1 1.5 1.29c.095.72.27 1.427.525 2.108a1.5 1.5 0 0 1-.338 1.582l-.952.953a12 12 0 0 0 4.5 4.5l.952-.953a1.5 1.5 0 0 1 1.583-.337c.68.254 1.387.43 2.107.525a1.5 1.5 0 0 1 1.29 1.522Z"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Circle
            cx={35}
            cy={35}
            r={25}
            stroke="#FF7F56"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="2 6"
        />
        <Defs>
            <LinearGradient
                id="b"
                x1={15}
                y1={15}
                x2={61.735}
                y2={25.768}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FF7F56" />
                <Stop offset={1} stopColor="#E83939" stopOpacity={0.8} />
            </LinearGradient>
        </Defs>
    </Svg>
);

export default Call;
