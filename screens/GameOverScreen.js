import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "./../components/BodyText";
import TitleText from "./../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          //source={require("../assets/success.png")}
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR952h7H7Jh3TlOWLbrs9uNop0tEK1v0j8USw&usqp=CAU",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
});

export default GameOverScreen;
