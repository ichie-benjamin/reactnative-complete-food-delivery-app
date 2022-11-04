import * as React from "react";
import { View } from "react-native";
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg";

const Success = ({ containerStyle }) => (
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
                stroke="#00824B"
                strokeWidth={12}
            />
            <G clipPath="url(#a)">
                <Path
                    d="m133.14 111.309-22 22-10-10"
                    stroke="#00824B"
                    strokeWidth={12}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
            <Circle
                cx={43.938}
                cy={70.905}
                r={6.885}
                stroke="#484F50"
                strokeWidth={7}
            />
            <Circle
                cx={194.93}
                cy={60.705}
                r={10.06}
                stroke="#484F50"
                strokeWidth={10}
            />
            <Circle
                cx={41.002}
                cy={163.53}
                r={10.06}
                stroke="#484F50"
                strokeWidth={10}
            />
            <Circle
                cx={203.505}
                cy={166.01}
                r={7.135}
                stroke="#484F50"
                strokeWidth={7}
            />
            <Circle
                cx={8.704}
                cy={74.969}
                r={2.565}
                stroke="#FFD23C"
                strokeWidth={3}
            />
            <Circle
                cx={228.623}
                cy={95.969}
                r={2.565}
                stroke="#FFD23C"
                strokeWidth={3}
            />
            <Circle
                cx={145.197}
                cy={3.885}
                r={2.385}
                stroke="#FFD23C"
                strokeWidth={3}
            />
            <Circle
                cx={96.793}
                cy={199.03}
                r={4.885}
                stroke="#91C83C"
                strokeWidth={5}
            />
            <Circle
                cx={125.235}
                cy={38.26}
                r={4.885}
                stroke="#91C83C"
                strokeWidth={5}
            />
            <Circle cx={201.562} cy={125.02} r={7.154} fill="#00824B" />
            <Circle cx={168.62} cy={199.03} r={14.352} fill="#5FAA46" />
            <Circle
                r={3.183}
                transform="matrix(1 0 0 -1 43.937 114.683)"
                fill="#00824B"
            />
            <Circle
                r={6.875}
                transform="matrix(1 0 0 -1 162.303 37.75)"
                fill="#00824B"
            />
            <Circle
                r={3.183}
                transform="matrix(1 0 0 -1 50.303 201.193)"
                fill="#00824B"
            />
            <Circle
                r={3.183}
                transform="matrix(1 0 0 -1 231.806 173.462)"
                fill="#00824B"
            />
            <Circle
                r={3.183}
                transform="matrix(1 0 0 -1 132.62 198.011)"
                fill="#00824B"
            />
            <Circle cx={83.409} cy={28.539} r={20.769} fill="#5FAA46" />
            <Circle cx={12.769} cy={122.309} r={12.769} fill="#5FAA46" />
            <Defs>
                <ClipPath id="a">
                    <Path
                        fill="#fff"
                        transform="translate(95.14 105.309)"
                        d="M0 0h44v34H0z"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    </View>
);

export default Success;
