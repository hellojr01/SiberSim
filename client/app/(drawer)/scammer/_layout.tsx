import { Stack } from "expo-router";

export default function ScammerLayout() {
    return (
        <Stack
            screenOptions={{
                title: "Identify Scammer",
                headerShown: false,
            }}
        />
    );
}
