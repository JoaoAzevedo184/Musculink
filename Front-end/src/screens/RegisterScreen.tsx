import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Register"
>;

interface Props {
  navigation: RegisterScreenNavigationProp;
}

export default function RegisterScreen({ navigation }: Props) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [role, setRole] = useState<"ALUNO" | "INSTRUTOR">("ALUNO");

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Atenção", "Preencha todos os campos");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    try {
      // Aqui você pode integrar com o backend Spring Boot:
      // await fetch(`${API_URL}/auth/register`, { method: "POST", ... });
      console.log({ name, email, password, role });
      Alert.alert("Sucesso", "Cadastro realizado!");
      navigation.navigate("Login");
    } catch (err) {
      Alert.alert("Erro", "Falha ao registrar");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.logo}>Musculink</Text>
        <Text style={styles.title}>Crie sua Conta</Text>

        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="seuemail@dominio.com"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Crie uma senha forte"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Text style={styles.label}>Qual é o seu perfil?</Text>
        <View style={styles.roleContainer}>
          <TouchableOpacity
            style={[
              styles.roleButton,
              role === "ALUNO" && styles.roleSelected,
            ]}
            onPress={() => setRole("ALUNO")}
          >
            <Text
              style={[
                styles.roleText,
                role === "ALUNO" && styles.roleTextSelected,
              ]}
            >
              Aluno
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleButton,
              role === "INSTRUTOR" && styles.roleSelected,
            ]}
            onPress={() => setRole("INSTRUTOR")}
          >
            <Text
              style={[
                styles.roleText,
                role === "INSTRUTOR" && styles.roleTextSelected,
              ]}
            >
              Instrutor
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Já possui uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.footerLink}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  scroll: {
    padding: 20,
    alignItems: "center",
  },
  logo: {
    color: "#ff6600",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 5,
  },
  label: {
    alignSelf: "flex-start",
    color: "#ccc",
    marginBottom: 5,
    marginTop: 10,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#1c1c1e",
    color: "#fff",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 15,
  },
  roleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 15,
  },
  roleButton: {
    flex: 1,
    backgroundColor: "#1c1c1e",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  roleSelected: {
    backgroundColor: "#ff6600",
  },
  roleText: {
    color: "#ccc",
    fontWeight: "600",
  },
  roleTextSelected: {
    color: "#fff",
    fontWeight: "700",
  },
  registerButton: {
    backgroundColor: "#ff6600",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  registerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    marginTop: 20,
  },
  footerText: {
    color: "#aaa",
  },
  footerLink: {
    color: "#ff6600",
    fontWeight: "600",
  },
});