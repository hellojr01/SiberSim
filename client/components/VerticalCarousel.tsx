import React from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
} from "react-native";
import { router, Redirect } from "expo-router";
import { blogs } from "@constants/blogData";
import { color } from "@constants/Colors";

type Props = {
    carouselDesign: "simulation" | "cyberblog" | "scammer";
    redirect?: boolean;
};

const VerticalCarousel = ({ carouselDesign, redirect }: Props) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {carouselDesign === "cyberblog" &&
                blogs.map((blog) => (
                    <View key={blog.id}>
                        <TouchableHighlight
                            onPress={() => {
                                router.push("/blog");
                                redirect
                                    ? setTimeout(
                                          () =>
                                              router.replace(blog.path as any),
                                          5
                                      )
                                    : setTimeout(
                                          () => router.push(blog.path as any),
                                          5
                                      );
                            }}
                            underlayColor="transparent"
                        >
                            <View style={styles.blog}>
                                <View style={styles.leftContent}>
                                    <Image
                                        source={blog.image}
                                        style={styles.blogImage}
                                    />
                                </View>
                                <View style={styles.rightContent}>
                                    <View style={styles.rightLabelContainer}>
                                        <Text style={styles.blogLabel}>
                                            {blog.category}
                                        </Text>
                                    </View>
                                    <Text style={styles.blogTitle}>
                                        {blog.title}
                                    </Text>
                                    <Text style={styles.blogDesc}>
                                        {blog.desc}
                                    </Text>
                                    <Text style={styles.blogDate}>
                                        {blog.date}
                                    </Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    leftContent: {
        marginRight: 10, // Space between the image and text
    },
    rightContent: {
        flex: 1, // Expand to fill available horizontal space
        justifyContent: "center",
        height: 100,
    },
    rightLabelContainer: {
        backgroundColor: color.purple,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
        alignSelf: "flex-start",
        marginBottom: 2,
    },
    blog: {
        flexDirection: "row", // Horizontal layout
        alignItems: "center",
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    blogImage: {
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
    blogLabel: {
        fontSize: 11,
        color: color.white,
    },
    blogTitle: {
        fontSize: 14,
        fontFamily: "NotoSansBold",
        color: color.americanBlue,
    },
    blogDesc: {
        flexShrink: 1,
        overflow: "hidden",
        fontSize: 12,
        fontFamily: "NotoSansSemiBold",
        color: color.purple,
        marginBottom: 8,
    },
    blogDate: {
        fontSize: 11,
        color: color.darkBlueMagenta,
    },
});

export default VerticalCarousel;