import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'


const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue} 
        placeholder={placeholder}
        secureTextEntry={secureTextEntry} 
        style={styles.input} />
    </View>
  );
}

export default CustomInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '80%',
    borderColor: '#41de3e',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});