import React, { useState, useRef } from "react";
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";
import { color } from "@constants/Colors";
import Button from "@components/CustomButton";

interface MessageObj {
    id: number;
    text: string;
    user: "user" | "bot";
}

// Create a functional component for the chatbox
const ChatBox = () => {
    // Reference to the FlatList component
    const flatlistRef = useRef<FlatList>(null);

    // State to manage the messages
    const [messages, setMessages] = useState<MessageObj[]>([]);
    // State to manage the current input message
    const [inputMessage, setInputMessage] = useState("");
    // State to update the height of the input box with line change
    const [height, setHeight] = useState<number>(35);

    // Function to handle sending a message
    const sendMessage = (user: "user" | "bot") => {
        if (inputMessage.trim() !== "") {
            setMessages([
                ...messages,
                { id: messages.length + 1, text: inputMessage, user: user },
            ]);
            setInputMessage("");
            setHeight(35);
        }
    };

    // Render function for each chat message
    const renderMessage = ({ item }: any) => (
        <View
            style={{
                ...styles.messageContainer,
                justifyContent: item.user == "user" ? "flex-end" : "flex-start",
            }}
        >
            <View
                style={{
                    ...styles.messageBubble,
                    backgroundColor:
                        item.user == "user" ? color.purple : color.charcoal,
                }}
            >
                <Text
                    style={{
                        color: item.user == "user" ? color.white : color.white,
                    }}
                >
                    {item.text}
                </Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Display the chat messages */}
            <FlatList
                contentContainerStyle={{ flexDirection: "column-reverse" }}
                inverted
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id.toString()}
                ref={flatlistRef}
                onContentSizeChange={() => flatlistRef.current?.scrollToEnd()}
            />

            {/* Input area for typing messages */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={{
                        ...styles.input,
                        height: height,
                    }}
                    placeholder="Type a message..."
                    value={inputMessage}
                    onChangeText={(text) => setInputMessage(text)}
                    multiline
                    numberOfLines={3}
                    maxLength={500}
                    verticalAlign="top"
                    onContentSizeChange={(event) => {
                        setHeight(event.nativeEvent.contentSize.height);
                    }}
                />
                <Button
                    onPress={() => sendMessage("bot")}
                    buttonStyle={styles.sendButton}
                    textStyle={{
                        color: color.white,
                    }}
                    title="Send"
                />
            </View>
        </View>
    );
};

// Styles for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: color.lavender,
    },
    messageContainer: {
        flexDirection: "row",
        marginBottom: 8,
    },
    messageBubble: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: color.mediumSlateBlue,
        maxWidth: "80%",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginTop: 16,
    },
    input: {
        flex: 1,
        marginRight: 8,
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: color.white,
    },
    sendButton: {
        justifyContent: "center",
        backgroundColor: color.purple,
        borderRadius: 8,
        padding: 8,
        width: 60,
        height: 35,
    },
});

// Export the ChatBox component
export default ChatBox;
