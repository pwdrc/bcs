import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LawyerRegistrationScreen = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [oab, setOab] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [oabDocument, setOabDocument] = useState(null);
  const [cpfDocument, setCpfDocument] = useState(null);

  const handleInputChange = (setter) => (text) => {
    setter(text);
  };

  const handleFileChange = (file) => {
    // Implementar lógica para seleção de arquivo no React Native
    console.log('Foto selecionada:', file);
  };

  const handleOabFileChange = (file) => {
    // Implementar lógica para seleção de arquivo do documento da OAB
    console.log('Documento da OAB selecionado:', file);
  };

  const handleCpfFileChange = (file) => {
    // Implementar lógica para seleção de arquivo do documento do CPF
    console.log('Documento do CPF selecionado:', file);
  };

  const handleSubmit = () => {
    // Implementar lógica de validação e envio do formulário
    console.log('Nome:', name);
    console.log('CPF:', cpf);
    console.log('OAB:', oab);
    console.log('Email:', email);
    console.log('Celular:', celular);
    console.log('Senha:', password);
    console.log('Confirmar senha:', confirmPassword);
    console.log('Foto:', photo);
    console.log('Documento da OAB:', oabDocument);
    console.log('Documento do CPF:', cpfDocument);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.segment}>
          <View style={styles.iconContainer}>
            <View style={styles.stateLayer}>
              {/* Ícone aqui */}
            </View>
          </View>
          <Text style={styles.labelText1}>Cadastro de advogados</Text>
        </View>
        <View style={styles.segment}>
          <View style={styles.iconContainer}>
            <View style={styles.stateLayer}>
              {/* Ícone aqui */}
            </View>
          </View>
          <Text style={styles.labelText2}>(breve explicação)</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.labelFileUpload}>Foto de Perfil</Text>
            <Icon name="camera" style={styles.uploadIcon1} />
          </TouchableOpacity>
          {/* Implemente a seleção de arquivo para foto aqui */}
        </View>
        <FormField
          label="Seu Nome"
          placeholder="Insira seu nome completo"
          value={name}
          onChangeText={handleInputChange(setName)}
        />
        <FormField
          label="CPF"
          placeholder="Insira seu CPF"
          value={cpf}
          onChangeText={handleInputChange(setCpf)}
        />
        <FormField
          label="OAB"
          placeholder="Insira seu documento da OAB"
          value={oab}
          onChangeText={handleInputChange(setOab)}
        />
        <FormField
          label="E-mail"
          placeholder="Insira seu e-mail"
          value={email}
          onChangeText={handleInputChange(setEmail)}
        />
        <FormField
          label="Celular"
          placeholder="(DDD) 9 9999-9999"
          value={celular}
          onChangeText={handleInputChange(setCelular)}
        />
        <FormField
          label="Senha"
          placeholder="Insira uma senha de acesso"
          secureTextEntry
          value={password}
          onChangeText={handleInputChange(setPassword)}
        />
        <FormField
          label="Confirme a senha"
          placeholder="Reinsira a senha de acesso"
          secureTextEntry
          value={confirmPassword}
          onChangeText={handleInputChange(setConfirmPassword)}
        />
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.labelFileUpload}>Documento da OAB</Text>
          <Icon name="camera" style={styles.uploadIcon2} />
        </TouchableOpacity>
        {/* Implemente a seleção de arquivo para documento da OAB aqui */}
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.labelFileUpload}>Documento do CPF</Text>
          <Icon name="camera" style={styles.uploadIcon2} />
        </TouchableOpacity>
        {/* Implemente a seleção de arquivo para documento do CPF aqui */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const FormField = ({ label, placeholder, value, onChangeText, secureTextEntry }) => (
  <View style={styles.field}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  </View>
);

const styles = {
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  segment: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    // Estilos do container do ícone
  },
  stateLayer: {
    // Estilos da camada de estado
  },
  icon: {
    // Estilos do ícone
  },
  labelText1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F378B',
    textAlign: 'center',
    marginBottom: 10,
  },
  labelText2: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#4F378B',
    textAlign: 'center',
    marginBottom: 20,
  },
  field: {
    marginBottom: 15,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4F378B',
    marginBottom: 6,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#4F378B',
    borderRadius: 6,
    marginBottom: 6,
    paddingLeft: 10,
  },
  input: {
    height: 40,
    borderWidth: 0.5,
    borderColor: '#4F378B',
    borderRadius: 6,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#D0BCFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  labelFileUpload: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4F378B',
    marginBottom: 10,
  },
  uploadIcon1: {
    fontSize: 24,
    color: '#4F378B',
    marginBottom: 10,
  },
  uploadIcon2: {
    fontSize: 24,
    color: '#000000',
    marginBottom: 10,
  },
};

export default LawyerRegistrationScreen;
