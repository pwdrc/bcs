import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import LawyersScreen from './src/screens/LawyersScreen';
import LawyerDetails from './src/screens/LawyerDetails';
import DocumentScreen from './src/screens/DocumentScreen';
import ScannerScreen from './src/screens/ScannerScreen';
import EmailSentScreen from './src/screens/EmailSentScreen';
import ContactEmailScreen from './src/screens/ContactEmailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LawyersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LawyersScreen" component={LawyersScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LawyerDetails" component={LawyerDetails} options={{ headerShown: false }} />
      <Stack.Screen name="ContactEmailScreen" component={ContactEmailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EmailSentScreen" component={EmailSentScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = 'home';
            } else if (route.name === 'Consultoria') {
              iconName = 'briefcase';
            } else if (route.name === 'Documentos') {
              iconName = 'document';
            } else if (route.name === 'Scanner') {
              iconName = 'scan';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#D0BCFF', // Define a cor de fundo da barra de navegação
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          },
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Consultoria" component={LawyersStack} />
        <Tab.Screen name="Documentos" component={DocumentScreen} />
        <Tab.Screen name="Scanner" component={ScannerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
