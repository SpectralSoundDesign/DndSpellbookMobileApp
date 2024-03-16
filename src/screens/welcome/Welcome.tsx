import * as React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';

function Welcome({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
          <Button
            title="Go to Character Select"
            onPress={() => navigation.navigate('CharacterSelect')}
          />
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

export default Welcome;