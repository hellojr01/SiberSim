import { Stack } from "expo-router";

export default function MainLayout() {
    return (
        <Stack
            initialRouteName="welcome"
            screenOptions={{
                title: "Begineer's Welcome Page",
                headerShown: false,
            }}
        >
            <Stack.Screen name="welcome" options={{ title: "Welcome Page" }} />
            <Stack.Screen
                name="onboard/index"
                options={{ title: "Onboard Page" }}
            />
            <Stack.Screen name="login" options={{ title: "Login Page" }} />
            <Stack.Screen
                name="register"
                options={{ title: "Register Page" }}
            />
            <Stack.Screen
                name="forgotpassword/index"
                options={{ title: "Forgot Password" }}
            />
            <Stack.Screen name="logout" options={{ title: "Log Out Page" }} />
            <Stack.Screen
                name="simulation/testsim"
                options={{ title: "Test Simulation Page" }}
            />
            <Stack.Screen
                name="reward"
                options={{ title: "Reward/Shopping Page" }}
            />
            <Stack.Screen
                name="ocrReader"
                options={{ title: "Archieve for OCR Reader" }}
            />
            <Stack.Screen
                // will remove it eventually
                name="test"
                options={{ title: "Loader Test Preview" }}
            />
            {/*
            <Stack.Screen // This is for the forgot password (verification & new password) might need back later
                name="(pages)/forgotpassword/newPassword"
                options={{
                    title: "New Password Page",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(pages)/forgotpassword/verification"
                options={{
                    title: "Verification Page",
                    headerShown: false,
                }}
            />
            */}
        </Stack>
    );
}
