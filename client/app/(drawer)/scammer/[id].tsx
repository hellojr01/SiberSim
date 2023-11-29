import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
} from "react-native";
import { Redirect, useLocalSearchParams, useRouter } from "expo-router";
import {
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import SectionHeading from "@components/SectionHeading";
import VerticalCarousel from "@components/VerticalCarousel";
import { scammers } from "@constants/scammerData";
import { color } from "@constants/Colors";

const ScammerDetails = () => {
    const { id } = useLocalSearchParams();
    const windowWidth = Dimensions.get("window").width;
    const bigIcon = windowWidth * (0.16 - windowWidth * 0.000075);

    let value = 404;
    if (id !== undefined)
        if (!Array.isArray(id))
            if (!Boolean((value = Number(id))))
                return <Redirect href="/scammer" />;

    const scammerDetails = scammers.find((scammer) => scammer.id == value);

    return (
        <ScrollView style={styles.container}>
            <View>
                <FontAwesome
                    name="user"
                    style={styles.image}
                    size={bigIcon}
                    color={color.americanBlue}
                />
                <Text style={{ ...styles.title }}>
                    {scammerDetails
                        ? scammerDetails.title
                        : "Unknown: Title Not Found!"}
                </Text>
                <Text style={{ ...styles.description }}>
                    {scammerDetails
                        ? scammerDetails.number
                        : "Unknown: Title Not Found!"}
                </Text>
            </View>
            <SectionHeading title="Reports" />
            {scammerDetails
                ? scammerDetails.reports.map((report) => (
                      <View key={scammerDetails.id} style={styles.reportItem}>
                          <Text style={styles.reportName}>{report.name}</Text>
                          <Text style={styles.reportDate}>{report.date}</Text>
                          <Text style={styles.reportDescription}>
                              {report.description}
                          </Text>
                      </View>
                  ))
                : "Unknown: Report Not Available!"}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: color.lavender,
    },
    image: {
        flex: 1,
        alignSelf: "center",
    },
    title: {
        fontSize: 20,
        flex: 1,
        alignSelf: "center",
        fontFamily: "NotoSansBold",
        marginVertical: 5,
        color: color.americanBlue,
    },
    description: {
        fontSize: 15,
        flex: 1,
        alignSelf: "center",
        fontFamily: "NotoSansBold",
        marginVertical: 5,
        color: color.purple,
    },
    blogDataContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },
    blogDate: {
        fontSize: 8,
        fontFamily: "NotoSansBold",
        color: color.darkBlueMagenta,
    },
    blogAuthor: {
        fontSize: 8,
        fontFamily: "NotoSansBold",
        color: color.darkBlueMagenta,
    },
    contentContainer: {
        marginVertical: 10,
    },
    paragraph: {
        fontSize: 10,
        fontFamily: "NotoSansBold",
        lineHeight: 15,
        color: color.americanBlue,
        marginBottom: 20,
        textAlign: "justify",
    },
    errorText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
    },
    reportItem: {
        backgroundColor: color.white,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },
    reportName: {
        fontSize: 16,
        fontFamily: "NotoSansBold",
        color: color.americanBlue,
    },
    reportDate: {
        fontSize: 12,
        fontFamily: "NotoSansBold",
        color: color.purple,
    },
    reportDescription: {
        fontSize: 14,
        fontFamily: "NotoSansBold",
        color: color.black,
    },
});

export default ScammerDetails;
