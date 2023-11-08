import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { simulations } from '../constants/simulationData';
import { blogs } from '../constants/blogData';
import { color } from '../constants/Colors';
import { scammers } from '../constants/scammerData';

type Props = {
    carouselDesign: 'simulation' | 'cyberblog' | 'scammer';
};

const VerticalCarousel = ({ carouselDesign }: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {carouselDesign === 'simulation' && (
                simulations.map((simulation) => (
                    <View key={simulation.id} style={styles.simulation}>
                        <Image source={simulation.image} style={styles.simImage} />
                        <Text style={styles.title}>{simulation.title}</Text>
                    </View>
                ))
            )}
            {carouselDesign === 'cyberblog' && (
                blogs.map((blog) => (
                    <View key={blog.id} style={styles.blog}>
                        <View style={styles.leftContent}>
                            <Image source={blog.image} style={styles.blogImage} />
                        </View>
                        <View style={styles.rightContent}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.blogLabel}>{blog.category}</Text>
                            </View>
                            <Text style={styles.blogTitle}>{blog.title}</Text>
                            <Text style={styles.blogDesc}>{blog.desc}</Text>
                            <Text style={styles.blogDate}>{blog.date}</Text>
                        </View>
                    </View>
                ))
            )}
            {carouselDesign === 'scammer' && (
                scammers.map((scammer) => (
                    <View key={scammer.id} style={styles.scammer}>
                        <Image source={scammer.image} style={styles.scamImage} />
                        <Text style={styles.scamNumber}>{scammer.number}</Text>
                        <Text style={styles.scamTitle}>{scammer.title}</Text>
                        <Text style={styles.scamRecent}>{scammer.recent}</Text>
                    </View>
                ))
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    labelContainer: {
        backgroundColor: color.purple,
        borderRadius: 10,
        paddingHorizontal: 5,
        alignSelf: 'flex-start'
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
        marginBottom: 10,
        width: 80,
    },
    blog: {
        flexDirection: 'row', // Horizontal layout
        alignItems: 'center',  // Vertically centered
        marginBottom: 10,
        paddingHorizontal: 10, // Add some horizontal padding
    },
    leftContent: {
        marginRight: 10, // Space between the image and text
    },
    rightContent: {
        flex: 1, // Expand to fill available horizontal space
    },
    blogDate: {
        fontSize: 8,
        color: 'rgba(69, 60, 103, 0.80)',
    },
    scammer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    simImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    blogImage: {
        width: 110,
        height:110,
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
        color: 'rgba(69, 60, 103, 0.80)',
    },
    blogTitle: {
        fontSize: 15,
        fontFamily: "NotoSansBold",
        color: color.americanBlue
    },
    blogDesc: {
        fontSize: 10,
        fontFamily: "NotoSansSemiBold",
        color: color.purple
    }
});

export default VerticalCarousel;
