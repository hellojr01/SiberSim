import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

import Header from "../../../components/Header";
import Carousel from "../../../components/HorizontalCarousel";
import { color } from "../../../constants/Colors";

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Profile Page</Text>
        </SafeAreaView>
    );
};
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.lavender,
    },
    text: {
        fontSize: 30,
    },
});
