import React from "react";
import {
    StyleSheet,
    Image,
    Text,
    ScrollView,
    View,
    TouchableHighlight,
} from "react-native";
import SearchComponent from "../../../components/SearchComponent";
import { color } from "../../../constants/Colors";
import SectionHeading from "../../../components/SectionHeading";
import HorizontalCarousel from "../../../components/HorizontalCarousel";
import { scammers } from "../../../constants/scammerData";
import { router } from "expo-router";

export default function ScammerPage() {
    const sortedScammers = scammers.sort((a, b) =>
        a.title.localeCompare(b.title)
    );
    const letters = new Set(
        sortedScammers.map((scammer) => scammer.title[0].toUpperCase())
    );
    return (
        <ScrollView style={styles.container}>
            <SearchComponent />
            {Array.from(letters).map((letter) => (
                <View key={letter} style={styles.sectionContainer}>
                    <View style={styles.sectionHeading}>
                        <SectionHeading
                            title={`${letter}`}
                            viewAllButton={false}
                        />
                    </View>
                    {sortedScammers
                        .filter(
                            (scammer) =>
                                scammer.title[0].toUpperCase() === letter
                        )
                        .map((scammer) => (
                            <View key={scammer.id}>
                                <TouchableHighlight
                                    onPress={() =>
                                        router.push(`/scammer/${scammer.id}`)
                                    }
                                    underlayColor="transparent"
                                >
                                    <View style={styles.scammer}>
                                        <View style={styles.leftContent}>
                                            <Image
                                                source={scammer.image}
                                                style={styles.scamImage}
                                            />
                                        </View>
                                        <View style={styles.rightContent}>
                                            <Text style={styles.scamNumber}>
                                                {scammer.number}
                                            </Text>
                                            <Text style={styles.scamTitle}>
                                                {scammer.title}
                                            </Text>
                                            <Text style={styles.scamRecent}>
                                                {scammer.recent} Recent Reports
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        ))}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    sectionHeading: {
        borderBottomColor: color.americanBlue,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 5,
    },
    container: {
        flex: 1,
        backgroundColor: color.lavender,
    },
    contentContainer: {
        flex: 1,
    },
    sectionContainer: {
        paddingHorizontal: 20,
    },
    scammer: {
        flexDirection: "row", // Horizontal layout
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
        fontFamily: "NotoSansBold",
        color: color.darkBlueMagenta,
    },
    leftContent: {
        marginRight: 10, // Space between the image and text
        justifyContent: "center",
    },
    rightContent: {
        flex: 1, // Expand to fill available horizontal space
        justifyContent: "center",
        height: 60,
    },
});
