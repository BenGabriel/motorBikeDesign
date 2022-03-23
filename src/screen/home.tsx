import React, { FC } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";

const Home: FC = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <View style={{ marginTop: "230%" }}>
          <Text style={styles.sideText}>Best sale</Text>
          <Text style={styles.sideText}>Popular</Text>
          <Text style={styles.sideText}>New Arrival</Text>
        </View>
      </View>

      {/* Tob bar */}
      <View style={styles.topBar}>
        <Entypo name="grid" size={20} color="#c3c3c3" />
        <View
          style={{
            ...styles.justify,
            width: "15%"
          }}
        >
          <MaterialIcons name="favorite-outline" size={20} color="#c3c3c3" />
          <MaterialIcons name="more-vert" size={20} color="#c3c3c3" />
        </View>
      </View>

      <View
        style={{
          marginLeft: 30,
          marginTop: -10
        }}
      >
        <Text style={styles.bikeText}>BIKES</Text>
        <Text style={styles.bikeText}>COLLECTONS</Text>
      </View>

      {/* second container */}
      <View style={styles.secContainer}>
        <Pressable
          style={styles.bikeContainer}
          onPress={() => props.navigation.navigate("Details")}
        >
          <View
            style={{
              ...styles.justify,
              paddingHorizontal: 15
            }}
          >
            <View style={styles.justify}>
              <MaterialIcons name="star" size={16} color="#f3b90d" />
              <Text style={{ color: "#fff", fontSize: 14, marginLeft: 2 }}>
                4.5
              </Text>
            </View>
            <MaterialIcons name="favorite-outline" size={16} color="#c3c3c3" />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/bike.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={{ ...styles.justify, padding: 15 }}>
            <View>
              <Text style={styles.text}>ART BIKE</Text>
              <Text style={styles.text}>$5.560</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#c4c4c4",
                borderRadius: 4,
                padding: 5
              }}
            >
              <Ionicons name="lock-closed-outline" size={12} color="#f6f6f6" />
            </View>
          </View>
        </Pressable>
        <View
          style={{
            width: "78%",
            ...styles.justify,
            marginVertical: 20
          }}
        >
          <View style={styles.smallImage}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require("../../assets/tyre.png")}
            />
          </View>
          <View style={{ ...styles.smallImage, padding: 5 }}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require("../../assets/engine.png")}
            />
          </View>
          <View style={styles.smallImage}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={require("../../assets/wheel.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  justify: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  container: {
    backgroundColor: "#5c726f",
    flex: 1
  },
  sidebar: {
    width: 80,
    height: "100%",
    position: "absolute",
    left: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#708985",
    justifyContent: "center"
  },
  sideText: {
    transform: [
      {
        rotate: "270deg"
      }
    ],
    marginVertical: 45,
    width: 100,
    color: "#c4c4c4",
    textAlign: "center"
  },
  topBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 40,
    marginTop: 60,
    padding: 10,
    paddingHorizontal: 30
  },
  bikeText: {
    color: "#fff",
    fontSize: 30,
    letterSpacing: -2
  },
  secContainer: {
    flex: 1,
    padding: 10,
    paddingLeft: 90,
    alignItems: "center"
  },
  bikeContainer: {
    width: "80%",
    backgroundColor: "#708985",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 40
  },
  imageContainer: {
    width: 270,
    height: 200,
    alignSelf: "center",
    marginVertical: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  text: {
    letterSpacing: -1,
    color: "#f5f5f5",
    fontSize: 16
  },
  smallImage: {
    width: 50,
    height: 50,
    padding: 10,
    backgroundColor: "#708985",
    borderRadius: 5
  }
});
