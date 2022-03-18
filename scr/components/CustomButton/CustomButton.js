import {Text, StyleSheet, View, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type}) => {
  const containerKey = `container_${type}`;
  const textKey = `text_${type}`;
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[containerKey]]}>
      <Text style={[styles.text, styles[textKey]]}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    padding: 15,
    alignItems: 'center',
  },
  container_SIGNIN: {
    backgroundColor: '#41de3e',
  },
  container_FORGOTPASSWORD: {},
  container_GOOGLESIGNIN: {
    backgroundColor: '#dedede',
  },
  container_SIGNUP: {
    backgroundColor: '#41de3e',
  },
  container_CREATEACCOUNT: {
    backgroundColor: '#41de3e',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_FORGOTPASSWORD: {
    fontStyle: 'italic',
    color: '#41de3e',
    textAlign: 'right',
  },
  text_GOOGLESIGNIN: {
    fontWeight: 'bold',
    color: 'blue',
  },
  text_SIGNUP: {
    fontWeight: 'bold',
    color: 'white',
  },
});
