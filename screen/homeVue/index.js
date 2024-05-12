import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import homeVueStyle from './style.js';

const Home = () => {

  const prendrePhoto = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('Prise de photo annulée');
      } else if (response.errorCode) {
        console.log('Erreur de prise de photo: ', response.errorCode);
        Alert.alert('Erreur', 'Impossible de prendre la photo. Veuillez réessayer.');
      } else {
        console.log('URI de la photo: ', response.uri);
      }
    });
  };

  // Définissez vos données de fonctionnalités après la déclaration de prendrePhoto
  const fonctionalites = [
    { id: '1', nom: 'Photo', icone: faCamera, action: prendrePhoto },
  ];

  // Rendu de chaque élément de la liste
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={item.action}>
      <View style={homeVueStyle.fonctionnaliteItem}>
        <FontAwesomeIcon icon={item.icone} size={30} style={homeVueStyle.fonctionnaliteIcone} />
        <Text style={homeVueStyle.fonctionnaliteText}>{item.nom}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      {/* Header */}
      <View style={homeVueStyle.header}>
        <Text style={homeVueStyle.userName}>David Barile</Text>
        <Image source={require('./../../img/David_Barile.jpeg')} style={homeVueStyle.userImg} />
      </View>
      {/* Header */}

      {/* Liste des Fonctionalites */}
      <FlatList
        horizontal
        data={fonctionalites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={homeVueStyle.fonctionnalitesList}
      />
    </ScrollView>
  );
}

export default Home;
