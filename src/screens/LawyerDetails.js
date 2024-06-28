// LawyerDetails.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LawyerDetails = ({ route }) => {
  const { lawyer } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={lawyer.image} style={styles.image} />
      <Text style={styles.name}>{lawyer.name}</Text>
      <Text style={styles.oab}>OAB: {lawyer.oab}</Text>
      <Text style={styles.area}>{lawyer.area}</Text>
      <View style={styles.skills}>
        {lawyer.skills.map((skill, index) => (
          <Text key={index} style={styles.skill}>{skill}</Text>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ContactEmailScreen', { lawyer })}
      >
        <Text style={styles.buttonText}>Mande um e-mail</Text>
      </TouchableOpacity>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F2FA',
    alignItems: 'center',
    padding: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
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
    marginTop: 10,
    marginBottom: 20
  },
  skill: {
    backgroundColor: '#E8DEF8',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    color: '#4F378B'
  },
  button: {
    backgroundColor: '#6750A4',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500'
  }
});

export default LawyerDetails;
