import { Stack } from "expo-router";

export default function BlogLayout() {
    //Please add new screens/pages under Stack.Screen, copy the line above the make addition
    return (
        <Stack
            initialRouteName="index"
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
