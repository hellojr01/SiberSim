import React from "react";
import { View } from "react-native";

import LoaderItem from "../../components/LoaderItem";
import { color } from "../../constants/Colors";

// Intended file for testing purposes only
function loader() {
    return (
        <View
            style={{
                justifyContent: "center",
                flex: 1,
                backgroundColor: color.lavender,
            }}
        >
            <LoaderItem />
        </View>
    );
}

export default loader;
