import { ColorValue, Dimensions, Text } from "react-native";
import {
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { color } from "../../constants/Colors";
import { View } from "../../components/Themed";

const windowWidth = Dimensions.get("window").width;

type props = {
    color: ColorValue | undefined;
    focused: Boolean;
    title: String;
};

function DisplayText({ color, focused, title }: props) {
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
    return (
        <Drawer
            initialRouteName="(pages)/home"
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
                },
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
                            size={
                                focused
                                    ? windowWidth *
                                      (0.16 - windowWidth * 0.000075)
                                    : windowWidth *
                                      (0.11 - windowWidth * 0.00005)
                            }
                            color={color}
                            style={{
                                width: focused
                                    ? windowWidth *
                                      (0.16 - windowWidth * 0.000075)
                                    : windowWidth *
                                      (0.11 - windowWidth * 0.00005),
                                aspectRatio: 1,
                            }}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="simulation/index" // This is the name of the page and must match the url from root
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
                            size={
                                focused
                                    ? windowWidth *
                                      (0.16 - windowWidth * 0.000075)
                                    : windowWidth *
                                      (0.11 - windowWidth * 0.00005)
                            }
                            color={color}
                            style={{
                                width: focused
                                    ? windowWidth *
                                      (0.16 - windowWidth * 0.000075)
                                    : windowWidth *
                                      (0.11 - windowWidth * 0.00005),
                                aspectRatio: 1,
                            }}
                        />
                    ),
                    title: "Simulations",
                }}
            />
            <Drawer.Screen
                name="scammer/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Identify",
                        }),
                    drawerIcon: ({ focused, color }) => (
                        <MaterialCommunityIcons
                            name="magnify-scan"
                            size={
                                focused
                                    ? windowWidth *
                                      (0.16 - windowWidth * 0.000075)
                                    : windowWidth *
                                      (0.11 - windowWidth * 0.00005)
                            }
                            color={color}
                            style={{
                                width: focused
                                    ? windowWidth *
                                      (0.16 - windowWidth * 0.000075)
                                    : windowWidth *
                                      (0.11 - windowWidth * 0.00005),
                                aspectRatio: 1,
                            }}
                        />
                    ),
                    title: "Identify Scammer & Report",
                }}
            />
            <Drawer.Screen
                name="blog/index" // This is the name of the page and must match the url from root
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
                            size={
                                focused
                                    ? windowWidth *
                                      (0.16 - windowWidth * 0.000075)
                                    : windowWidth *
                                      (0.11 - windowWidth * 0.00005)
                            }
                            color={color}
                            style={{
                                width: focused
                                    ? windowWidth *
                                      (0.16 - windowWidth * 0.000075)
                                    : windowWidth *
                                      (0.11 - windowWidth * 0.00005),
                                aspectRatio: 1,
                            }}
                        />
                    ),
                    title: "Cyber Blog",
                }}
            />
            {/* 
            <Drawer.Screen
                name="profile" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Profile",
                        }),
                    ),
                    drawerIcon: ({ focused, color }) => (
                        <FontAwesome
                            name="user"
                            size={
                                focused
                                    ? windowWidth *
                                      (0.16 - windowWidth * 0.000075)
                                    : windowWidth *
                                      (0.11 - windowWidth * 0.00005)
                            }
                            color={color}
                            style={{
                                width: focused
                                    ? windowWidth *
                                      (0.16 - windowWidth * 0.000075)
                                    : windowWidth *
                                      (0.11 - windowWidth * 0.00005),
                                aspectRatio: 1,
                            }}
                        />
                    ),
                    title: "Profile Page",
                }}
            />
            <Drawer.Screen
                name="learn" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Learn",
                        }),
                    ),
                    drawerIcon: ({ focused, color }) => (
                        <FontAwesome
                            name="user"
                            size={
                                focused
                                    ? windowWidth *
                                      (0.16 - windowWidth * 0.000075)
                                    : windowWidth *
                                      (0.11 - windowWidth * 0.00005)
                            }
                            color={color}
                            style={{
                                width: focused
                                    ? windowWidth *
                                      (0.16 - windowWidth * 0.000075)
                                    : windowWidth *
                                      (0.11 - windowWidth * 0.00005),
                                aspectRatio: 1,
                            }}
                        />
                    ),
                    title: "Learn",
                }}
            />
            <Drawer.Screen
                name="logout" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color.white,
                            focused: false,
                            title: "Log Out",
                        }),
                    ),
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="logout"
                            size={windowWidth *(0.11 - windowWidth * 0.00005)}
                            color={color.white}
                            style={{
                                width: windowWidth * (0.11 - windowWidth * 0.00005),
                                aspectRatio: 1,
                            }}
                        />
                    ),
                    title: "Log Out",
                }}
            /> */}
        </Drawer>
    );
}
