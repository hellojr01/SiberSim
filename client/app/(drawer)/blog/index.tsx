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
import SectionHeading from "../../../components/SectionHeading";
import SearchComponent from "../../../components/SearchComponent";
import ButtonFilter from "../../../components/ButtonFilter";
import { color } from "../../../constants/Colors";
import Icon from "@expo/vector-icons/AntDesign";
import VerticalCarousel from "../../../components/VerticalCarousel";
import Carousel from "../../../components/HorizontalCarousel";

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
                        path={""}
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
            <TouchableOpacity onPress={() => router.push("/blog/addBlog")}>
                <View>
                    <FAB
                        icon={{ name: "add", color: "white" }}
                        color="purple"
                        style={styles.fab}
                    />
                </View>
            </TouchableOpacity>
        </View>
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
