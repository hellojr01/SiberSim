import { Stack } from "expo-router";

export default function BlogLayout() {
    return (
        <Stack
            screenOptions={{
                title: "Cyber Blog",
                headerShown: false,
            }}
        />
    );
}
