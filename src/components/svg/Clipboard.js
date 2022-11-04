import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Clipboard = (props) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M13.333 3.333H15A1.667 1.667 0 0 1 16.667 5v11.667A1.667 1.667 0 0 1 15 18.333H5a1.667 1.667 0 0 1-1.667-1.666V5A1.667 1.667 0 0 1 5 3.333h1.667"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12.5 1.667h-5a.833.833 0 0 0-.833.833v1.667c0 .46.373.833.833.833h5c.46 0 .833-.373.833-.833V2.5a.833.833 0 0 0-.833-.833Z"
            stroke="#7D849A"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default Clipboard;
