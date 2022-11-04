import * as React from "react";
import { View } from "react-native";
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg";

const Fail = ({ containerStyle }) => (
    <View style={containerStyle}>
        <Svg
            width={235}
            height={214}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Circle
                cx={117.139}
                cy={122.308}
                r={55.788}
                stroke="#E83939"
                strokeWidth={12}
            />
            <G
                clipPath="url(#a)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#E83939"
            >
                <Path d="M101.48 106.514a4 4 0 0 1 5.657 0l25.775 25.775a4 4 0 0 1-5.657 5.657l-25.775-25.775a4 4 0 0 1 0-5.657Z" />
                <Path d="M101.48 137.946a4 4 0 0 1 0-5.657l25.775-25.775a4 4 0 0 1 5.657 5.657l-25.775 25.775a4 4 0 0 1-5.657 0Z" />
            </G>
            <Circle
                cx={43.937}
                cy={70.905}
                r={6.885}
                stroke="#9A4C71"
                strokeWidth={7}
            />
            <Circle
                cx={194.93}
                cy={60.705}
                r={10.06}
                stroke="#9A4C71"
                strokeWidth={10}
            />
            <Circle
                cx={41.002}
                cy={163.53}
                r={10.06}
                stroke="#9A4C71"
                strokeWidth={10}
            />
            <Circle
                cx={203.505}
                cy={166.01}
                r={7.135}
                stroke="#9A4C71"
                strokeWidth={7}
            />
            <Circle
                cx={8.704}
                cy={74.969}
                r={2.565}
                stroke="#F5826E"
                strokeWidth={3}
            />
            <Circle
                cx={228.623}
                cy={95.969}
                r={2.565}
                stroke="#F5826E"
                strokeWidth={3}
            />
            <Circle
                cx={145.197}
                cy={3.885}
                r={2.385}
                stroke="#F5826E"
                strokeWidth={3}
            />
            <Circle
                cx={96.793}
                cy={199.03}
                r={4.885}
                stroke="#F2AAA0"
                strokeWidth={5}
            />
            <Circle
                cx={125.235}
                cy={38.26}
                r={4.885}
                stroke="#F2AAA0"
                strokeWidth={5}
            />
            <Circle cx={201.562} cy={125.02} r={7.154} fill="#E83939" />
            <Circle cx={168.62} cy={199.03} r={14.352} fill="#FF7F56" />
            <Circle
                r={3.183}
                transform="matrix(1 0 0 -1 43.937 114.683)"
                fill="#E83939"
            />
            <Circle
                r={6.875}
                transform="matrix(1 0 0 -1 162.303 37.75)"
                fill="#E83939"
            />
            <Circle
                r={3.183}
                transform="matrix(1 0 0 -1 50.303 201.193)"
                fill="#E83939"
            />
            <Circle
                r={3.183}
                transform="matrix(1 0 0 -1 231.806 173.462)"
                fill="#E83939"
            />
            <Circle
                r={3.183}
                transform="matrix(1 0 0 -1 132.62 198.011)"
                fill="#E83939"
            />
            <Circle cx={83.408} cy={28.539} r={20.769} fill="#FF7F56" />
            <Circle cx={12.769} cy={122.309} r={12.769} fill="#FF7F56" />
            <Defs>
                <ClipPath id="a">
                    <Path
                        fill="#fff"
                        transform="rotate(-45 189.209 -39.204)"
                        d="M0 0h48.083v48.083H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    </View>
);

export default Fail;
