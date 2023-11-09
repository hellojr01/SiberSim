import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { blogs } from '../../../constants/blogData';
import { Redirect, useLocalSearchParams, useRouter } from "expo-router";
import { color } from '../../../constants/Colors';
import SectionHeading from '../../../components/SectionHeading';
import VerticalCarousel from '../../../components/VerticalCarousel';

const BlogPost = () => {
    const {id} = useLocalSearchParams();

    let value = 404;
    if (id !== undefined)
        if (!Array.isArray(id))
            if (!Boolean((value = Number(id))))
                return <Redirect href="/blog" />;
      
    const blogPost = blogs.find((blog) => blog.id == value);
  
    return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={blogPost? blogPost.image: "Unknown: Image Not Found!"} style={styles.image} />
        <Text style={{ ...styles.title}}>
            {blogPost
                ? blogPost.title
                : "Unknown: Title Not Found!"}
        </Text>
        <Text style={{ ...styles.description}}>
            {blogPost
                ? blogPost.desc
                : "Unknown: Title Not Found!"}
        </Text>
        <View style={styles.blogDataContainer}>
          <Text style={styles.blogDate}>{blogPost? blogPost.date: "Unknown: Date Not Found!"}</Text>
          <Text style={styles.blogAuthor}>{blogPost? blogPost.author: "Unknown: Author Not Found!"}</Text>
      </View>
      <View style={styles.contentContainer}>
      {blogPost ? blogPost.content.map((paragraph, index) => (
          <Text style={styles.paragraph} key={index}>
            {paragraph}
          </Text>
        )) : "Unknown: Content Not Found!"}
      </View>
      <SectionHeading
          title="Recommended News"
          viewAllButton={false}
          path={""}
          narrowPadding={true}
      />
      <VerticalCarousel carouselDesign="cyberblog" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.lavender
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontFamily: 'NotoSansBold',
    marginVertical: 5,
    color: color.americanBlue,
  },
  description: {
    fontSize: 15,
    fontFamily: 'NotoSansBold',
    marginVertical: 5,
    color: color.purple,
  },
  blogDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  blogDate: {
    fontSize: 8,
    fontFamily: 'NotoSansBold',
    color: 'rgba(69, 60, 103, 0.80)'
  },
  blogAuthor: {
    fontSize: 8,
    fontFamily: 'NotoSansBold',
    color: 'rgba(69, 60, 103, 0.80)'
  },
  contentContainer: {
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 10,
    fontFamily: 'NotoSansBold',
    lineHeight: 15,
    color: color.americanBlue,
    marginBottom: 20,
    textAlign: 'justify',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default BlogPost;
