import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { color } from "../../constants/Colors";

const registerScreen = () => {
    const [isChecked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(!isChecked);
    };

    return (
        <View style={styles.base}>
            <Text style={styles.title}>Create New Account</Text>

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
                    {isChecked && <Text style={styles.checkboxTick}>✓</Text>}
                </TouchableOpacity>
                <Text style={styles.checkboxText}>
                    By continuing you accept our{" "}
                    <Text style={styles.linkText}>Privacy Policy</Text>
                    {" and "}
                    <Text style={styles.linkText}>Terms of Use</Text>
                </Text>
            </View>

            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>
                Already have an account?{" "}
                <Text style={styles.registerLink}>Login Now</Text>
            </Text>
        </View>
    );
};

export default registerScreen;

const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.lavender,
        padding: 16,
    },
    title: {
        fontFamily: "NotoSans",
        color: color.americanBlue,
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 16,
    },
    labelInputContainer: {
        flexDirection: "column",
        width: "100%",
        height: "10%",
        alignItems: "flex-start",
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        flex: 1,
        width: "100%",
        color: "#453C67",
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
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    checkbox: {
        width: 20,
        height: 20,
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: "#453C67",
        borderRadius: 4,
        marginRight: 8,
        marginBottom: 150,
    },
    checkboxTick: {
        color: color.mediumSlateBlue,
        fontSize: 14,
        alignSelf: "center",
    },
    checkboxText: {
        fontSize: 14,
        color: "#453C67",
        fontFamily: "Roboto",
        marginBottom: 150,
    },
    linkText: {
        color: color.purple,
    },
    registerButton: {
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
    registerButtonText: {
        color: color.white,
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center",
    },
    registerText: {
        marginTop: 16,
        fontSize: 14,
        color: color.deepBlue,
        fontFamily: "NotoSans",
        fontWeight: "500",
    },
    registerLink: {
        color: color.purple,
    },
});
