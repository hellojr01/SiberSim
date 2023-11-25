import LottieView from "lottie-react-native";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ActivityIndicator,
} from "react-native";
import { color } from "../constants/Colors";

const LoaderItem = () => {
    return Platform.OS == "android" || Platform.OS == "ios" ? (
        <View style={styles.base}>
            <LottieView
                autoPlay
                loop
                source={require("../assets/animations/LoadingAnimation.json")}
                style={{ width: 200, height: 200 }}
            />
            <Text style={styles.loadingText}>Loading</Text>
            <LottieView
                autoPlay
                loop
                source={require("../assets/animations/LoadingBar.json")}
                style={{ width: 300, height: 300 }}
            />
        </View>
    ) : (
        <View style={{ ...styles.base, marginVertical: 50 }}>
            <ActivityIndicator size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.lavender,
    },
    loadingText: {
        fontFamily: "NotoSansBold",
        fontSize: 32,
        textAlign: "center",
        color: color.americanBlue,
    },
});

export default LoaderItem;
