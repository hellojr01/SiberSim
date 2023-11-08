import { Stack } from "expo-router";

export default function SimulationLayout() {
    return (
        <Stack
            screenOptions={{
                title: "Simulation",
                headerShown: false,
            }}
        />
    );
}
