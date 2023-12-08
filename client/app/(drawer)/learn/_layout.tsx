import { Stack } from "expo-router";

export default function SimulationLayout() {
    return (
        <Stack
            screenOptions={{
                title: "Learn",
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: "Simulation Home",
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    title: "Learn Id #[id]",
                }}
            />
        </Stack>
    );
}
