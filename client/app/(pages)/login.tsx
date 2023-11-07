import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { color } from "../../constants/Colors";
import { router } from "expo-router";

const LoginScreen = () => {
    const windowWidth = Dimensions.get("window").width;

    return (
        <SafeAreaView style={styles.base}>
            <View style={styles.top}>
                <Text style={styles.title}>Login</Text>
            </View>

            <View style={styles.middle}>
                <FontAwesome
                    name="user-circle"
                    size={windowWidth > 640 ? 200 : windowWidth * 0.4}
                    color={color.americanBlue}
                    style={{ marginVertical: 20 }}
                />

                <View
                    style={{
                        ...styles.labelInputContainer,
                        width: windowWidth > 480 ? 300 : windowWidth * 0.7,
                    }}
                >
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your e-mail"
                    />
                </View>

                <View
                    style={{
                        ...styles.labelInputContainer,
                        width: windowWidth > 480 ? 300 : windowWidth * 0.7,
                    }}
                >
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text
                        style={{
                            ...styles.loginButtonText,
                            width: windowWidth > 480 ? 300 : windowWidth * 0.7,
                        }}
                    >
                        Log in
                    </Text>
                </TouchableOpacity>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "baseline",
                    }}
                >
                    <Text style={styles.registerText}>
                        Don't have an account yet?{" "}
                    </Text>
                    <TouchableOpacity onPress={() => router.push("/register")}>
                        <Text
                            style={{
                                ...styles.registerText,
                                color: color.purple,
                                fontFamily: "NotoSansSemiBold",
                            }}
                        >
                            Register Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    base: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.lavender,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    top: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    middle: {
        flex: 6,
        flexShrink: 1,
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 20,
    },
    bottom: {
        flex: 1,
        flexShrink: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    title: {
        fontFamily: "NotoSansBold",
        color: color.americanBlue,
        fontSize: 30,
        marginBottom: 16,
    },
    labelInputContainer: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: 16,
    },
    label: {
        fontFamily: "NotoSansSemiBold",
        fontSize: 14,
        marginBottom: 8,
    },
    input: {
        width: "100%",
        color: color.americanBlue,
        fontFamily: "NotoSans",
        fontSize: 14,
        minHeight: 50,
        lineHeight: 20,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.10)",
        borderRadius: 6,
        paddingHorizontal: 10,
        backgroundColor: color.white,
    },
    forgotPassword: {
        alignSelf: "flex-end",
        marginBottom: 129,
    },
    forgotText: {
        fontFamily: "NotoSansSemiBold",
        color: color.purple,
        fontSize: 14,
    },
    loginButton: {
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
    loginButtonText: {
        fontFamily: "NotoSansSemiBold",
        fontSize: 16,
        color: color.white,
        textAlign: "center",
    },
    registerText: {
        color: color.deepBlue,
        fontFamily: "NotoSans",
        fontSize: 14,
    },
});
