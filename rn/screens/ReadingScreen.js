import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import ReadingView from "../Views/ReadingView";

export default function ReadingScreen() {
  console.log(ReadingView);
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      {/* <ExpoLinksView /> */}
      <ReadingView />
    </ScrollView>
  );
}

ReadingScreen.navigationOptions = {
  title: `Today's Reading`
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
