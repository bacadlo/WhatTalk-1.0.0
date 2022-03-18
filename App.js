import React from 'react';
import {SafeAreaView,StatusBar,StyleSheet,} from 'react-native';
import Navigation from './scr/navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={'auto'} />
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    background:'#f9fbfc',
  },
});

export default App;
