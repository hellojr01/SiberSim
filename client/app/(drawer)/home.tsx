import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import Header from "@components/Header";
import Advertisement from "@components/Advertisement";
import SectionHeading from "@components/SectionHeading";
import Carousel from "@components/HorizontalCarousel";
import { color } from "@constants/Colors";

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
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
                        onPress={() => router.push("/blog")}
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
