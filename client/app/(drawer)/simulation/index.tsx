import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Redirect } from "expo-router";

const simulations = [
    {
        id: "1",
        title: "Phishing Attack",
        description: "Learn how to identify and avoid phishing attacks",
    },
    {
        id: "2",
        title: "Password Security",
        description: "Learn how to create strong passwords and keep them safe",
    },
    {
        id: "3",
        title: "Social Engineering",
        description:
            "Learn how to recognize and avoid social engineering attacks",
    },
];

export default function SimulationPage() {
    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.simulationContainer}>
            <Text style={styles.simulationTitle}>{item.title}</Text>
            <Text style={styles.simulationDescription}>{item.description}</Text>
        </View>
    );

    return (
        // <View style={styles.container}>
        //   <Text style={styles.title}>Simulations</Text>
        //   <FlatList
        //     data={simulations}
        //     renderItem={renderItem}
        //     keyExtractor={(item) => item.id}
        //     style={styles.simulationList}
        //   />
        // </View>
        <Redirect href="/simulation/testsim" />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    simulationList: {
        width: "100%",
    },
    simulationContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    simulationTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    simulationDescription: {
        fontSize: 14,
    },
});
