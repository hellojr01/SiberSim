import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

const emails = [
    {
        id: "1",
        sender: "John Doe",
        subject: "Meeting Tomorrow",
        body: "Hi, let's meet tomorrow at 10 AM.",
    },
    {
        id: "2",
        sender: "Jane Smith",
        subject: "Project Update",
        body: "Here is the latest update on our project.",
    },
    // Add more emails as needed
];

interface EmailProps {
    id: string;
    sender: string;
    subject: string;
    body: string;
}

const EmailItem = ({ email, onPress }: any) => (
    <TouchableOpacity style={styles.emailItem} onPress={() => onPress(email)}>
        <Text style={styles.sender}>{email.sender}</Text>
        <Text style={styles.subject}>{email.subject}</Text>
    </TouchableOpacity>
);

const EmailList = ({ data, onPress }: any) => (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EmailItem email={item} onPress={onPress} />}
    />
);

const EmailScreen = () => {
    const handleEmailPress = (email: string) => {
        // Implement navigation to the email detail screen or any other action
        console.log("Email pressed:", email);
    };

    const handleComposePress = () => {
        // Implement navigation to the compose email screen or any other action
        console.log("Compose pressed");
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Inbox</Text>
            </View>

            {/* Email List */}
            <EmailList data={emails} onPress={handleEmailPress} />

            {/* Compose Button */}
            <TouchableOpacity
                style={styles.composeButton}
                onPress={handleComposePress}
            >
                <Text style={styles.composeButtonText}>Compose</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    emailItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    sender: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    subject: {
        fontSize: 16,
        color: "#555",
    },
    composeButton: {
        backgroundColor: "#4CAF50",
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    composeButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default EmailScreen;
