import React from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import Advertisement from "../../components/Advertisement";
import SectionHeading from "../../components/SectionHeading";
import Carousel from "../../components/HorizontalCarousel";
import Header from "../../components/Header";
import { color } from "../../constants/Colors";
import { useRouter, Redirect } from "expo-router";
import LottieView from "lottie-react-native";
import LoaderItem from "../../components/LoaderItem";

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <LoaderItem />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Advertisement />
                <View style={styles.sectionContainer}>
                    <SectionHeading
                        title="Simulations Available"
                        viewAllButton={true}
                    />
                    <Carousel carouselDesign="simulation" />
                </View>
                <View style={styles.sectionContainer}>
                    <SectionHeading
                        title="Trending Cyberblogs"
                        viewAllButton={true}
                        onPress={() => {
                            router.push("/blog");
                            setTimeout(() => router.push("/blog/1"), 50);
                        }}
                    />
                    <Carousel carouselDesign="cyberblog" />
                </View>
                <View style={styles.sectionContainer}>
                    <SectionHeading
                        title="Trending Reported Scammers"
                        viewAllButton={true}
                        onPress={() => router.push("/scammer")}
                    />
                    <Carousel carouselDesign="scammer" />
                </View>
            </ScrollView>
        </SafeAreaView>
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
