import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from 'react-native-dynamic-search-bar';
import data from '../../data/spell_data.tsx'
import Card from '../../components/Card.tsx'

function Search() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = React.useState('');
  const [searching, setSearching] = React.useState(false);
  const [filteredData, setFilteredData] = React.useState([]);

  const updateSearch = (search) => {
    setSearchText(search);
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const truncatedText = (originalText, maxLength) => (
    originalText.length > maxLength ? originalText.slice(0, maxLength) + '...' : originalText
    );

  const navigateToDetails = (spell) => {
    if (spell) {
      navigation.navigate('Details', { spell });
    }
  }

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search spells"
        onPress={() => console.log('onPress')}
        onChangeText={(text) => updateSearch(text)}
        onSearchPress={() => console.log('onSearchPress')}
        onClearPress={() => console.log('onClearPress')}
        onVoicePress={() => console.log('onVoicePress')}
        searchIconImageStyle={{ tintColor: 'white' }}
        clearIconImageStyle={{ tintColor: 'white' }}
        voiceIconImageStyle={{ tintColor: 'white' }}
        style={styles.searchbar}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigateToDetails(item)}>
          <Card
            title={item.name}
            level={item.level}
            school={item.school}
            description={truncatedText((item.desc), 100)}
          />
        </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
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
  searchbar: {
    width: 300,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#333333',
    marginTop: 30,
    marginBottom: 20,
  },
  list: {
    marginTop: 30,
  },
});

export default Search;
