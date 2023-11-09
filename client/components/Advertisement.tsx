import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

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

    // const [ads, setAds] = useState([]);

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
            <Image source={ads[currentAd].image} style={styles.image} />
        </View>
    );
};

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: width * 0.5,
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
