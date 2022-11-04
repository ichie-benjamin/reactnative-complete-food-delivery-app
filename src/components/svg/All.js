import * as React from "react";
import Svg, { Path } from "react-native-svg";

const All = (props) => (
    <Svg
        width={34}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M2.043 18H.363L5.435 6.608h1.392L11.9 18h-1.664L5.9 7.856h.512L2.043 18Zm.512-2.816.608-1.312h5.904l.592 1.312H2.555ZM13.23 18V6.224h1.617V18H13.23Zm3.97 0V6.224h1.615V18H17.2Z"
            fill="#E83939"
        />
        <Path
            d="m29 17 4-4-4-4"
            stroke="#E83939"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default All;
