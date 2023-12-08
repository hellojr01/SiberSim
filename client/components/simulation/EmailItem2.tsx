import React from "react";
import { View, Text, FlatList } from "react-native";
import { Appbar, List } from "react-native-paper";

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

const EmailItem = ({ email, onPress }: any) => (
    <List.Item
        title={email.sender}
        description={email.subject}
        onPress={() => onPress(email)}
    />
);

const EmailScreen = () => {
    const handleEmailPress = (email: any) => {
        // Implement navigation to the email detail screen or any other action
        console.log("Email pressed:", email);
    };

    const handleComposePress = () => {
        // Implement navigation to the compose email screen or any other action
        console.log("Compose pressed");
    };

    return (
        <View style={{ flex: 1 }}>
            {/* Appbar/Header */}
            <Appbar.Header>
                <Appbar.Content title="Inbox" />
            </Appbar.Header>

            {/* Email List */}
            <FlatList
                data={emails}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <EmailItem email={item} onPress={handleEmailPress} />
                )}
            />

            {/* Compose Button */}
            <Appbar
                style={{ position: "absolute", right: 0, left: 0, bottom: 0 }}
            >
                <Appbar.Action icon="email" onPress={handleComposePress} />
            </Appbar>
        </View>
    );
};

export default EmailScreen;
