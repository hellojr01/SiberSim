import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Image } from "expo-image";

const Advertisement = () => {
    const [currentAd, setCurrentAd] = useState(0);
    const ads = [
        {
            id: 1,
            image: require("../assets/images/Advertisement1.png"),
        },
        {
            id: 2,
            image: require("../assets/images/Advertisement2.png"),
        },
        {
            id: 3,
            image: require("../assets/images/Advertisement3.png"),
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAd((currentAd) =>
                currentAd === ads.length - 1 ? 0 : currentAd + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={ads[currentAd].image}
                style={styles.image}
                transition={1000}
            />
        </View>
    );
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        width: width > 680 ? 600 : width,
        // height: width * 0.5,
        aspectRatio: 2,
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10,
        padding: 10,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 16,
        // resizeMode: "contain",
    },
});

export default Advertisement;
