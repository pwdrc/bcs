import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import PropTypes from 'prop-types';

export default function ContactEmailScreen({ navigation, route }) {
  const { lawyer } = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    navigation.navigate('EmailSentScreen', { lawyer });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.navigationBar}>
        <View style={styles.iconContainer}>
          <View style={styles.icon} />
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Image source={require('../../assets/juliana.jpg')} style={styles.profileImage} />
        <Text style={styles.name}>{lawyer.name}</Text>
        <Text style={styles.oab}>OAB: {lawyer.oab}</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{lawyer.specialty}</Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Insira seu nome completo"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Insira seu endereço de e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Descreva brevemente o motivo do contato"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        style={styles.input}
        placeholder="(DDD) 00000-0000"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.textarea}
        placeholder="Descreva com detalhes como a Juliana pode lhe ajudar"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

ContactEmailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      lawyer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        oab: PropTypes.string.isRequired,
        specialty: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    width: '100%',
    height: 79,
    backgroundColor: '#D0BCFF',
    borderRadius: 8,
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 5,
  },
  oab: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#D9D9D9',
    borderColor: '#79747E',
    borderWidth: 0.865385,
    borderRadius: 86.5385,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  tagText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#6750A4',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 38,
    borderWidth: 1,
    borderColor: '#4F378B',
    borderRadius: 6,
    marginBottom: 10,
    paddingLeft: 10,
  },
  textarea: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#4F378B',
    borderRadius: 6,
    marginBottom: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },
  button: {
    width: '100%',
    height: 47,
    backgroundColor: '#D0BCFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#21005D',
  },
  backButton: {
    width: '100%',
    height: 47,
    backgroundColor: '#D0BCFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#21005D',
  },
});
