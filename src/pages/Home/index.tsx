import React from 'react';
import {StyleSheet, View} from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home: React.FC = () => {
  return <View style={styles.container} />;
};

export default Home;
