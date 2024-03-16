import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

function Home() {
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#161616'
    }
});

export default Home;