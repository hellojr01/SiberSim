
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { color } from '../../../constants/Colors';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Redirect } from 'expo-router';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add A New Blog</Text>
      <Text style={styles.label}>*Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
      />
      <Text style={styles.label}>*Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter description"
      />
      <Text style={styles.label}>*Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
        placeholder="Enter content"
        multiline
      />
      <Text style={styles.label}>*Category</Text>
      <Picker
        selectedValue={category}
        onValueChange={setCategory}
        style={styles.input}
        itemStyle={styles.itemStyle}
      >
        <Picker.Item label="Select category" value="" />
        <Picker.Item label="Scam Alert" value="scamAlert" />
        <Picker.Item label="Security Tips" value="securityTips" />
        <Picker.Item label="User Story" value="userStory" />
      </Picker>
      <Text style={styles.label}>*Photo</Text>
      <View style={styles.square}>
        <Text style={styles.plus}>+</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit A Blog</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalText}>Blog Submitted. Awaiting For Approval</Text>
          <Icon name="check" style={styles.icon} size={150} color="green" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.lavender,
  },
  heading: {
    color: color.americanBlue,
    fontFamily: "NotoSansBold",
    fontSize: 20,
    lineHeight: 20,
    marginBottom: 20
  },
  label: {
    color: color.americanBlue,
    fontFamily: "NotoSansBold",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: color.purple,
    backgroundColor: color.white,
    fontFamily: "NotoSansMedium",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: '#453C67'
  },
  itemStyle: {
    borderColor: 'red', // Change the border color
    borderWidth: 2, // Increase border width
  },
  button: {
    backgroundColor: color.purple,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: "NotoSansMedium",
    fontWeight: 'bold',
  },
  square: {
    width: 60, 
    height:60, 
    borderWidth: 2,
    borderColor: color.purple,
    borderStyle: 'dotted', // Dotted border style
    borderRadius: 10, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: color.white,
  },
  plus: {
    fontSize: 30,
    color: color.purple,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10, 
    padding: 20,
    width: 300,
    height: 300,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
  },
  closeButtonText: {
    fontSize: 24,
    fontFamily: 'NotoSansBold',
    color: color.americanBlue,
  },
  modalText: {
    fontSize: 20,
    fontFamily: 'NotoSansBold',
    color: color.americanBlue,
    textAlign: 'center',
    marginTop: 30,
  },
  icon:{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});

export default AddBlog;