import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { color } from "@constants/Colors";

const EmailDetailScreen = () => {
    // Sample email data
    const email = {
        id: "1",
        from: "John Doe",
        to: "Jane Smith",
        date: "2023-12-08 15:30",
        subject: "Meeting Tomorrow",
        content:
            "Hi Jane,\n\nLet's meet tomorrow at 10 AM to discuss the project. Please confirm your availability.\n\nBest regards,\nJohn",
    };

    return (
        <ScrollView style={styles.container}>
            {/* Email Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>{email.subject}</Text>
            </View>
            <View style={styles.header}>
                <Text
                    style={styles.subHeaderText}
                >{`From: ${email.from}`}</Text>
                <Text style={styles.subHeaderText}>{`To: ${email.to}`}</Text>
                <Text
                    style={styles.subHeaderText}
                >{`Date: ${email.date}`}</Text>
            </View>

            {/* Email Content */}
            <View style={styles.content}>
                <Text style={styles.contentText}>{email.content}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: color.americanBlue,
    },
    subHeaderText: {
        fontSize: 16,
        color: "#555",
    },
    content: {
        marginTop: 16,
    },
    contentText: {
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
    },
});

export default EmailDetailScreen;
