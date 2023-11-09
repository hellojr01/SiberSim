import { Stack } from "expo-router";

export default function BlogLayout() {
    return (
        <Stack
            screenOptions={{
                title: "Cyber Blog",
                headerShown: false,
            }}>
            <Stack.Screen
            name="index"
            options={{
                title: "Home",
            }}
            />
            <Stack.Screen
                name="addBlog"
                options={{
                    title: "Add Blog",
                    presentation: "modal",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    title: "Back to Cyberblog",
                    presentation: "modal",
                    headerShown: true,
                }}
            />
        </Stack>
    );
}
