import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function EmailSentScreen({ navigation, route }) {
  const { lawyer } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <View style={styles.iconContainer}>
          <View style={styles.icon} />
        </View>
      </View>
      <Image source={require('../../assets/teste2.jpg')} style={styles.profileImage} />
      <Text style={styles.name}>{lawyer.name}</Text>
      <Text style={styles.oab}>OAB: {lawyer.oab}</Text>
      <Text style={styles.message}>
        Fique tranquilo! 😊 Sua mensagem já foi enviada e a advogada Juliana Amaral dos Santos
        entrará em contato com você em breve. Obrigado por utilizar nossa plataforma! Fique de olho
        no seu e-mail e telefone para nossas próximas comunicações.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LawyersScreen')}>
        <Text style={styles.buttonText}>Voltar para tela de advogados</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Início')}>
        <Text style={styles.buttonText}>Voltar para Início</Text>
      </TouchableOpacity>
    </View>
  );
}

EmailSentScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      lawyer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        oab: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  oab: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#D0BCFF',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
