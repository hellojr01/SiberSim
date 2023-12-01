import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Modal,
    TextInput,
    Button,
} from "react-native";
import { Redirect, useLocalSearchParams, useRouter } from "expo-router";
import {
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

import SectionHeading from "@components/SectionHeading";
import VerticalCarousel from "@components/VerticalCarousel";
import scammersData from '@constants/scammerData'
import { color } from "@constants/Colors";

const ScammerDetails = () => {
    const { id } = useLocalSearchParams();
    const windowWidth = Dimensions.get("window").width;
    const bigIcon = windowWidth * (0.16 - windowWidth * 0.000075);

    const [modalVisible, setModalVisible] = useState(false);
    const [reportDetails, setReportDetails] = useState({
        name: "",
        date: "",
        description: "",
    });

    const toggleModal = () => setModalVisible(!modalVisible);

    let value = 404;
    if (id !== undefined)
        if (!Array.isArray(id))
            if (!Boolean((value = Number(id))))
                return <Redirect href="/scammer" />;

    const scammerDetails = scammersData.find((scammerData) => scammerData.id == value);

    const handleReport = () => {
        // Perform any action you want with the report details
        console.log("Report details:", reportDetails);

        // Close the modal
        setModalVisible(false);
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <FontAwesome
                    name="user"
                    style={styles.image}
                    size={bigIcon}
                    color={color.americanBlue}
                />
                <Text style={styles.title}>
                    {scammerDetails
                        ? scammerDetails.name
                        : "Unknown: Title Not Found!"}
                </Text>
                <Text style={styles.description}>
                    {scammerDetails
                        ? scammerDetails.contactInfo
                        : "Unknown: Title Not Found!"}
                </Text>
            </View>
            <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.reportButton}>Report Scammer</Text>
            </TouchableOpacity>
            <SectionHeading title="Reports" />
            {scammerDetails
                ? scammerDetails.reports.map((report) => (
                      <View key={report.id} style={styles.reportItem}>
                          <Text style={styles.reportName}>{report.name}</Text>
                          <Text style={styles.reportDate}>{report.date}</Text>
                          <Text style={styles.reportDescription}>
                              {report.description}
                          </Text>
                      </View>
                  ))
                : "Unknown: Report Not Available!"}

            {/* Report Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Report Scammer</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Your Name"
                            onChangeText={(text) =>
                                setReportDetails({
                                    ...reportDetails,
                                    name: text,
                                })
                            }
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Date"
                            onChangeText={(text) =>
                                setReportDetails({
                                    ...reportDetails,
                                    date: text,
                                })
                            }
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            multiline
                            onChangeText={(text) =>
                                setReportDetails({
                                    ...reportDetails,
                                    description: text,
                                })
                            }
                        />
                        <TouchableOpacity onPress={handleReport}>
                            <Text style={styles.submitReport}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleModal}>
                            <Text style={styles.cancel}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    reportButton: {
        fontSize: 16,
        fontFamily: "NotoSansBold",
        color: color.white,
        backgroundColor: color.americanBlue,
        borderRadius: 10,
        padding: 5,
        textAlign: "center",
        marginVertical: 10,
    },
    submitReport: {
        fontSize: 16,
        fontFamily: "NotoSansBold",
        color: color.white,
        backgroundColor: color.americanBlue,
        borderRadius: 10,
        padding: 5,
        textAlign: "center",
        marginVertical: 10,
    },
    cancel: {
        fontSize: 16,
        fontFamily: "NotoSansBold",
        color: color.white,
        backgroundColor: color.americanBlue,
        borderRadius: 10,
        padding: 5,
        textAlign: "center",
        marginVertical: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: color.white,
        borderRadius: 10,
        padding: 20,
        width: "80%",
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: "NotoSansBold",
        color: color.americanBlue,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default ScammerDetails;
