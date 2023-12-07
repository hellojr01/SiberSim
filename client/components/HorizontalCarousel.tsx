import React from "react";
import {
    View,
    Text,
    Image,
    Button,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
} from "react-native";
import { simulations } from "@constants/simulationData";
import { blogs } from "@constants/blogData";
import { color } from "@constants/Colors";
import scammersData from "@constants/scammerData";
import { Redirect, router } from "expo-router";

type Props = {
    carouselDesign: "simulation" | "cyberblog" | "scammer";
    redirect?: boolean;
};

const HorizontalCarousel = ({ carouselDesign, redirect }: Props) => {
    if (carouselDesign === "simulation") {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {simulations.map((simulation) => (
                        <View key={simulation.id} style={styles.simulation}>
                            <Image
                                source={simulation.image}
                                style={styles.simImage}
                            />
                            <Text style={styles.simTitle}>
                                {simulation.title}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    } else if (carouselDesign === "cyberblog") {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {blogs.map((blog) => (
                        <View key={blog.id}>
                            <TouchableHighlight
                                onPress={() => {
                                    router.push("/blog");
                                    setTimeout(
                                        () => router.push(blog.path as any),
                                        5
                                    );
                                }}
                                underlayColor="transparent"
                            >
                                <View style={styles.blog}>
                                    <Image
                                        source={blog.image}
                                        style={styles.blogImage}
                                    />
                                    <View style={styles.blogDetails}>
                                        <View style={styles.labelContainer}>
                                            <Text style={styles.blogLabel}>
                                                {blog.category}
                                            </Text>
                                        </View>
                                        <Text style={styles.blogTitle}>
                                            {blog.title}
                                        </Text>
                                        <Text style={styles.blogDate}>
                                            {blog.date}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    } else if (carouselDesign === "scammer") {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {scammersData.map((scammer) => (
                        <TouchableHighlight
                            key={scammer.id}
                            onPress={() => {
                                router.push("/scammer");
                                setTimeout(
                                    () => router.push(scammer.path as any),
                                    5
                                );
                            }}
                            underlayColor="transparent"
                        >
                            <View style={styles.scammer}>
                                <View style={styles.avatarContainer}>
                                    <Text style={styles.avatarText}>
                                        {scammer.name.charAt(0)}
                                    </Text>
                                </View>
                                <Text style={styles.scamTitle}>
                                    {scammer.name}
                                </Text>
                                <Text style={styles.scamRecent}>
                                    {scammer.contactInfo}
                                </Text>
                            </View>
                        </TouchableHighlight>
                    ))}
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
    },
    labelContainer: {
        backgroundColor: color.purple,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    simulation: {
        alignItems: "center",
        marginHorizontal: 10,
        width: 80,
    },
    simImage: {
        width: 80,
        height: 80,
        resizeMode: "contain",
    },
    simTitle: {
        fontSize: 12,
        fontFamily: "NotoSansBold",
        marginTop: 2,
        alignSelf: "center",
        textAlign: "center",
    },
    blog: {
        alignItems: "flex-start",
        marginHorizontal: 10,
        width: 120,
    },
    blogImage: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        marginBottom: 10,
    },
    blogLabel: {
        fontSize: 11,
        color: color.white,
    },
    blogTitle: {
        flexShrink: 1,
        overflow: "hidden",
        fontFamily: "NotoSansBold",
        fontSize: 14,
        marginVertical: 5,
    },
    blogDetails: {
        alignItems: "flex-start",
        paddingHorizontal: 2,
        height: 100,
    },
    blogDate: {
        fontSize: 11,
        color: color.charcoal,
    },
    scammer: {
        flex: 1,
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10,
        magin: 10,
        width: 100,
        height: 140,
    },
    scamImage: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    scamNumber: {
        fontSize: 14,
        fontFamily: "NotoSansBold",
        marginVertical: 2,
    },
    scamTitle: {
        fontSize: 12,
        fontFamily: "NotoSansBold",
        color: color.purple,
        overflow: "hidden",
        flexShrink: 1,
    },
    scamRecent: {
        fontSize: 11,
        color: color.charcoal,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        backgroundColor: color.americanBlue,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    avatarText: {
        color: "white",
        fontSize: 20,
        fontFamily: "NotoSansBold",
    },
});

export default HorizontalCarousel;
