import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image,FlatList, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


 
const HomeScreen = () => {
  const isWeb = Platform.OS === 'web';

  const navigation = useNavigation();

  const scrollViewRef = useRef(null);
  const comoFuncionaRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.measureLayout(
      scrollViewRef.current,
      (x, y) => {
        scrollViewRef.current.scrollTo({ x: 0, y: y, animated: true });
      }
    );
  };


  return (
    <ScrollView style={isWeb ? styles.webContainer : styles.container}>
      <View style={isWeb ? styles.webMenu2 : styles.menu2}>
        <TouchableOpacity style={styles.viewAllButton} onPress={() => scrollToSection(comoFuncionaRef)}>
          <Text style={styles.viewAllButtonText}>Como Funciona</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate('LawyersScreen')}/*onPress={() => /*navigation.navigate('LawyersScreen.js')}*/>
          <Text style={styles.viewAllButtonText}>Quero uma consultoria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate('LawyerRegistrationScreen')}>
          <Text style={styles.viewAllButtonText}>Sou advogado </Text>
        </TouchableOpacity>
      </View>
      <View style={isWeb ? styles.webHeader : styles.header}>
        <Text style={isWeb? styles.webheaderText : styles.headerText}>Bem-vindo ao Simplificando Direito: Seu Guia Jurídico de Bolso!</Text>
        <Text style={isWeb? styles.websubtitulo : styles.container}>Transforme dúvidas em soluções. Simplifique seu direito.</Text>
        <TouchableOpacity style={styles.viewAllButton} /*onPress={() => /*navigation.navigate('LawyersScreen.js')}*/>
          <Text style={styles.viewAllButtonText} onPress={() => navigation.navigate('LawyersScreen')}> Acesse agora </Text>
        </TouchableOpacity>
      </View>
  
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Consultas Jurídicas com Advogados Qualificados</Text>
        <View style={isWeb ? styles.webCard : styles.card}>
          <View style={styles.cardContent}>
          <Text style={styles.sectionHeader}></Text>
          <Text style={isWeb ? styles.webCard : styles.card}>
            Não importa a complexidade do seu problema, nossos advogados cadastrados estão prontos 
            para ajudar. Basta agendar uma consulta diretamente pela plataforma e receber orientações 
            jurídicas personalizadas para sua situação
          </Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Segurança e Confiabilidade</Text>
      <View style={isWeb ? styles.webCard : styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.sectionHeader}></Text>
          <Text style={isWeb ? styles.webCard : styles.card}>
          No Simplificando Direito, sua privacidade e segurança são nossa prioridade. 
          Utilizamos as tecnologias padrões de criptografia para garantir que todas as 
          suas informações estejam sempre protegidas.
          </Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Por Que Escolher o Simplificando Direito?</Text>
        <View style={isWeb ? styles.webCard : styles.card}>
          <View style={styles.cardContent}>
          <Text style={styles.sectionHeader}></Text>
          <Text style={ isWeb ? styles.webCard : styles.card} >
          Praticidade: Atendimento jurídico a qualquer hora e em qualquer lugar.
          Confiabilidade: Profissionais qualificados e informações precisas.
          Acessibilidade: Informações jurídicas descomplicadas para todos.
          Eficiência: Respostas rápidas e atendimento personalizado.
          Transforme a maneira como você resolve suas questões jurídicas. 
          Experimente o Simplificando Direito hoje mesmo e veja como é fácil ter 
          acesso a informações e serviços jurídicos de qualidade.
          </Text>
          </View>
        </View>
      </View>
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
    flexDirection: 'col',
    justifyContent: 'space-between',
    alignItems: 'left',
    marginBottom: 16,
  },
  webHeader: {
    flexDirection: 'col',
    justifyContent: 'space-between',
    alignItems: 'left',
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
  websubtitulo:{
    fontSize: 25,
  },
  menu2: {
    flexDirection: 'row',
    justifyContent: 'flex-left',
  },
  webMenu2:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontSize: 18,
    color: 'purple',
  },
  webCard: {
    fontSize: 20,
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
