// Install required packages
// expo install @react-native-community/viewpager react-native-paper

// LeaderboardScreen.js
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Appbar, Card, Title, Paragraph } from "react-native-paper";

const LeaderboardScreen = () => {
    const data = [
        { id: "1", name: "John Doe", score: 5 },
        { id: "2", name: "Jane Doe", score: 8 },
        { id: "3", name: "Bob Smith", score: 10 },
        // Add more data as needed
    ];

    const renderItem = ({ item }: any) => (
        <Card style={styles.card}>
            <Card.Content>
                {item.id}
                <Title>{item.name}</Title>
                <Paragraph>{item.score} Messages</Paragraph>
            </Card.Content>
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
    },
    card: {
        margin: 8,
    },
});

export default LeaderboardScreen;
