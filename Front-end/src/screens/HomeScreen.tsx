import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const professionals = [
    { id: 1, name: "Ana Silva", specialty: "Hipertrofia", rating: 4.9, image: require("../assets/ana.png") },
    //{ id: 2, name: "Carlos Lima", specialty: "Performance", rating: 4.8, image: require("../assets/carlos.png") },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Olá, João!</Text>
            <Text style={styles.subGreeting}>Pronto para hoje?</Text>
          </View>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
        </View>

        {/* Treino do dia */}
        <View style={styles.workoutCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
            }}
            style={styles.workoutImage}
          />
          <View style={styles.workoutInfo}>
            <Text style={styles.workoutTitle}>Treino A: Peito e Tríceps</Text>
            <Text style={styles.workoutDetails}>
              Duração estimada: 60 min{"\n"}Foco: Força e Hipertrofia
            </Text>
            <TouchableOpacity style={styles.workoutButton}>
              <Text style={styles.workoutButtonText}>Começar Treino</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Progresso */}
        <Text style={styles.sectionTitle}>Seu Progresso</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressCard}>
            <Ionicons name="trophy-outline" size={28} color="#ff6600" />
            <Text style={styles.progressTitle}>Novo Recorde</Text>
            <Text style={styles.progressText}>Supino Reto: 80kg</Text>
          </View>

          <View style={styles.progressCard}>
            <Ionicons name="calendar-outline" size={28} color="#ff6600" />
            <Text style={styles.progressTitle}>Semanas Consecutivas</Text>
            <Text style={styles.progressText}>4 semanas</Text>
          </View>
        </View>

        {/* Profissionais */}
        <Text style={styles.sectionTitle}>
          Profissionais Sugeridos para Você
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {professionals.map((p) => (
            <View key={p.id} style={styles.professionalCard}>
              <Image source={p.image} style={styles.professionalImage} />
              <Text style={styles.professionalName}>{p.name}</Text>
              <Text style={styles.professionalSpecialty}>{p.specialty}</Text>
              <View style={styles.ratingRow}>
                <Ionicons name="star" size={16} color="#ff6600" />
                <Text style={styles.ratingText}>{p.rating}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation (mock) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#ff6600" />
          <Text style={styles.navTextActive}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="clipboard-outline" size={22} color="#ccc" />
          <Text style={styles.navText}>Planos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="people-outline" size={22} color="#ccc" />
          <Text style={styles.navText}>Profissionais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="#ccc" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  greeting: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  subGreeting: {
    color: "#ccc",
    fontSize: 16,
  },
  workoutCard: {
    backgroundColor: "#1c1c1e",
    borderRadius: 15,
    margin: 20,
    overflow: "hidden",
  },
  workoutImage: {
    width: "100%",
    height: 180,
  },
  workoutInfo: {
    padding: 15,
  },
  workoutTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  workoutDetails: {
    color: "#ccc",
    marginTop: 5,
    fontSize: 14,
  },
  workoutButton: {
    backgroundColor: "#ff6600",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  workoutButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 20,
    marginTop: 10,
  },
  progressContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10,
  },
  progressCard: {
    backgroundColor: "#2a1c10",
    borderRadius: 15,
    flex: 1,
    padding: 15,
    marginRight: 10,
    alignItems: "center",
  },
  progressTitle: {
    color: "#fff",
    fontWeight: "700",
    marginTop: 10,
    textAlign: "center",
  },
  progressText: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 3,
    textAlign: "center",
  },
  professionalCard: {
    backgroundColor: "#1c1c1e",
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 10,
    alignItems: "center",
    width: 140,
  },
  professionalImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  professionalName: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "center",
  },
  professionalSpecialty: {
    color: "#ccc",
    fontSize: 13,
    textAlign: "center",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    color: "#fff",
    fontSize: 13,
    marginLeft: 3,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#1c1c1e",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#333",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    color: "#ccc",
    fontSize: 12,
    marginTop: 3,
  },
  navTextActive: {
    color: "#ff6600",
    fontSize: 12,
    marginTop: 3,
  },
});
