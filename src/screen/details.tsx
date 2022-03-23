import React, { FC } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Ionicons, AntDesign } from "@expo/vector-icons";

interface BikeProps {
  text: string;
  value: string;
}

const BikeDetails: BikeProps[] = [
  {
    text: "TOP-SPEED",
    value: "120 MPH"
  },
  {
    text: "ENGINE",
    value: "350 CC"
  },
  {
    text: "WEIGHT",
    value: "150 KG"
  }
];

const Details: FC = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar} />
      <View
        style={{
          marginVertical: 50,
          paddingHorizontal: 30
        }}
      >
        <AntDesign
          name="left"
          size={18}
          color="#c4c4c4"
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.bikeText}>ART</Text>
        <Text style={styles.bikeText}>BIKES</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/bike.png")} />
      </View>
      <View
        style={{
          marginTop: 120,
          padding: 20
        }}
      >
        <Text
          style={{
            color: "#edf7f8",
            letterSpacing: -2,
            marginBottom: 20,
            fontSize: 25
          }}
        >
          THE ART BIKE
        </Text>
        <Text
          style={{
            color: "#b9cdcb",
            letterSpacing: -0.6,
            marginBottom: 20,
            fontSize: 12,
            textAlign: "justify",
            lineHeight: 25
          }}
        >
          A MOTORCYCLE OFTEN CALLED A MOTORBIKE, BIKE OR, CYCLE IS A TWO OR
          THREE-WHEELED MOTOR VEHICLE[1] MOTORCYCLE DESIGN VRIES GREATLY TO SUIT
          A RANGE OF DIFFERENT PURPOSES
        </Text>
        <View style={styles.justify}>
          {BikeDetails.map((item) => (
            <View key={item.text} style={styles.detailsContainer}>
              <Text
                style={{
                  color: "#d5e8e6",
                  letterSpacing: -1,
                  fontSize: 10
                }}
              >
                {item.text}
              </Text>
              <Text
                style={{
                  color: "#f7ffff",
                  letterSpacing: -1,
                  fontSize: 15
                }}
              >
                {item.value}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            ...styles.justify,
            marginTop: 20,
            width: "100%",
            alignSelf: "center"
          }}
        >
          <View
            style={{
              backgroundColor: "#d1e4e2",
              borderRadius: 10,
              width: "15%",
              height: 45,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Ionicons name="lock-closed-outline" color="#333" size={19} />
          </View>
          <Pressable style={styles.button}>
            <Text
              style={{
                color: "#edf7f8",
                letterSpacing: -2,
                fontSize: 18
              }}
            >
              ADD TO CART
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Details;

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
    height: "40%",
    position: "absolute",
    right: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#708985",
    justifyContent: "center"
  },
  textContainer: {
    // position: "absolute",
    // top: '15%',
    // left: '10%'
    marginLeft: 30
  },
  bikeText: {
    color: "#6d817f",
    letterSpacing: -3,
    fontSize: 80,
    lineHeight: 90
  },
  imageContainer: {
    width: 280,
    height: 200,
    position: "absolute",
    top: "10%",
    right: 20
  },
  image: {
    width: "100%",
    height: "100%"
  },
  detailsContainer: {
    width: "30%",
    alignItems: "center",
    backgroundColor: "#708985",
    padding: 8,
    borderRadius: 5,
    marginVertical: 10
  },
  button: {
    width: "80%",
    backgroundColor: "#708985",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 45
  }
});
