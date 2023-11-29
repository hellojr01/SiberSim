import { Stack } from "expo-router";

export const unstable_settings = {
    // Ensure that reloading on a page keeps a back button present.
    initialRouteName: "index",
};

export default function BlogLayout() {
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                title: "Cyber Blog",
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: "CyBlog Home",
                }}
            />
            <Stack.Screen
                name="addBlog"
                options={{
                    title: "Add New Blog",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="[id]"
                // getId={({ params }) => String(Date.now())} // This is just for trying purposes, might remove it later
                options={{
                    title: "Back to Cyberblog",
                    headerShown: true,
                }}
            />
        </Stack>
    );
}
