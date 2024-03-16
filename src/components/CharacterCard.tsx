import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CardProps {
  name: string;
  level: string;
  race: string;
  class: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{props.name}</Text>
        <Text style={styles.cardLevel}>{props.level}</Text>
        <Text style={styles.cardLevel}>{props.race}</Text>
        <Text style={styles.cardDescription}>{props.class}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 175,
    backgroundColor: '#2c2c2c',
    borderWidth: 1,
    borderColor: '#2c2c2c',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardLevel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: 'white',
  },
});

export default Card;
