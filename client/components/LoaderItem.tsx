import AnimatedLottieView from "lottie-react-native";
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ActivityIndicator,
} from "react-native";
import { color } from "@constants/Colors";

const LoaderItem = () => {
    return Platform.OS == "android" || Platform.OS == "ios" ? (
        <View style={styles.base}>
            <AnimatedLottieView
                autoPlay
                loop
                source={require("@assets/animations/LoadingText.json")}
                style={{ width: 100, height: 100, shadowColor: color.black }}
            />
            {/* <Text style={styles.loadingText}>Loading</Text> */}
            <AnimatedLottieView
                autoPlay
                loop
                source={require("@assets/animations/LoadingAnimation.json")}
                style={{ width: 200, height: 200 }}
            />

            <AnimatedLottieView
                autoPlay
                loop
                source={require("@assets/animations/LoadingBar.json")}
                style={{
                    width: 300,
                    height: 300,
                    marginTop: -60,
                    marginBottom: -150,
                }}
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
        paddingTop: 20,
    },
    loadingText: {
        fontFamily: "NotoSansBold",
        fontSize: 40,
        textAlign: "center",
        color: color.americanBlue,
    },
});

export default LoaderItem;
