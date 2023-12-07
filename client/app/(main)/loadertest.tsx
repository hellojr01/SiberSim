import { View, StyleSheet } from "react-native";

import LoaderItem from "@components/LoaderItem";
import { color } from "@constants/Colors";

export default function Loader() {
    return (
        <View style={styles.base}>
            <LoaderItem />
        </View>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: color.lavender,
    },
});
