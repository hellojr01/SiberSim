import { Stack } from "expo-router";

export default function ProfileLayout() {
    return (
        <Stack
            screenOptions={{
                title: "User Profile",
                headerShown: false,
            }}
        />
    );
}
