// Install required packages
// expo install @react-native-community/viewpager react-native-paper

// LeaderboardScreen.js
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Appbar, Card, Title, Paragraph } from "react-native-paper";

import { color } from "@constants/Colors";

const LeaderboardScreen = () => {
    const data = [
        { id: "1", name: "John Doe", score: 5 },
        { id: "2", name: "Jane Doe", score: 8 },
        { id: "3", name: "Bob Smith", score: 10 },
        // Add more data as needed
    ];

    const renderItem = ({ item }: any) => (
        <Card style={styles.card}>
            <Card.Title
                title={item.name}
                titleVariant="titleLarge"
                subtitle={`${item.score} Turns`}
                subtitleVariant="bodyMedium"
                left={(props) => (
                    <Text style={{ fontSize: 20, color: color.red }}>
                        {item.id}
                    </Text>
                )}
            />
        </Card>
    );

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Leaderboard: Challenge #" />
            </Appbar.Header>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.lavender,
    },
    card: {
        margin: 8,
    },
});

export default LeaderboardScreen;
