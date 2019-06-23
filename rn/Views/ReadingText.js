import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default class ReadingText extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    const text = this.props.text;
    return (
      <View style={styles.container}>
        {text.map(text => (
          <Text style={styles.optionText}>{text}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    flexGrow: 1,
    flex: 1
  }
});
