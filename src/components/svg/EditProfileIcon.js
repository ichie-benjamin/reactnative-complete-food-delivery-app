import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const EditProfileIcon = (props) => (
    <Svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle
            cx={15}
            cy={15}
            r={13.5}
            fill="#7D849A"
            stroke="#fff"
            strokeWidth={3}
        />
        <Path
            d="M15 19.667h5.25M17.625 10.042a1.238 1.238 0 0 1 1.75 1.75l-7.292 7.291-2.333.584.583-2.334 7.292-7.291Z"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default EditProfileIcon;
