import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import Logo from './../../../assets/imgs/Logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {auth, signIn, forgotPassword} from '../../../firebase/firebase-config';
import GoogleAuth from '../../components/GoogleAuth';
import {onAuthStateChanged} from 'firebase/auth';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] =useState('');
  const [password, setPassword] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState('');
  const navigation = useNavigation(); 
   
  const onSignInPressed = () => {
    console.warn('SignIn');
    signIn(email, password, username);      
  };  

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password pressed');
    forgotPassword(email);
  };
  const onSignupPressed = () => {
    console.warn('SignUp pressed');
    navigation.navigate('SignUp');
  };
  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.4}]}
        resizeMode="contain"
      />
      <CustomInput placeholder="Username" value={username} setValue={setUsername} />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Sign In" onPress={onSignInPressed} type="SIGNIN" />
      <CustomButton
        text="Forgot Password?"
        onPress={onForgotPasswordPressed}
        type="FORGOTPASSWORD"
      />
      <GoogleAuth />

      <CustomButton text="Sign Up " onPress={onSignupPressed} type="SIGNIN" />
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    alignItems: 'center',
    pagging: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 300,
  },
});
