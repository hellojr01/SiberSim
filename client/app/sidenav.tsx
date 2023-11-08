import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
    createDrawerNavigator,
    DrawerItemList,
    DrawerItem,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import {
    FontAwesome,
    FontAwesome5,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import { color } from "../constants/Colors";

/* Warning! Do not delete this! This is an old drawer navigation file made using react navigation!
   New one is located at /app/(drawer)/_layout */

const windowWidth = Dimensions.get("window").width;

function Notifications() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Notifications Screen</Text>
        </View>
    );
}

function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Log Out"
                labelStyle={{ color: color.white, fontSize: 16 }}
                style={{
                    backgroundColor: color.purple,
                    marginTop: 50,
                }}
                icon={() => (
                    <MaterialCommunityIcons
                        name="logout"
                        size={windowWidth * (0.11 - windowWidth * 0.00005)}
                        color={color.white}
                        style={{
                            width: windowWidth * (0.11 - windowWidth * 0.00005),
                            aspectRatio: 1,
                            ...styles.menuIcon,
                        }}
                    />
                )}
                onPress={() => alert("Logout")}
            />
        </DrawerContentScrollView>
    );
}

const Drawerold = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawerold.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
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
            }}
        >
            <Drawerold.Screen
                name="Home"
                component={Notifications}
                options={{
                    drawerLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color,
                                fontFamily: focused
                                    ? "NotoSansBold"
                                    : "NotoSans",
                                fontSize: focused ? 24 : 16,
                            }}
                        >
                            Home
                        </Text>
                    ),
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
                                ...styles.menuIcon,
                            }}
                        />
                    ),
                }}
            />
            <Drawerold.Screen
                name="Learn"
                component={Notifications}
                options={{
                    drawerLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color,
                                fontFamily: focused
                                    ? "NotoSansBold"
                                    : "NotoSans",
                                fontSize: focused ? 24 : 16,
                            }}
                        >
                            Learn
                        </Text>
                    ),
                    drawerIcon: ({ focused, color }) => (
                        <FontAwesome5
                            name="book"
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
                                ...styles.menuIcon,
                            }}
                        />
                    ),
                }}
            />
            <Drawerold.Screen
                name="Simulation"
                component={Notifications}
                options={{
                    drawerLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color,
                                fontFamily: focused
                                    ? "NotoSansBold"
                                    : "NotoSans",
                                fontSize: focused ? 24 : 16,
                            }}
                        >
                            Simulation
                        </Text>
                    ),
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
                                ...styles.menuIcon,
                            }}
                        />
                    ),
                }}
            />
            <Drawerold.Screen
                name="Identify"
                component={Notifications}
                options={{
                    drawerLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color,
                                fontFamily: focused
                                    ? "NotoSansBold"
                                    : "NotoSans",
                                fontSize: focused ? 24 : 16,
                            }}
                        >
                            Identify
                        </Text>
                    ),
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
                                ...styles.menuIcon,
                            }}
                        />
                    ),
                }}
            />
            <Drawerold.Screen
                name="Cyblog"
                component={Notifications}
                options={{
                    drawerLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color,
                                fontFamily: focused
                                    ? "NotoSansBold"
                                    : "NotoSans",
                                fontSize: focused ? 24 : 16,
                            }}
                        >
                            Cyblog
                        </Text>
                    ),
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
                                ...styles.menuIcon,
                            }}
                        />
                    ),
                }}
            />
            <Drawerold.Screen
                name="Profile"
                component={Notifications}
                options={{
                    drawerLabel: ({ focused, color }) => (
                        <Text
                            style={{
                                color,
                                fontFamily: focused
                                    ? "NotoSansBold"
                                    : "NotoSans",
                                fontSize: focused ? 24 : 16,
                            }}
                        >
                            Profile
                        </Text>
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
                                ...styles.menuIcon,
                            }}
                        />
                    ),
                }}
            />
        </Drawerold.Navigator>
    );
}

export default function App() {
    return (
        <>
            <MyDrawer />
        </>
    );
}

const styles = StyleSheet.create({
    menuIcon: {
        justifyContent: "center",
        alignSelf: "center",
    },
});
