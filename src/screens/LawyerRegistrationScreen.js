import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const LawyerRegistrationScreen = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [oab, setOab] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [oabDocument, setOabDocument] = useState(null);
  const [cpfDocument, setCpfDocument] = useState(null);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleOabFileChange = (e) => {
    setOabDocument(e.target.files[0]);
  };

  const handleCpfFileChange = (e) => {
    setCpfDocument(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de validação e envio do formulário
    console.log("Nome:", name);
    console.log("CPF:", cpf);
    console.log("OAB:", oab);
    console.log("Email:", email);
    console.log("Celular:", celular);
    console.log("Senha:", password);
    console.log("Confirmar senha:", confirmPassword);
    console.log("Foto:", photo);
    console.log('Documento da OAB:', oabDocument);
    console.log('Documento do CPF:', cpfDocument);
  };

  return (
    <div style={styles.scrollContainer}>
      <div style={styles.container}>
        <div style={styles.segment}>
          <div style={styles.iconContainer}>
            <div style={styles.stateLayer}>
              <div style={styles.icon}></div>
            </div>
          </div>
          <div style={styles.labelText1}>Cadastro de advogados</div>
        </div>
        <div style={styles.segment}>
          <div style={styles.iconContainer}>
            <div style={styles.stateLayer}>
              <div style={styles.icon}></div>
            </div>
          </div>
          <div style={styles.labelText2}>(breve explicação)</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={styles.field}>
            <div style={styles.labelFileUpload}>Foto de Perfil</div>
            <label htmlFor="file-upload" style={styles.customPhotoUpload}>
              <FaCamera style={styles.uploadIcon1} />
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={styles.fileInput}
            />
          </div>
          <FormField
            label="Seu Nome"
            placeholder="Insira seu nome completo"
            value={name}
            onChange={handleInputChange(setName)}
          />
          <FormField
            label="CPF"
            placeholder="Insira seu CPF"
            value={cpf}
            onChange={handleInputChange(setCpf)}
          />
          <FormField
            label="OAB"
            placeholder="Insira seu documento da OAB"
            value={oab}
            onChange={handleInputChange(setOab)}
          />
          <FormField
            label="E-mail"
            placeholder="Insira seu e-mail"
            value={email}
            onChange={handleInputChange(setEmail)}
          />
          <FormField
            label="Celular"
            placeholder="(DDD) 9 9999-9999"
            value={celular}
            onChange={handleInputChange(setCelular)}
          />
          <FormField
            label="Senha"
            placeholder="Insira uma senha de acesso"
            type="password"
            value={password}
            onChange={handleInputChange(setPassword)}
          />
          <FormField
            label="Confirme a senha"
            placeholder="Reinsira a senha de acesso"
            type="password"
            value={confirmPassword}
            onChange={handleInputChange(setConfirmPassword)}
          />
          <div style={styles.field}>
            <div style={styles.labelFileUpload}>Documento da OAB</div>
            <label htmlFor="oab-upload" style={styles.customFileUpload}>
              <FaCamera style={styles.uploadIcon2} />
            </label>
            <input
              id="oab-upload"
              type="file"
              accept="image/*, application/pdf"
              onChange={handleOabFileChange}
              style={styles.fileInput}
            />
          </div>
          <div style={styles.field}>
            <div style={styles.labelFileUpload}>Documento do CPF</div>
            <label htmlFor="cpf-upload" style={styles.customFileUpload}>
              <FaCamera style={styles.uploadIcon2} />
            </label>
            <input
              id="cpf-upload"
              type="file"
              accept="image/*, application/pdf"
              onChange={handleCpfFileChange}
              style={styles.fileInput}
            />
          </div>
          <button style={styles.button} type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

const FormField = ({ label, placeholder, value, onChange, type = "text" }) => (
  <div style={styles.field}>
    <div style={styles.label}>{label}</div>
    <div style={styles.inputContainer}>
      <input
        style={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

const styles = {
  scrollContainer: {
    maxHeight: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: 16,
  },
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  segment: {
    alignItems: "center",
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
    fontSize: 40,
    fontWeight: "bold",
    color: "#4F378B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    // Estilos do texto do rótulo
  },
  labelText2: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#4F378B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    // Estilos do texto do rótulo
  },
  field: {
    width: "100%",
    marginBottom: 15, // Reduzi o marginBottom para diminuir o espaçamento entre os campos
  },
  label: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#4F378B",
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    margin: "auto",
    position: "relative",
    top: -10,
    left: 570,
  },
  inputContainer: {
    width: "60%",
    height: 32, // Reduzi a altura do input
    borderWidth: 1,
    borderColor: "#4F378B",
    borderRadius: 6,
    marginBottom: 6, // Reduzi o marginBottom para diminuir o espaçamento interno
    paddingLeft: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  input: {
    width: "60%",
    height: 32, // Reduzi a altura do input
    borderWidth: 0.5,
    borderColor: "#4F378B",
    borderRadius: 6,
    marginBottom: 6, // Reduzi o marginBottom para diminuir o espaçamento interno
    paddingLeft: 10,
    textAlign: "left", // Alinha o texto ao centro dentro do input
  },
  button: {
    backgroundColor: '#D0BCFF',
    padding: 10,
    borderRadius: 5,
    width: "10%", // Define a largura do botão
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  customPhotoUpload: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    cursor: "pointer",
    padding: 10,
    border: "1px solid #4F378B",
    borderRadius: "50%",
    backgroundColor: "#f9f9f9",
    width: 85,
    height: 85,
    marginBottom: 15,
  },
  customFileUpload: {
    backgroundColor: "#4F378B",
    padding: 10,
    borderRadius: 5,
    width: "10%", // Define a largura do botão
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
  labelFileUpload: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4F378B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    position: "relative",
    top: -10,
    left: 0,
  },
  uploadIcon1: {
    fontSize: 24,
    color: "#4F378B",
  },
  uploadIcon2: {
    fontSize: 24,
    color: "#000000",
  },
  fileInput: {
    display: "none",
  },
};

export default LawyerRegistrationScreen;
