import React from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';
import { simulations } from '../constants/simulationData';
import { blogs } from '../constants/blogData';
import { color } from '../constants/Colors';
import { scammers } from '../constants/scammerData';
import { Link } from 'expo-router';

type Props = {
    carouselDesign: "simulation" | "cyberblog" | "scammer";
};


const HorizontalCarousel = ({ carouselDesign }: Props) => {
    if (carouselDesign === 'simulation') {
        return (
            <View style={styles.container}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {simulations.map((simulation) => (
                            <View key={simulation.id} style={styles.simulation}>
                                <Image source={simulation.image} style={styles.simImage} />
                                <Text style={styles.simTitle}>{simulation.title}</Text>
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
                        <View style={styles.blogContainer}>
                            <Link href={blog.path as any}>
                                <View key={blog.id} style={styles.blog}>
                                        <Image source={blog.image} style={styles.blogImage} />
                                        <View style={styles.blogDetails}>
                                            <View style={styles.labelContainer}>
                                                <Text style={styles.blogLabel}>{blog.category}</Text>
                                            </View>
                                            <Text style={styles.blogTitle}>{blog.title}</Text>
                                            <Text style={styles.blogDate}>{blog.date}</Text>
                                        </View>
                                </View>
                            </Link>
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
                    {scammers.map((scammer) => (
                        <View key={scammer.id} style={styles.scammer}>
                            <Image
                                source={scammer.image}
                                style={styles.scamImage}
                            />
                            <Text style={styles.scamNumber}>
                                {scammer.number}
                            </Text>
                            <Text style={styles.scamTitle}>
                                {scammer.title}
                            </Text>
                            <Text style={styles.scamRecent}>
                                {scammer.recent}
                            </Text>
                        </View>
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
    blogContainer: {
        marginHorizontal: 10,
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
        width: 90,
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
});

export default HorizontalCarousel;
