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
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Atenção", "Preencha todos os campos");
      return;
    }

    try {
      // Exemplo de integração com seu backend Spring Boot
      // const response = await fetch("http://<seu-servidor>:8080/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await response.json();
      // if (!response.ok) throw new Error(data.message);

      console.log("Login realizado:", { email, password });
      Alert.alert("Sucesso", "Login efetuado com sucesso!");
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Erro", "Credenciais inválidas ou falha de conexão");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.logo}>Musculink</Text>
        <Text style={styles.title}>Bem-vindo(a) de volta!</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="seuemail@dominio.com"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 20 }}
        >
          <Text style={styles.footerText}>
            Ainda não tem uma conta?{" "}
            <Text style={styles.footerLink}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
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
    marginTop: 40,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 10,
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
  loginButton: {
    backgroundColor: "#ff6600",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    color: "#aaa",
    fontSize: 14,
  },
  footerLink: {
    color: "#ff6600",
    fontWeight: "600",
  },
});
