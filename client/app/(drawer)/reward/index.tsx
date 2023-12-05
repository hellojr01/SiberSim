// RewardPage.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RewardItem from '@components/RewardItem';

const RewardPage: React.FC = () => {
  const [userPoints, setUserPoints] = useState(100); // Example points
  const [selectedReward, setSelectedReward] = useState<{
    id: number;
    name: string;
    points: number;
  } | null>(null);

  const rewardsData = [
    { id: 1, name: 'Discount Coupon 10%', points: 50 },
    { id: 2, name: 'Free Shipping', points: 30 },
    { id: 3, name: 'Gift Card $10', points: 80 },
  ];

  const handleRewardPress = (reward: { id: number; name: string; points: number }) => {
    if (userPoints >= reward.points) {
      setSelectedReward(reward);
      setUserPoints(userPoints - reward.points);
    } else {
      console.log('Insufficient points');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>{`Your Points: ${userPoints}`}</Text>
      <FlatList
        data={rewardsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RewardItem reward={item} onPress={() => handleRewardPress(item)} />
        )}
      />
      {selectedReward && (
        <View style={styles.selectedRewardContainer}>
          <Text style={styles.selectedRewardText}>
            {`Congratulations! You've earned a ${selectedReward.name}.`}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  pointsText: {
    fontSize: 18,
    marginBottom: 15,
  },
  selectedRewardContainer: {
    marginTop: 20,
    backgroundColor: 'lightgreen',
    padding: 15,
    borderRadius: 8,
  },
  selectedRewardText: {
    fontSize: 16,
    color: 'green',
  },
});

export default RewardPage;
