import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { color } from "../../../constants/Colors";
import Icon from "@expo/vector-icons/AntDesign";
import Header from "../../../components/Header";
import Advertisement from "../../../components/Advertisement";
import SectionHeading from "../../../components/SectionHeading";
import Carousel from "../../../components/HorizontalCarousel";
import SearchComponent from "../../../components/SearchComponent";

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
