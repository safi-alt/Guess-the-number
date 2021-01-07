import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "./../components/BodyText";
import TitleText from "./../components/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!!</TitleText>
      <Image source={require("../assets/success.png")} />
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
});

export default GameOverScreen;
