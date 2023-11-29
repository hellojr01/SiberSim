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
import VCarousel from "@components/VerticalCarousel";
import { color } from "@constants/Colors";

const Blog = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Scam Alert", "Security Tips", "User Story"];

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
                    <SectionHeading
                        title="Trending Now"
                        viewAllButton={false}
                    />
                    <HCarousel carouselDesign="cyberblog" />
                </View>
                <View style={styles.sectionContainer}>
                    <ButtonFilter
                        activeFilter={activeFilter}
                        filters={filters}
                        onFilterChange={handleFilterChange}
                    />
                    <VCarousel carouselDesign="cyberblog" />
                </View>
            </ScrollView>
            <FAB
                icon={{ name: "add", color: "white" }}
                color={color.purple}
                style={styles.fab}
                onPress={() => router.push("/blog/addBlog")}
            />
        </SafeAreaView>
    );
};

export default Blog;

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
