import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const isWeb = Platform.OS === 'web';

  return (
    <ScrollView style={isWeb ? styles.webContainer : styles.container}>
      <View style={isWeb ? styles.webHeader : styles.header}>
        <Text style={isWeb? styles.webheaderText : styles.headerText}>Simplificando Direito</Text>
        <Ionicons name="person-circle" size={40} color="purple" />
      </View>
      <View style={isWeb ? styles.webStatusContainer : styles.statusContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
        <View>
          <Text style={styles.statusText}>
            Seu(sua) advogado(a) está: <Text style={styles.onlineText}>Online</Text>
          </Text>
          <Text style={styles.lawyerName}>Juliana Amaral dos Santos</Text>
          <Text style={styles.lawyerDetails}>OAB: MS/3212489</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Conversar com Juliana</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Solicitações em Andamento</Text>
        <View style={styles.card}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Ofício de Recuperação de Bens</Text>
            <Text style={styles.cardSubtitle}>Status: 2/3 assinados</Text>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>Mais Detalhes</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>Ver Todas as Solicitações</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Último Documento Acessado</Text>
        <View style={styles.card}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Contrato de Aluguel</Text>
            <Text style={styles.cardSubtitle}>Validade: 02/2018</Text>
            <Text style={styles.cardSubtitle}>Último acesso: 03/11/23</Text>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>Quero Rever</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {isWeb ? (
        <View style={styles.webFloatingButton}>
          <Ionicons name="chatbubble-ellipses" size={34} color="white" />
        </View>
      ) : (
        <View style={styles.floatingButton}>
          <Ionicons name="chatbubble-ellipses" size={24} color="white" />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  webContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingLeft: 200,
    paddingRight: 200,
  
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  webHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
      },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
  },
  webheaderText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'purple',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  webStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  statusText: {
    fontSize: 16,
  },
  onlineText: {
    color: 'green',
    fontWeight: 'bold',
  },
  lawyerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lawyerDetails: {
    fontSize: 14,
    color: 'gray',
  },
  chatButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  chatButtonText: {
    color: 'white',
    fontSize: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    padding: 10,
    marginBottom: 8,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 8,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 4,
  },
  detailsButton: {
    backgroundColor: 'purple',
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  detailsButtonText: {
    color: 'white',
    fontSize: 14,
  },
  viewAllButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  viewAllButtonText: {
    color: 'purple',
    fontSize: 16,
  },
  floatingButton: {
    backgroundColor: 'purple',
    width: 56,
    height: 56,
    borderRadius: 28,
    position: 'absolute',
    bottom: 16,
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webFloatingButton: {
    backgroundColor: 'purple',
    width: 56,
    height: 56,
    borderRadius: 28,
    position: 'fixed',
    bottom: 16,
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;