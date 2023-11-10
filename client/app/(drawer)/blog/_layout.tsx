import { Stack } from "expo-router";

export default function BlogLayout() {
    return (
        <Stack>
            <Stack.Screen
            name="index"
            options={{
                headerShown: false,
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
