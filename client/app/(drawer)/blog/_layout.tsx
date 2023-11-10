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
                    title: "Home",
                }}
            />
            <Stack.Screen
                name="addBlog"
                options={{
                    title: "Add Blog",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="[id]"
                getId={({ params }) => String(Date.now())}
                options={{
                    title: "Back to Cyberblog",
                    // presentation: "transparentModal",
                    headerShown: true,
                }}
            />
        </Stack>
    );
}
