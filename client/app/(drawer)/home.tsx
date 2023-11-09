import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { color } from "../../constants/Colors";
import Icon from "@expo/vector-icons/AntDesign";
import Header from "../../components/Header";
import Advertisement from "../../components/Advertisement";
import SectionHeading from "../../components/SectionHeading";
import Carousel from "../../components/HorizontalCarousel";

const Home = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Advertisement />
            <View style={styles.sectionContainer}>
                <SectionHeading
                    title="Simulation Available"
                    viewAllButton={true}
                    path={'/simulation'}
                />
                <Carousel carouselDesign="simulation" />
            </View>
            <View style={styles.sectionContainer}>
                <SectionHeading
                    title="Trending Cyberblogs"
                    viewAllButton={true}
                    path={'/blog'}
                />
                <Carousel carouselDesign="cyberblog" />
            </View>
            <View style={styles.sectionContainer}>
                <SectionHeading
                    title="Trending Reported Scammers"
                    viewAllButton={true}
                    path={'/scammer'}
                />
                <Carousel carouselDesign="scammer" />
            </View>
        </ScrollView>
    );
};
export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.lavender,
    },
    sectionContainer: {
        marginVertical: 10,
    },
});
