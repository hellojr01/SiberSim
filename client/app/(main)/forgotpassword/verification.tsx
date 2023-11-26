import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

import { color } from "../../../constants/Colors";

const VerificationScreen = () => {
    return (
        <View style={styles.base}>
            <Text style={styles.title}>Forgot Password</Text>

            <View style={styles.labelInputContainer}>
                <Text style={styles.label}>Verification code</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter verification code"
                />
            </View>

            <TouchableOpacity style={styles.resendCode}>
                <Text>Resend code</Text>
            </TouchableOpacity>

            <View style={styles.instructionsContainer}>
                <View style={styles.rectangle}>
                    <Text style={styles.instructionsText}>
                        Instruction:
                        {"\n"}
                        Please check your inbox for 6-pin verification code.
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

export default VerificationScreen;

const styles = StyleSheet.create({
    base: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.lavender,
        padding: 16,
    },
    title: {
        fontFamily: "NotoSans",
        color: color.americanBlue,
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 52,
    },
    labelInputContainer: {
        flexDirection: "column",
        width: "100%",
        height: "10%",
        alignItems: "flex-start",
        marginBottom: 317,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        flex: 1,
        width: "100%",
        color: color.americanBlue,
        fontFamily: "Roboto",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: 20,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.10)",
        borderRadius: 6,
        paddingHorizontal: 10,
        backgroundColor: "#FFF",
    },
    instructionsContainer: {
        alignItems: "center",
        marginBottom: 48,
    },
    rectangle: {
        width: 336,
        height: 90,
        backgroundColor: color.purple,
        padding: 16,
        borderRadius: 8,
    },
    instructionsText: {
        fontSize: 12,
        color: color.white,
        fontFamily: "NotoSans",
        letterSpacing: 0.144,
    },
    resendCode: {
        alignSelf: "flex-end",
        color: color.americanBlue,
        marginBottom: 129,
    },
    continueButton: {
        backgroundColor: color.americanBlue,
        width: 312,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },
    continueButtonText: {
        color: color.white,
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
    },
    continueText: {
        marginTop: 16,
        fontSize: 14,
        color: color.white,
        fontFamily: "NotoSans",
        fontWeight: "500",
    },
    continueLink: {
        color: color.purple,
    },
});
