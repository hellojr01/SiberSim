import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import SectionHeading from "@components/SectionHeading";
import SearchComponent from "@components/SearchComponent";
import ButtonFilter from "@components/ButtonFilter";
import LearnCarousel from "@components/LearnCarousel";
import { color } from "@constants/Colors";
import Button from "@components/CustomButton";
import RewardPage from "@app/(main)/reward";

const Learn = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");
    const filters = [
        "All",
        "Phishing",
        "Malware",
        "Social Engineering",
        "Romance Scam",
    ];

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    alignItems: "flex-end",
                    padding: 10,
                }}
            >
                <Button
                    icon={
                        <MaterialCommunityIcons
                            name="gift"
                            size={20}
                            color={color.white}
                        />
                    }
                    title="Points"
                    textStyle={{ color: color.white }}
                    buttonStyle={styles.shopButton}
                    onPress={() => setModalVisible(!isModalVisible)}
                />
            </View>
            <ScrollView
                style={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.sectionContainer}>
                    <LearnCarousel carouselDesign="simulation" />
                </View>
            </ScrollView>
            <Modal isVisible={isModalVisible} style={styles.modal}>
                <View style={styles.modalContent}>
                    <RewardPage
                        onPress={() => setModalVisible(!isModalVisible)}
                    />
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default Learn;

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
    shopButton: {
        justifyContent: "center",
        backgroundColor: color.purple,
        borderRadius: 8,
        padding: 8,
        width: 100,
        height: 35,
    },
    modal: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        width: 320,
        height: 600,
    },
});
