// RewardPage.tsx
import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { Link, router } from "expo-router";
import * as ImagePicker from "expo-image-picker";

import RewardItem from "@components/RewardItem";
import Button from "@components/CustomButton";
import { color } from "@constants/Colors";

interface RewardObj {
    id: number;
    name: string;
    points: number;
}

interface RewardPageProps {
    onPress: () => void;
}

const RewardPage: React.FC<RewardPageProps> = ({ onPress }) => {
    const [userPoints, setUserPoints] = React.useState<number>(200); // Example points
    const [selectedReward, setSelectedReward] = React.useState<RewardObj[]>([]);
    const [showTips, setShowTips] = useState<boolean>(false); // Example tips

    const rewardsData = [
        { id: 1, name: "Unlock Simulation 1", points: 150 },
        { id: 2, name: "Unlock Simulation 2", points: 200 },
        { id: 3, name: "Purchase 1 Challenge Ticket", points: 100 },
    ];

    const handleRewardPress = (reward: {
        id: number;
        name: string;
        points: number;
    }) => {
        if (userPoints >= reward.points) {
            setSelectedReward([...selectedReward, reward]);
            setUserPoints(userPoints - reward.points);
        } else {
            console.log("Insufficient points");
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setShowTips(!showTips)}
                disabled={showTips}
            >
                <Text
                    style={{
                        ...styles.pointsText,
                        marginBottom: showTips ? 10 : 40,
                    }}
                >{`Your Points: ${userPoints}`}</Text>
            </TouchableOpacity>
            {showTips && setTimeout(() => setShowTips(!showTips), 3000) && (
                <Text
                    style={{ fontSize: 16, color: color.red, marginBottom: 10 }}
                >
                    Earn more points by completing new lessons
                </Text>
            )}

            <FlatList
                data={rewardsData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <RewardItem
                        reward={item}
                        onPress={() => handleRewardPress(item)}
                    />
                )}
            />
            {selectedReward.length != 0 &&
                setTimeout(
                    () =>
                        setSelectedReward(
                            selectedReward.filter((item, index) => index != 0)
                        ),
                    3000
                ) && (
                    <Animated.View
                        style={styles.selectedRewardContainer}
                        entering={FadeIn.duration(300)}
                        exiting={FadeOut.duration(300)}
                    >
                        <Text style={styles.selectedRewardText}>
                            {`Congratulations! You've earned a ${selectedReward[0].name}.`}
                        </Text>
                    </Animated.View>
                )}
            {
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <Button
                        title="Close"
                        buttonStyle={styles.closeButton}
                        textStyle={{ color: color.white }}
                        onPress={onPress}
                    ></Button>
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFF",
    },
    pointsText: {
        fontSize: 18,
    },
    selectedRewardContainer: {
        marginVertical: 20,
        backgroundColor: "lightgreen",
        padding: 15,
        borderRadius: 8,
    },
    selectedRewardText: {
        fontSize: 16,
        color: "green",
    },
    closeButton: {
        justifyContent: "center",
        backgroundColor: color.red,
        borderRadius: 8,
        padding: 8,
        width: 120,
        height: 35,
    },
});

export default RewardPage;
