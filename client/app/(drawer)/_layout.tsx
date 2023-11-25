import { ColorValue, Dimensions, Text } from "react-native";
import {
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { color } from "../../constants/Colors";
import Logout from "./logout";
import { View } from "../../components/Themed";
import { TouchableHighlight } from "react-native-gesture-handler";

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
                        position: "fixed",
                        justifyContent: "center",
                        width: "92%",
                        margin: 10,
                        borderRadius: 5,
                        borderWidth: 2,
                        borderColor: color.purple,
                        backgroundColor: color.americanBlue,
                    }}
                >
                    <TouchableHighlight onPress={() => router.push("/logout")}>
                        <View
                            style={{
                                flexDirection: "row",
                                padding: 10,
                                backgroundColor: color.purple,
                            }}
                        >
                            <MaterialCommunityIcons
                                name="logout"
                                size={smallIcon}
                                color={color.white}
                                style={{
                                    width: smallIcon,
                                    aspectRatio: 1,
                                }}
                            />
                            <Text
                                style={{
                                    color: color.white,
                                    fontFamily: "NotoSans",
                                    fontSize: 16,
                                    alignSelf: "center",
                                    marginLeft: 30,
                                }}
                            >
                                Log Out
                            </Text>
                        </View>
                    </TouchableHighlight>
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
                    title: "Simulations",
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
                    title: "Identify Scammers & Report",
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
                    title: "Profile Page",
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
                    title: "Learn",
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
                }}
            />
             */}
            <Drawer.Screen
                name="loadertest" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: ({ focused, color }) =>
                        DisplayText({
                            color: color,
                            focused: focused,
                            title: "Loader",
                        }),
                    title: "Test Loader Page",
                }}
            />
            <Drawer.Screen
                name="logout" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: () =>
                        DisplayText({
                            color: color.white,
                            focused: false,
                            title: "Log Out",
                        }),
                    title: "Log Out",
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
                        display: "none",
                        // bottom: 10,
                        // position: "fixed",
                        // width: "95%",
                        // backgroundColor: color.purple,
                    },
                }}
            />
        </Drawer>
    );
}
