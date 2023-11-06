import React from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';
import { simulations } from '../constants/simulationData';
import { blogs } from '../constants/blogData';
import { color } from '../constants/Colors';
import { scammers } from '../constants/scammerData';

type Props = {
    carouselDesign: 'simulation' | 'cyberblog' | 'scammer';
};

const SimulationCarousel = ({ carouselDesign }: Props) => {
    if (carouselDesign === 'simulation') {
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {simulations.map((simulation) => (
                        <View key={simulation.id} style={styles.simulation}>
                            <Image source={simulation.image} style={styles.simImage} />
                            <Text style={styles.title}>{simulation.title}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    } else if(carouselDesign === 'cyberblog') {
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {blogs.map((blog) => (
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
                    ))}
                </ScrollView>
            </View>
        );
    } else if(carouselDesign === 'scammer') {
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {scammers.map((scammer) => (
                        <View key={scammer.id} style={styles.scammer}>
                            <Image source={scammer.image} style={styles.scamImage} />
                            <Text style={styles.scamNumber}>{scammer.number}</Text>
                            <Text style={styles.scamTitle}>{scammer.title}</Text>
                            <Text style={styles.scamRecent}>{scammer.recent}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 10 
    },
    labelContainer: {
        backgroundColor: color.purple,
        borderRadius: 10,
        paddingHorizontal: 5,
    },
    blogDetails: {
        alignItems: 'flex-start',
    },
    blogLabel: {
        fontSize: 8,
        color: color.white,
    },
    simulation: {
        alignItems: 'center',
        marginHorizontal: 10,
        width: 80,
    },
    blog: {
        alignItems: 'center',
        marginHorizontal: 10,
        width: 110,
    },
    blogDate: {
        fontSize: 8,
        color: '#rgba(69, 60, 103, 0.60)',
    },
    scammer: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    simImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    blogImage: {
        width: 110,
        resizeMode: 'contain',
    },
    scamImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 12,
        fontFamily: "NotoSansBold", 
        marginTop: 10,
    },
    scamTitle: {
        fontSize: 12,
        fontFamily: "NotoSansBold", 
        color: color.purple,
    },
    scamNumber: {
        fontSize: 12,
        fontFamily: "NotoSansBold", 
    },
    scamRecent: {
        fontSize: 8,
        color: '#rgba(69, 60, 103, 0.80)',
    },
    blogTitle: {
        fontSize: 12,
        fontFamily: "NotoSansBold",
    },
});

export default SimulationCarousel;
