import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { simulations } from "../constants/simulationData";
import { blogs } from "../constants/blogData";
import { scammers } from "../constants/scammerData";
import { Link } from 'expo-router';
import { color } from "../constants/Colors";

type Props = {
    carouselDesign: "simulation" | "cyberblog" | "scammer";
};

const VerticalCarousel = ({ carouselDesign}: Props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {carouselDesign === "simulation" &&
                simulations.map((simulation) => (
                    <View key={simulation.id} style={styles.simulation}>
                        <Image
                            source={simulation.image}
                            style={styles.simImage}
                        />
                        <Text style={styles.simtitle}>{simulation.title}</Text>
                    </View>
                ))}
            {carouselDesign === "cyberblog" &&
                blogs.map((blog) => (
                    <View style={styles.blogContainer}>
                    <Link href={blog.path as any}>
                    <View key={blog.id} style={styles.blog}>
                        <View style={styles.leftContent}>
                            <Image
                                source={blog.image}
                                style={styles.blogImage}
                            />
                        </View>
                        <View style={styles.rightContent}>
                            <View style={styles.rightLabelContainer}>
                                <Text style={styles.blogLabel}>
                                    {blog.category}
                                </Text>
                            </View>
                            <Text style={styles.blogTitle}>{blog.title}</Text>
                            <Text style={styles.blogDesc}>{blog.desc}</Text>
                            <Text style={styles.blogDate}>{blog.date}</Text>
                        </View>
                    </View>
                    </Link>
                    </View>
                ))}
            {carouselDesign === "scammer" &&
                scammers.map((scammer) => (
                    <View key={scammer.id} style={styles.scammer}>
                        <Image
                            source={scammer.image}
                            style={styles.scamImage}
                        />
                        <Text style={styles.scamNumber}>{scammer.number}</Text>
                        <Text style={styles.scamTitle}>{scammer.title}</Text>
                        <Text style={styles.scamRecent}>{scammer.recent}</Text>
                    </View>
                ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    narrowPadding: {
        fontSize: 200
    },
    blogContainer: {
        marginHorizontal: 10,
    },
    leftContent: {
        marginRight: 10, // Space between the image and text
    },
    rightContent: {
        flex: 1, // Expand to fill available horizontal space
        justifyContent: "center",
        height: 100,
    },
    rightLabelContainer: {
        backgroundColor: color.purple,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
        alignSelf: "flex-start",
        marginBottom: 2,
    },
    simulation: {
        alignItems: "center",
        marginBottom: 10,
        width: 80,
    },
    simImage: {
        width: 80,
        height: 80,
        resizeMode: "contain",
    },
    simtitle: {
        fontSize: 14,
        fontFamily: "NotoSansBold",
        marginTop: 10,
    },
    blog: {
        flexDirection: "row", // Horizontal layout
        alignItems: "center", // Vertically centered
        marginVertical: 5,
        paddingHorizontal: 10, // Add some horizontal padding
    },
    blogImage: {
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
    blogLabel: {
        fontSize: 11,
        color: color.white,
    },
    blogTitle: {
        fontSize: 14,
        fontFamily: "NotoSansBold",
        color: color.americanBlue,
    },
    blogDesc: {
        flexShrink: 1,
        overflow: "hidden",
        fontSize: 12,
        fontFamily: "NotoSansSemiBold",
        color: color.purple,
        marginBottom: 8,
    },
    blogDate: {
        fontSize: 11,
        color: color.darkBlueMagenta,
    },
    scammer: {
        alignItems: "center",
        marginBottom: 10,
    },
    scamImage: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    scamNumber: {
        fontSize: 14,
        fontFamily: "NotoSansBold",
    },
    scamTitle: {
        fontSize: 12,
        fontFamily: "NotoSansBold",
        color: color.purple,
    },
    scamRecent: {
        fontSize: 11,
        color: color.darkBlueMagenta,
    },
});

export default VerticalCarousel;
