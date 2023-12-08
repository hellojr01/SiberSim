// RewardItem.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface RewardItemProps {
    reward: {
        id: number;
        name: string;
        points: number;
    };
    onPress: () => void;
}

const RewardItem: React.FC<RewardItemProps> = ({ reward, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.rewardItem}>
            <Text style={styles.rewardName}>{reward.name}</Text>
            <Text style={styles.points}>{`${reward.points} Points`}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    rewardItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginVertical: 5,
        backgroundColor: "#F0F0F0",
        borderRadius: 8,
    },
    rewardName: {
        fontSize: 16,
        maxWidth: 150,
    },
    points: {
        fontSize: 14,
        color: "green",
        maxWidth: 50,
    },
});

export default RewardItem;
