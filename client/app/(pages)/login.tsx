import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { color } from "../../constants/Colors";
import Logo1 from "../../assets/images/mdi-account-circle.svg";

const LoginScreen = () => {
    const windowWidth = Dimensions.get("window").width;

    return (
        <View style={styles.base}>
            <Text style={styles.title}>Login</Text>
            <FontAwesome
                name="user-circle"
                size={windowWidth > 640 ? 200 : windowWidth * 0.5}
                color={color.americanBlue}
            />
            {/* <Logo1 width="70%" height="70%" /> */}

            <View style={styles.labelInputContainer}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your e-mail"
                />
            </View>

            <View style={styles.labelInputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>
                Don't have an account yet?{" "}
                <Text style={styles.registerLink}>Register Now</Text>
            </Text>
        </View>
    );
};

export default LoginScreen;

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
    forgotPassword: {
        alignSelf: "flex-end",
        color: color.purple,
        marginBottom: 129,
    },
    loginButton: {
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
    loginButtonText: {
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
