import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        NotoSans: require("../assets/fonts/NotoSans-Regular.ttf"),
        NotoSansBold: require("../assets/fonts/NotoSans-Bold.ttf"),
        NotoSansSemiBold: require("../assets/fonts/NotoSans-SemiBold.ttf"),
        NotoSansItalic: require("../assets/fonts/NotoSans-Italic.ttf"),
        NotoSansBoldItalic: require("../assets/fonts/NotoSans-BoldItalic.ttf"),
        NotoSansSemiBoldItalic: require("../assets/fonts/NotoSans-SemiBoldItalic.ttf"),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <Stack initialRouteName="index">
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                    name="modal"
                    options={{ presentation: "modal" }}
                />
                <Stack.Screen
                    name="(pages)/welcome"
                    options={{
                        title: "Welcome Page",
                        presentation: "modal",
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="(pages)/onboard/index"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="(pages)/onboard/[onboardId]"
                    options={{
                        title: "Onboard Page",
                        presentation: "modal",
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="(pages)/login"
                    options={{
                        title: "Login Page",
                        presentation: "modal",
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="(pages)/forgotPassword"
                    options={{
                        title: "Forgot Password Page",
                        presentation: "modal",
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="(pages)/newPassword"
                    options={{
                        title: "New Password Page",
                        presentation: "modal",
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="(pages)/register"
                    options={{
                        title: "Register Page",
                        presentation: "modal",
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="(pages)/verification"
                    options={{
                        title: "Verification Page",
                        presentation: "modal",
                        headerShown: false,
                    }}
                />
            </Stack>
        </ThemeProvider>
    );
}
