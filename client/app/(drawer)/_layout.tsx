import { ColorValue, Dimensions, Text, View } from "react-native";
import { Drawer } from "expo-router/drawer";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import {
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
    Ionicons,
} from "@expo/vector-icons";

import { color } from "@constants/Colors";
import { drawerItems } from "@constants/drawerItemData";

type textProps = {
    color: ColorValue | undefined;
    focused: Boolean;
    title: String;
};

type iconProps = {
    color: ColorValue | undefined;
    focused: Boolean;
    iconName: String;
    // Fa = FontAwesome, FA5 = FontAwesome5, MCI = MaterialCommunityIcons,
    iconType: "FA" | "FA5" | "MCI" | "Ion";
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

function DisplayIcon({ color, focused, iconName, iconType }: iconProps) {
    let Icon: any;

    switch (iconType) {
        case "FA":
            Icon = FontAwesome;
            break;
        case "FA5":
            Icon = FontAwesome5;
            break;
        case "MCI":
            Icon = MaterialCommunityIcons;
            break;
        case "Ion":
            Icon = Ionicons;
            break;
    }

    return (
        <Icon
            name={iconName}
            size={focused ? bigIcon : smallIcon}
            color={color}
            style={{
                width: focused ? bigIcon : smallIcon,
                aspectRatio: 1,
            }}
        />
    );
}

const windowWidth = Dimensions.get("window").width;
const smallIcon = windowWidth * (0.11 - windowWidth * 0.00005);
const bigIcon = windowWidth * (0.16 - windowWidth * 0.000075);

export default function DrawerLayout() {
    function CustomDrawerContent(props: any) {
        return (
            <View style={{ backgroundColor: color.americanBlue, flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>

                <View
                    style={{
                        bottom: 10,
                        width: "100%",
                        position: "fixed",
                        justifyContent: "center",
                        backgroundColor: color.americanBlue,
                    }}
                >
                    <DrawerItem
                        label={() =>
                            DisplayText({
                                color: color.white,
                                focused: false,
                                title: "Log Out",
                            })
                        }
                        icon={() =>
                            DisplayIcon({
                                color: color.white,
                                focused: false,
                                iconName: "logout",
                                iconType: "MCI",
                            })
                        }
                        inactiveBackgroundColor={color.purple}
                        onPress={() => router.push("/logout")}
                    />
                </View>
            </View>
        );
    }

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
            drawerContent={(props) => <CustomDrawerContent {...props} />}
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
                    drawerIcon: ({ focused, color }) =>
                        DisplayIcon({
                            color,
                            focused,
                            iconName: "home",
                            iconType: "FA",
                        }),
                }}
            />
            <Drawer.Screen // Simulation page, still working on it
                name="simulation" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Simulations",
                        }),
                    title: "Simulations",
                    drawerIcon: ({ focused, color }) =>
                        DisplayIcon({
                            color,
                            focused,
                            iconName: "cards-playing-spade-multiple",
                            iconType: "MCI",
                        }),
                }}
            />
            {
                <Drawer.Screen // Learn page, working on it
                    name="learn" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: ({ focused, color }) =>
                            DisplayText({
                                color: color,
                                focused: focused,
                                title: "Learn",
                            }),
                        title: "Learn",
                        drawerIcon: ({ focused, color }) =>
                            DisplayIcon({
                                color,
                                focused,
                                iconName: "book",
                                iconType: "FA5",
                            }),
                    }}
                />
            }
            {
                <Drawer.Screen // Reward page, merging with learn page
                    name="reward" // This is the name of the page and must match the url from root
                    options={{
                        drawerLabel: ({ focused, color }) =>
                            DisplayText({
                                color: color,
                                focused: focused,
                                title: "Rewards",
                            }),
                        title: "Rewards",
                        drawerIcon: ({ focused, color }) =>
                            DisplayIcon({
                                color,
                                focused,
                                iconName: "gift",
                                iconType: "MCI",
                            }),
                    }}
                />
            }
            <Drawer.Screen
                name="scammer" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Spot Scam",
                        }),
                    title: "Identify Scammers & Report",
                    drawerIcon: ({ focused, color }) =>
                        DisplayIcon({
                            color,
                            focused,
                            iconName: "magnify-scan",
                            iconType: "MCI",
                        }),
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
                    title: "Cyber Blog",
                    drawerIcon: ({ focused, color }) =>
                        DisplayIcon({
                            color,
                            focused,
                            iconName: "quote-left",
                            iconType: "FA",
                        }),
                }}
            />
            <Drawer.Screen // Profile page, still working on it
                name="profile" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Profile",
                        }),
                    title: "Profile Page",
                    drawerIcon: ({ focused, color }) =>
                        DisplayIcon({
                            color,
                            focused,
                            iconName: "user",
                            iconType: "FA",
                        }),
                }}
            />
            <Drawer.Screen // Challenge page, still working on it
                name="chatbot" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Challenges",
                        }),
                    title: "Challenges",
                    drawerIcon: ({ focused, color }) =>
                        DisplayIcon({
                            color,
                            focused,
                            iconName: "font-awesome-flag",
                            iconType: "FA5",
                        }),
                }}
            />
            <Drawer.Screen // Testing Loader, will remove it eventually
                name="loadertest" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Loader",
                        }),
                    title: "Test Loader Page",
                    drawerIcon: ({ focused, color }) =>
                        DisplayIcon({
                            color,
                            focused,
                            iconName: "reload-circle",
                            iconType: "Ion",
                        }),
                }}
            />
            <Drawer.Screen // Testing OCR, will be merged with spot scam later
                name="ocrReader" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "OCR",
                        }),
                    title: "OCR Page",
                    drawerIcon: ({ focused, color }) =>
                        DisplayIcon({
                            color,
                            focused,
                            iconName: "image",
                            iconType: "MCI",
                        }),
                }}
            />
        </Drawer>
    );
}
