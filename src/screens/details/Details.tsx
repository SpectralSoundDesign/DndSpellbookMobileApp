import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

function Details() {
    const route = useRoute();
    const { spell } = route.params;

    {/*}"name": "Zone of Truth",
    "desc": "You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell’s area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can’t speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw.An affected creature is aware of the fate and can avoid answering questions she would normally have responded with a lie. Such a creature can remain evasive in his answers as they remain within the limits of truth.",
    "page": "phb 289",
    "range":"60 feet",
    "components": "V, S",
    "ritual": "no",
    "duration": "10 minutes",
    "concentration": "no",
    "casting_time":"1 action",
    "level": "2nd-level",
    "school": "Enchantment",
    "class": "Bard, Cleric, Paladin",
    "oaths": "Devotion"*/}

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