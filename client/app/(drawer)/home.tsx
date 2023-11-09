import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { color } from "../../constants/Colors";
import Icon from "@expo/vector-icons/AntDesign";
import Header from "../../components/Header";
import Advertisement from "../../components/Advertisement";
import SectionHeading from "../../components/SectionHeading";
import Carousel from "../../components/HorizontalCarousel";
import Header from "../../components/Header";
import { color } from "../../constants/Colors";

const Home = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Advertisement />
                <View style={styles.sectionContainer}>
                    <SectionHeading
                        title="Simulations Available"
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
