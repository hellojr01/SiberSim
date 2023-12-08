import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { color } from "@constants/Colors";

interface EmailDetailScreenProps {
    onPress: () => void;
}

const EmailDetailScreen = ({ onPress }: EmailDetailScreenProps) => {
    // Sample email data
    const email = {
        id: "1",
        from: "errill@thegrange.com",
        to: "me",
        date: "2023-11-28 15:30",
        subject: "Last Warning",
        content:
            "Hi,\n\nThis is my last warning!\n\nI write you since I attached a tro jan on the web site with porno which you have viewed. My troj an captured all your private data and switched on your camera which recorded the act of you solitary sex. Just after that the trojan saved your contact list. I will erase the compromising video records and info if you transfer $640 USD in bit coin quivalent.\n\nThis is address for payment: 1NywBZ 43iaed dRCsFHmu sALeMBR 8MggR1n\n\nAttention please! I have specified my wallet with spaces, please make sure that you key-in my address without spaces to be sure that your coins successfully reach my wallet!\n\nI give you 24 hours after you open my message for making the payment. As soon as you read the message I'll see it right away. It is not necessary to tell me that you have sent money to me. This address is connected to you, my system will erased automatically after transfer confirmation.\n\nIf you need 48h just open the calculator and press plus button 3 times.\n\nIf you don't pay, I'll send this dirt to all your contacts. Let me remind you - I see what you're doing. If you try to deceive me, I'll know it immediately. Bye. Your life can be ruined.",
    };

    return (
        <ScrollView style={styles.container}>
            <View
                style={{
                    alignItems: "flex-start",
                }}
            >
                <Ionicons.Button
                    name="arrow-back"
                    size={25}
                    style={{ backgroundColor: color.charcoal }}
                    onPress={() => onPress()}
                />
            </View>
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
        // margin: 16,
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
        color: color.black,
    },
    subHeaderText: {
        fontSize: 16,
        color: "#555",
    },
    content: {
        marginTop: 16,
        marginBottom: 32,
    },
    contentText: {
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
    },
});

export default EmailDetailScreen;
