import React, { useState } from "react";
import {
    View,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from "react-native";
import { color } from "../../constants/Colors";
import { router } from "expo-router";
import { hide } from "expo-splash-screen";

const registerScreen = () => {
    const windowWidth = Dimensions.get("window").width;
    const [isChecked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(!isChecked);
    };

    return (
        <SafeAreaView style={styles.base}>
            <View style={styles.top}>
                <Text style={styles.title}>Create New Account</Text>
            </View>
            <View
                style={{
                    ...styles.middle,
                    width: windowWidth > 480 ? 300 : windowWidth * 0.8,
                }}
            >
                <View style={styles.labelInputContainer}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name as per NRIC"
                    />
                </View>

                <View style={styles.labelInputContainer}>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your phone number"
                    />
                </View>

                <View style={styles.labelInputContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                    />
                </View>

                <View style={styles.labelInputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                        onPress={toggleCheckbox}
                        style={styles.checkbox}
                    >
                        {isChecked && (
                            <Text style={styles.checkboxTick}>✓</Text>
                        )}
                    </TouchableOpacity>
                    <Text style={{ ...styles.text, marginBottom: 16 }}>
                        By continuing you accept our{" "}
                        <Text style={styles.textLink}>Privacy Policy</Text>
                        {" and "}
                        <Text style={styles.textLink}>Terms of Use</Text>
                    </Text>
                </View>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => router.push("/login")}
                >
                    <Text
                        style={{
                            ...styles.registerButtonText,
                            width: windowWidth > 480 ? 300 : windowWidth * 0.7,
                        }}
                    >
                        Register
                    </Text>
                </TouchableOpacity>

                <View style={styles.loginContainer}>
                    <Text style={styles.text}>
                        Already have an account?&nbsp;
                    </Text>
                    <TouchableOpacity onPress={() => router.push("/login")}>
                        <Text style={styles.textLink}>Login Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default registerScreen;

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
    },
    middle: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    bottom: {
        justifyContent: "flex-end",
        alignItems: "center",
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
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    checkbox: {
        width: 20,
        height: 20,
        backgroundColor: color.white,
        borderColor: color.americanBlue,
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 8,
    },
    checkboxTick: {
        alignSelf: "center",
        fontSize: 14,
        color: color.mediumSlateBlue,
    },
    text: {
        fontFamily: "NotoSans",
        fontSize: 14,
        color: color.americanBlue,
    },
    textLink: {
        fontFamily: "NotoSansMedium",
        fontSize: 14,
        color: color.purple,
    },
    registerButton: {
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
    registerButtonText: {
        fontFamily: "NotoSansSemiBold",
        fontSize: 16,
        color: color.white,
        textAlign: "center",
    },
    loginContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline",
        flexWrap: "wrap",
    },
});
