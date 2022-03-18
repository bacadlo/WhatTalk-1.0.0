import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import { auth, logout } from '../../../firebase/firebase-config';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Logo from './../../../assets/imgs/Logo.png';
import Chats from './Tabs/Chats';
import Calls from './Tabs/Calls';
import Status from './Tabs/Status';
import CustomButton from '../../components/CustomButton';
import { GoogleLogout } from 'react-google-login';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
    const onSignOutPressed = () => {
      console.warn('Sign out Pressed');
      logout(navigation);
      
    };
  const {height} = useWindowDimensions();
   return (
     <View style={styles.root}>
       <Text style={styles.title}>Home Page</Text>
       <Image
         source={Logo}
         style={[styles.logo, {height: height * 0.4}]}
         resizeMode="contain"
       />
       <CustomButton text="Sign out " onPress={onSignOutPressed} type="SIGNIN" />
       <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
     </View>
   ); 
};

export default HomeScreen

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    alignItems: 'center',
    pagging: 20,
  },
  tabs: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'green',
  },
  title: {
    color: 'green',
    fontSize: 30,
    
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 300,
  },
});

/*<Tab.Navigator
       screenOptions={ () => {
         return {
           tabBarLabel: 'whattalk',
           tabBarShowIcon: true,
           tabBarLabelStyle: {
             color: 'white',
           },
           tabBarIndicatorStyle: {
             backgroundColor: 'blue',
           },
           tabBarStyle: {
             backgroundColor: 'green',
           },
         };
       }}
       initialRouteName='Chats'>
       <Tab.Screen name='Status' component={Status} />
       <Tab.Screen name='Chats' component={Chats} />
       <Tab.Screen name='Calls' component={Calls} />
     </Tab.Navigator> */