import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import { color } from "@constants/Colors";
import Button from "@components/CustomButton";
import { Ionicons } from "@expo/vector-icons";

// Card component
const Card = ({ title, children }: any) => (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        {children}
    </View>
);

interface BankAppProps {
    clear?: boolean;
    onPress: () => void;
}

// BankApp component
const BankApp = ({ clear, onPress }: BankAppProps) => {
    const bankDetails = {
        name: "Bobbie",
        accountNumber: "1234-5678-9012-3456",
        balance: "$10,000.00",
    };

    const [transferAmount, setTransferAmount] = useState("");

    const handleTransfer = () => {
        console.log(`Transfer ${transferAmount} to another account`);
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    alignItems: "flex-start",
                    paddingBottom: 15,
                }}
            >
                <Ionicons.Button
                    name="arrow-back"
                    size={25}
                    style={{ backgroundColor: color.charcoal }}
                    onPress={() => onPress()}
                />
            </View>
            {/* Bank details card */}
            <Card title="Bank Details">
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.info}>{bankDetails.name}</Text>

                <Text style={styles.label}>Account Number:</Text>
                <Text style={styles.info}>{bankDetails.accountNumber}</Text>

                <Text style={styles.label}>Balance:</Text>
                <Text style={styles.info}>
                    {clear ? 0 : bankDetails.balance}
                </Text>
            </Card>

            {/* Transfer card */}
            <Card title="Transfer Section">
                <Text style={styles.label}>Transfer Account Number:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter account number"
                    keyboardType="numeric"
                    value={transferAmount}
                    editable={false}
                    onChangeText={(text) => setTransferAmount(text)}
                />

                <Text style={styles.label}>Transfer Amount:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount"
                    keyboardType="numeric"
                    value={transferAmount}
                    editable={false}
                    onChangeText={(text) => setTransferAmount(text)}
                />

                <Button
                    title="Transfer"
                    onPress={handleTransfer}
                    buttonStyle={styles.button}
                    textStyle={{ color: color.black, fontSize: 16 }}
                    disabled
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "space-evenly",
        backgroundColor: color.gray,
    },
    card: {
        backgroundColor: color.white,
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    info: {
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        fontSize: 16,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.gold,
        borderRadius: 8,
        padding: 8,
        width: "auto",
        height: 35,
    },
});

export default BankApp;
