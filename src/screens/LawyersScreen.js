import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const lawyers = [
  {
    id: '1',
    name: 'Juliana Amaral dos Santos',
    oab: 'MS/3212489',
    area: 'Civil',
    skills: ['Procurações', 'Imobiliário', 'Consumidor'],
    image: require('../../assets/juliana.jpg')
  },
  {
    id: '2',
    name: 'José Arnaldo',
    oab: 'SP/0000000',
    area: 'Trabalhista',
    skills: ['Contrato de Trabalho', 'Rescisão de Contrato'],
    image: require('../../assets/jose.jpg')
  },
  {
    id: '3',
    name: 'Dr. Pedro Tolvo',
    oab: 'SP/10492012',
    area: 'Tributário',
    skills: ['Imposto de Renda', 'Revisão IPTU'],
    image: require('../../assets/pedro.jpg')
  }
];

const LawyersScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('LawyerDetails', { lawyer: item })}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.oab}>{item.oab}</Text>
      <Text style={styles.area}>{item.area}</Text>
      <View style={styles.skills}>
        {item.skills.map((skill, index) => (
          <Text key={index} style={styles.skill}>{skill}</Text>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Encontre seu advogado</Text>
      <FlatList
        data={lawyers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F2FA',
    padding: 20
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F378B',
    textAlign: 'center',
    marginVertical: 20
  },
  card: {
    backgroundColor: '#D0BCFF',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  oab: {
    fontSize: 14,
    color: '#000'
  },
  area: {
    fontSize: 14,
    color: '#6750A4'
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10
  },
  skill: {
    backgroundColor: '#E8DEF8',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    color: '#4F378B'
  }
});

export default LawyersScreen;
