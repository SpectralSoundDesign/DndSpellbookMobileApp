import * as React from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import Card from '../../components/CharacterCard.tsx'

function CharacterSelect({ navigation }) {
    const [characters, setCharacters] = React.useState([
      {
        id: '1',
        name: 'Gandalf',
        level: 20,
        race: 'Human',
        class: 'Wizard'
        },
        {
        id: '2',
        name: 'Aragorn',
        level: 20,
        race: 'Human',
        class: 'Ranger'
        },
        {
        id: '3',
        name: 'Legolas',
        level: 20,
        race: 'Elf',
        class: 'Ranger'
        },
        {
        id: '4',
        name: 'Gimli',
        level: 20,
        race: 'Dwarf',
        class: 'Fighter'
        },
      ]);

    const numColumns = 2;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Characters</Text>
        <View style={styles.cardsContainer}>
              <FlatList
                data={characters}
                renderItem={({ item }) => (
                <TouchableOpacity style={styles.listItemContainer} onPress={console.log("Tap")}>
                  <Card
                    name={item.name}
                    level={item.level}
                    race={item.race}
                    class={item.class}
                  />
                </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                contentContainerStyle={styles.flatListContainer}
                key={numColumns.toString()}
              />
        </View>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('MyTabs')}
          />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#161616',
    },
    cardsContainer: {
        width: '100%',
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    listItemContainer: {
        width: '50%',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatListContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CharacterSelect;