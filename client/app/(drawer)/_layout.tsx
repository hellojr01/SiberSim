import { ColorValue, Dimensions, Text } from "react-native";
import {
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { color } from "../../constants/Colors";

type textProps = {
    color: ColorValue | undefined;
    focused: Boolean;
    title: String;
};

function DisplayText({ color, focused, title }: textProps) {
    return (
        <Text
            style={{
                color: color,
                fontFamily: focused ? "NotoSansBold" : "NotoSans",
                fontSize: focused ? 24 : 16,
            }}
        >
            {title}
        </Text>
    );
}

export default function DrawerLayout() {
    const windowWidth = Dimensions.get("window").width;
    const smallIcon = windowWidth * (0.11 - windowWidth * 0.00005);
    const bigIcon = windowWidth * (0.16 - windowWidth * 0.000075);

    return (
        <Drawer
            initialRouteName="home"
            screenOptions={{
                drawerActiveTintColor: color.americanBlue,
                drawerInactiveTintColor: color.white,
                drawerActiveBackgroundColor: color.sunglow,
                drawerInactiveBackgroundColor: "transparent",
                drawerStyle: {
                    backgroundColor: color.americanBlue,
                },
                headerStyle: {
                    backgroundColor: color.americanBlue,
                },
                headerTintColor: color.white,
                headerTitleStyle: {
                    fontFamily: "NotoSansSemiBold",
                    fontSize: 20,
                },
                drawerType: "slide",
            }}
        >
            <Drawer.Screen
                name="home" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Home",
                        }),
                    title: "Home",
                    drawerIcon: ({ focused, color }) => (
                        <FontAwesome
                            name="home"
                            size={focused ? bigIcon : smallIcon}
                            color={color}
                            style={{
                                width: focused ? bigIcon : smallIcon,
                                aspectRatio: 1,
                            }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="simulation" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Simulations",
                        }),
                    drawerIcon: ({ focused, color }) => (
                        <MaterialCommunityIcons
                            name="cards-playing-spade-multiple"
                            size={focused ? bigIcon : smallIcon}
                            color={color}
                            style={{
                                width: focused ? bigIcon : smallIcon,
                                aspectRatio: 1,
                            }}
                        />
                    ),
                    title: "Simulations",
                }}
            />
            <Drawer.Screen
                name="scammer" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Spot Scam",
                        }),
                    drawerIcon: ({ focused, color }) => (
                        <MaterialCommunityIcons
                            name="magnify-scan"
                            size={focused ? bigIcon : smallIcon}
                            color={color}
                            style={{
                                width: focused ? bigIcon : smallIcon,
                                aspectRatio: 1,
                            }}
                        />
                    ),
                    title: "Identify Scammers & Report",
                }}
            />
            <Drawer.Screen
                name="blog" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Cyblog",
                        }),
                    drawerIcon: ({ focused, color }) => (
                        <FontAwesome
                            name="quote-left"
                            size={focused ? bigIcon : smallIcon}
                            color={color}
                            style={{
                                width: focused ? bigIcon : smallIcon,
                                aspectRatio: 1,
                            }}
                        />
                    ),
                    title: "Cyber Blog",
                }}
            />
            <Drawer.Screen
                name="profile" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Profile",
                        }),
                    drawerIcon: ({ focused, color }) => (
                        <FontAwesome
                            name="user"
                            size={focused ? bigIcon : smallIcon}
                            color={color}
                            style={{
                                width: focused ? bigIcon : smallIcon,
                                aspectRatio: 1,
                            }}
                        />
                    ),
                    title: "Profile Page",
                }}
            />
            {/* 
            <Drawer.Screen
                name="learn" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Learn",
                        }),
                    drawerIcon: ({ focused, color }) => (
                        <FontAwesome
                            name="user"
                            size={focused ? bigIcon : smallIcon}
                            color={color}
                            style={{
                                width: focused ? bigIcon : smallIcon,
                                aspectRatio: 1,
                            }}
                        />
                    ),
                    title: "Learn",
                }}
            />
             */}
            <Drawer.Screen
                name="logout" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: () =>
                        DisplayText({
                            color: color.white,
                            focused: false,
                            title: "Log Out",
                        }),
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="logout"
                            size={smallIcon}
                            color={color.white}
                            style={{
                                width: smallIcon,
                                aspectRatio: 1,
                            }}
                        />
                    ),
                    drawerItemStyle: {
                        bottom: 10,
                        alignSelf: "center",
                        position: "fixed",
                        width: "95%",
                        backgroundColor: color.purple,
                    },
                    title: "Log Out",
                }}
            />
        </Drawer>
    );
}
