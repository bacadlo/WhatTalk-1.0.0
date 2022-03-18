import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { signUp,db } from '../../../firebase/firebase-config';
import GoogleAuth from '../../components/GoogleAuth';
import {auth} from 'firebase/auth';
import {
  setDoc,
  doc,  
} from 'firebase/firestore';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordReapeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();

  const onCreateAccountPressed = async () => {
    console.warn('Create account pressed');
    signUp(email, password);
    await setDoc(doc(db, 'users', 'user2'), {
      email: email,
      password: password,
    });
    alert('Account created. Sign in');
    navigation.navigate('Home');
    
  };
  const onTermsOfUsePressed = () => {
    console.warn('Terms of use pressed');
  };
  const onPrivacyPressed = () => {
    console.warn('Privacy pressed');
  };
  const onSignInPressed = () => {
    console.warn('SignIn');
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="Repeat password"
        value={passwordReapeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
      />

      <CustomButton
        text="Create account"
        onPress={onCreateAccountPressed}
        type="CREATEACCOUNT"
      />
      <Text style={styles.text}>
        {' '}
        By creating an account, you confirm that you accept our{' '}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>
          Terms of Use
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={onPrivacyPressed}>
          Privacy Policy
        </Text>{' '}
      </Text>

      <GoogleAuth />
      <CustomButton
        text="Have an account? Sign in "
        onPress={onSignInPressed}
        type="SIGNIN"
      />
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    alignItems: 'center',
    pagging: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#41de3e',
    margin: 70,
  },
  text: {
    color: 'gray',
  },
  link: {
    fontStyle: 'italic',
    color: 'yellow',
  },
});
