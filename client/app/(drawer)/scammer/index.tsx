import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ScammerPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Scammer Database</Text>
            <Text style={styles.subtitle}>Search for known scammers:</Text>
            <View style={styles.searchContainer}>
                {/* Add search bar component here */}
            </View>
            <View style={styles.resultContainer}>
                {/* Add list of search results here */}
            </View>
        </View>
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
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    searchContainer: {
        width: "80%",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
    },
    resultContainer: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
    },
});
