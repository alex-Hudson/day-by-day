import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default class ReadingText extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}
