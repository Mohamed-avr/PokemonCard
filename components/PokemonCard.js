import { View, Text, StyleSheet, Platform, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { backgroundColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { backgroundColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { backgroundColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { backgroundColor: "#66CC66", emoji: "🌿" };
    default:
      return { backgroundColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}) {
  const { backgroundColor, emoji } = getTypeDetails(type);

  return (
    <View style={styles.card}>
      <StatusBar backgroundColor="#111" />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️ {hp}</Text>
      </View>

      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",

          padding: 10,
          gap: 10,
          // backgroundColor: "transparent",
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: backgroundColor,
            fontWeight: "bold",
            fontSize: 16,
            textTransform: "uppercase",
            marginTop: 6,
          }}
        >
          {type}
        </Text>
        <Text
          style={{
            fontSize: 28,
            textAlign: "center",
          }}
        >
          {emoji}
        </Text>
      </View>
      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />

      <BlurView
        blurReductionFactor={0.5}
        intensity={90}
        tint="dark"
        style={{
          height: 220,
          width: 220,
          position: "absolute",
          zIndex: -1,
          top: 230,
          right: 50,
          borderRadius: 125,

          overflow: "hidden",
          backgroundColor: backgroundColor,
        }}
      ></BlurView>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",

          borderRadius: 8,
          padding: 8,
          marginBottom: 16,
          gap: 10,
        }}
      >
        {moves.map((move, index) => (
          <View
            key={index}
            style={{
              padding: 8,
              flex: 1,
              height: 50,
              backgroundColor: backgroundColor,
              borderRadius: 8,
              justifyContent: "center",
            }}
          >
            <View style={styles.moveText}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                {move}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.weaknessesContainer}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 5,
            textAlign: "center",
            borderRadius: 8,
          }}
        >
          <Text
            style={{ color: backgroundColor, fontWeight: "600", fontSize: 18 }}
          >
            Weaknesses:
          </Text>
        </View>

        <Text style={{ color: "#333", fontWeight: "500", fontSize: 16 }}>
          {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

//  Css styles
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    padding: 16,
    height: 780,
    marginBottom: 16,

    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOpacity: 1,
        shadowOffset: {
          width: 0,
          height: 4,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },

  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    padding: 8,
    paddingHorizontal: 12,
    backgroundColor: "#151515",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
  },
  hp: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: 350,
    marginVertical: 26,
    marginTop: 50,
    flex: 1,
  },
  typeContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  movesContainer: {
    marginBottom: 16,
    width: "100%",
    backgroundColor: "#151515",
    padding: 16,
  },
  movesText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  weaknessesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#151515",
    borderRadius: 14,
  },
  weaknessesText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
