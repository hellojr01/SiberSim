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
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

import { color } from "../../constants/Colors";

const LoginScreen = () => {
    const windowWidth = Dimensions.get("window").width;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={styles.base}>
            <View style={styles.top}>
                <Text style={styles.title}>Login</Text>
            </View>

            <View
                style={{
                    ...styles.middle,
                    width: windowWidth > 480 ? 300 : windowWidth * 0.8,
                }}
            >
                <FontAwesome
                    name="user-circle"
                    size={windowWidth > 640 ? 200 : windowWidth * 0.4}
                    color={color.americanBlue}
                    style={{ marginVertical: 20 }}
                />

                <View style={styles.labelInputContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        value={username}
                        style={styles.input}
                        placeholder="Enter your e-mail"
                        autoCapitalize="none"
                        onChangeText={(text) => setUsername(text)}
                    />
                </View>

                <View style={styles.labelInputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        value={password}
                        style={styles.input}
                        placeholder="Enter your password"
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.forgotPassword}
                    onPress={() => router.push("/forgotpassword/1")}
                >
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => router.push("/home")}
                >
                    <Text
                        style={{
                            ...styles.loginButtonText,
                            width: windowWidth > 480 ? 300 : windowWidth * 0.7,
                        }}
                    >
                        Log in
                    </Text>
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>
                        Don't have an account yet?{" "}
                    </Text>
                    <TouchableOpacity onPress={() => router.push("/register")}>
                        <Text style={styles.registerTextLink}>
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
    forgotPassword: {
        alignSelf: "flex-end",
        marginBottom: 16,
    },
    forgotText: {
        fontFamily: "NotoSansMedium",
        fontSize: 14,
        color: color.purple,
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
    registerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline",
        flexWrap: "wrap",
    },
    registerText: {
        fontFamily: "NotoSans",
        fontSize: 14,
        color: color.americanBlue,
    },
    registerTextLink: {
        fontFamily: "NotoSansMedium",
        fontSize: 14,
        color: color.purple,
    },
});
