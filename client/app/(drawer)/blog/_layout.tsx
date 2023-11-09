import { Stack } from "expo-router";

export default function BlogLayout() {
    //Please add new screens/pages under Stack.Screen, copy the line above the make addition
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                title: "Cyber Blog",
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="addBlog" options={{ headerShown: false }} />
        </Stack>
    );
}
