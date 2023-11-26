import React, { useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    RefreshControl,
} from "react-native";
// import { useScrollToTop } from "@react-navigation/native";
import { Redirect, useLocalSearchParams } from "expo-router";

import SectionHeading from "../../../components/SectionHeading";
import VerticalCarousel from "../../../components/VerticalCarousel";
import { color } from "../../../constants/Colors";
import { blogs } from "../../../constants/blogData";
import Logo from "../../../assets/images/missing404.svg";

export const unstable_settings = {
    // Ensure that reloading on a page keeps a back button present.
    initialRouteName: "index",
};

const BlogPost = () => {
    const { id } = useLocalSearchParams();

    let value = 404;
    if (id !== undefined)
        if (!Array.isArray(id))
            if (!Boolean((value = Number(id))))
                return <Redirect href="/blog" />;

    const blogPost = blogs.find((blog) => blog.id == value);

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <View>
                    {blogPost ? (
                        <Image source={blogPost.image} style={styles.image} />
                    ) : (
                        <Logo
                            width="100%"
                            style={{
                                alignSelf: "center",
                                flexShrink: 1,
                                minHeight: "35%",
                                maxHeight: "60%",
                                marginVertical: 10,
                            }}
                        />
                    )}
                    <Text style={{ ...styles.title }}>
                        {blogPost
                            ? blogPost.title
                            : "Unknown: Title Not Found!"}
                    </Text>
                    <Text style={{ ...styles.description }}>
                        {blogPost ? blogPost.desc : "Unknown: Title Not Found!"}
                    </Text>
                </View>
                <View style={styles.blogDataContainer}>
                    <Text style={styles.blogDate}>
                        {blogPost ? blogPost.date : "Unknown: Date Not Found!"}
                    </Text>
                    <Text style={styles.blogAuthor}>
                        {blogPost
                            ? blogPost.author
                            : "Unknown: Author Not Found!"}
                    </Text>
                </View>
                <View style={styles.contentContainer}>
                    {blogPost
                        ? blogPost.content.map((paragraph, index) => (
                              <Text style={styles.paragraph} key={index}>
                                  {paragraph}
                              </Text>
                          ))
                        : "Unknown: Content Not Found!"}
                </View>
            </View>
            <View style={styles.botContainer}>
                <SectionHeading title="Recommended News" />
                <VerticalCarousel carouselDesign="cyberblog" redirect={true} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: color.lavender,
    },
    topContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    botContainer: {
        paddingBottom: 20,
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    title: {
        fontSize: 20,
        fontFamily: "NotoSansBold",
        marginVertical: 5,
        color: color.americanBlue,
    },
    description: {
        fontSize: 16,
        fontFamily: "NotoSansBold",
        marginVertical: 5,
        color: color.purple,
    },
    blogDataContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },
    blogDate: {
        fontSize: 11,
        fontFamily: "NotoSansBold",
        color: color.darkBlueMagenta,
    },
    blogAuthor: {
        fontSize: 11,
        fontFamily: "NotoSansBold",
        color: color.darkBlueMagenta,
    },
    contentContainer: {
        marginVertical: 10,
    },
    paragraph: {
        fontSize: 14,
        fontFamily: "NotoSansBold",
        lineHeight: 15,
        color: color.americanBlue,
        marginBottom: 20,
        textAlign: "justify",
    },
    errorText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
    },
});

export default BlogPost;
