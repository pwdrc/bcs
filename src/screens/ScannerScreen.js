import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ScannerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanner</Text>
      {/* Adicione os componentes e funcionalidades da página do scanner aqui */}
      <TouchableOpacity style={styles.scanButton}>
        <Text style={styles.scanButtonText}>Iniciar Scanner</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#F7F2FA',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#21005D',
    textAlign: 'center',
    marginVertical: 20,
  },
  scanButton: {
    backgroundColor: '#6750A4',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  scanButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default ScannerScreen;
