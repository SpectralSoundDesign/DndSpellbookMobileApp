import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

function Details() {
    const route = useRoute();
    const { spell } = route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{spell.name}</Text>
        <Text style={styles.details}>Page: {spell.page}</Text>
        <Text style={styles.details}>Range: {spell.range}</Text>
        <Text style={styles.details}>Components: {spell.components}</Text>
        <Text style={styles.details}>Ritual: {spell.ritual}</Text>
        <Text style={styles.details}>Duration: {spell.duration}</Text>
        <Text style={styles.details}>Concentration: {spell.concentration}</Text>
        <Text style={styles.details}>Casting Time: {spell.casting_time}</Text>
        <Text style={styles.details}>Level: {spell.level}</Text>
        <Text style={styles.details}>School: {spell.school}</Text>
        <Text style={styles.details}>Class: {spell.class}</Text>
        <Text style={styles.details}>Oaths: {spell.oaths}</Text>
        <Text style={styles.details}>Description: {spell.desc}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#161616'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10
  },
  details: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5
  }
});

  export default Details;