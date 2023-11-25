import React from "react";
import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from "react-native";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { color } from "../../../constants/Colors";

const ForgotPasswordScreen = () => {
    const windowWidth = Dimensions.get("window").width;

    const { forgotPassword } = useLocalSearchParams();
    let value = 1;
    if (forgotPassword !== undefined)
        if (!Array.isArray(forgotPassword))
            if (
                !Boolean((value = Number(forgotPassword))) ||
                value > 3 ||
                value < 1
            )
                return <Redirect href="/forgotPassword" />;

    return (
        <SafeAreaView style={styles.base}>
            <View style={styles.top}>
                <Text style={styles.title}>Forgot Password</Text>
            </View>

            <View
                style={{
                    ...styles.middle1,
                    width: windowWidth > 480 ? 300 : windowWidth * 0.8,
                }}
            >
                {value == 1 && (
                    <View style={styles.labelInputContainer}>
                        <Text style={styles.label}>Phone number / Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your phone number or email"
                        />
                    </View>
                )}
                {value == 2 && (
                    <View style={styles.labelInputContainer}>
                        <View style={{ width: "100%" }}>
                            <Text style={styles.label}>Verification code</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter 6-digit verification code"
                            />
                            <TouchableOpacity style={{ alignSelf: "flex-end" }}>
                                <Text style={styles.textLink}>Resend code</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                {value == 3 && (
                    <View style={{ width: "100%" }}>
                        <View style={styles.labelInputContainer}>
                            <Text style={styles.label}>New password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your new password"
                            />
                        </View>

                        <View style={styles.labelInputContainer}>
                            <Text style={styles.label}>
                                Confirm new password
                            </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm your new password"
                            />
                        </View>
                    </View>
                )}
            </View>

            <View style={styles.middle2}>
                <View
                    style={{
                        ...styles.instructionsContainer,
                        width: windowWidth > 480 ? 300 : windowWidth * 0.85,
                    }}
                >
                    <View
                        style={{
                            ...styles.rectangle,
                            height: "auto",
                        }}
                    >
                        <Text style={styles.instructionsText}>
                            {value == 1 &&
                                "Instruction: \nPlease enter the account which you want to reset the password."}
                            {value == 2 &&
                                "Instruction: \nPlease check your inbox for 6-pin verification code."}
                            {value == 3 &&
                                "Instruction: \nPlease enter a new password for your account."}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        if (value >= 1 && value < 3)
                            router.replace(`/forgotpassword/${value + 1}`);
                        else router.replace("/login");
                    }}
                >
                    <Text
                        style={{
                            ...styles.buttonText,
                            width: windowWidth > 480 ? 300 : windowWidth * 0.7,
                        }}
                    >
                        {value == 1 && "Continue"}
                        {value == 2 && "Confirm"}
                        {value == 3 && "Reset Password"}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.lavender,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    top: {
        justifyContent: "flex-start",
        alignItems: "center",
        bottom: "10%",
    },
    middle1: {
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 20,
        maxHeight: "40%",
        bottom: "10%",
    },
    middle2: {
        justifyContent: "flex-end",
        alignItems: "center",
        top: "10%",
    },
    bottom: {
        justifyContent: "flex-end",
        alignItems: "center",
        top: "10%",
    },
    title: {
        fontFamily: "NotoSansBold",
        fontSize: 30,
        textAlign: "center",
        color: color.americanBlue,
        marginBottom: 16,
    },
    labelInputContainer: {
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: 16,
    },
    label: {
        fontFamily: "NotoSansMedium",
        fontSize: 14,
        marginBottom: 8,
    },
    input: {
        width: "100%",
        fontFamily: "NotoSans",
        fontSize: 14,
        minHeight: 50,
        lineHeight: 20,
        color: color.americanBlue,
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.10)",
        borderRadius: 6,
        paddingHorizontal: 10,
    },
    textLink: {
        fontFamily: "NotoSansMedium",
        fontSize: 14,
        color: color.americanBlue,
        marginTop: 16,
    },
    instructionsContainer: {
        alignItems: "center",
        marginBottom: 48,
        marginTop: 16,
    },
    rectangle: {
        width: 320,
        height: 90,
        backgroundColor: color.purple,
        borderRadius: 8,
        padding: 16,
    },
    instructionsText: {
        fontFamily: "NotoSansMedium",
        fontSize: 12,
        lineHeight: 20,
        color: color.white,
    },
    button: {
        backgroundColor: color.americanBlue,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        shadowColor: color.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: 10,
    },
    buttonText: {
        fontFamily: "NotoSansSemiBold",
        fontSize: 16,
        color: color.white,
        textAlign: "center",
    },
});
