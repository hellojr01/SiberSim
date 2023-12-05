import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { FAB } from "@rneui/base";
import Icon from "@expo/vector-icons/AntDesign";

import SectionHeading from "@components/SectionHeading";
import SearchComponent from "@components/SearchComponent";
import ButtonFilter from "@components/ButtonFilter";
import HCarousel from "@components/HorizontalCarousel";
import LearnCarousel from "@components/LearnCarousel";
import { color } from "@constants/Colors";

const Learn = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Phishing", "Malware", "Social Engineering", "Romance Scam"];

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
    };

    return (
        <SafeAreaView style={styles.container}>
            <SearchComponent />
            <ScrollView
                style={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.sectionContainer}>
                    <ButtonFilter
                        activeFilter={activeFilter}
                        filters={filters}
                        onFilterChange={handleFilterChange}
                    />
                    <LearnCarousel carouselDesign="simulation" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Learn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.lavender,
    },
    contentContainer: {
        flex: 1,
    },
    sectionContainer: {
        marginVertical: 10,
    },
    fab: {
        position: "absolute",
        bottom: 20, // Adjust the bottom position as needed
        right: 20, // Adjust the right position as needed
    },
});