import React from 'react';
import { Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const DocumentScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Criar Documentos</Text>
      {/* Adicione os componentes e funcionalidades da página de documentos aqui */}
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Criar Novo Documento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#21005D',
    textAlign: 'center',
    marginVertical: 20,
  },
  createButton: {
    backgroundColor: '#6750A4',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  createButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default DocumentScreen;
