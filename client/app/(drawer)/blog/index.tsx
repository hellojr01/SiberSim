import React from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, ScrollView } from "react-native";
import { color } from "../../../constants/Colors";
import SectionHeading from "../../../components/SectionHeading";
import Carousel from "../../../components/HorizontalCarousel";
import SearchComponent from "../../../components/SearchComponent";
import { useState } from "react";
import ButtonFilter from "../../../components/ButtonFilter";
import VerticalCarousel from "../../../components/VerticalCarousel";
import { FAB } from "@rneui/base";
import { router } from "expo-router";

const Blog = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = ["All", "Scam Alert", "Security Tips", "User Story"];

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
    };

    return (
        <View style={styles.container}>
            <SearchComponent />
            <ScrollView style={styles.contentContainer}>
                <View style={styles.sectionContainer}>
                    <SectionHeading
                        title="Trending Now"
                        viewAllButton={false}
                    />
                    <Carousel carouselDesign="cyberblog" />
                </View>
                <View style={styles.sectionContainer}>
                    <ButtonFilter
                        activeFilter={activeFilter}
                        filters={filters}
                        onFilterChange={handleFilterChange}
                    />
                    <VerticalCarousel carouselDesign="cyberblog" />
                </View>
            </ScrollView>
            <TouchableOpacity
                    onPress={() => router.push("/addBlog")}
                >
                    <FAB
                        icon={{ name: "add", color: "white" }}
                        color="purple"
                        style={styles.fab}
                    />
            </TouchableOpacity>
        </View>
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
