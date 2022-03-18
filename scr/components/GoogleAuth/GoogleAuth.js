import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
 

const GoogleAuth = () => {
const navigation = useNavigation();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '599020079103-2qnisn4lq1dh9c1o0aahsc53then4cbk.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const onGoogleSignInPressed = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(user);
      setUser({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.warn('Signin cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.warn('Signin in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.warn('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        // naviagte to Home Screen
        navigation.navigate('Home');
      }
    }
  };  
  return (
    <View>
      <GoogleSigninButton
        style={styles.button}
        onPress={onGoogleSignInPressed}
      />
    </View>
  );
};

export default GoogleAuth;

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 55,
  },
});
