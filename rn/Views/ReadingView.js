import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Touchable from "react-native-platform-touchable";
import { Ionicons } from "@expo/vector-icons";
import Reading from "../components/Reading";
import ReadingText from "./ReadingText";

export default class ReadingView extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.optionsTitleText}>Resources</Text>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple("#ccc", false)}
          onPress={this._handlePressDocs}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionIconContainer} />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Read the Expo documentation</Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple("#ccc", false)}
          onPress={this._handlePressForums}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionIconContainer}>
              <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Ask a question on the Expo forums
              </Text>
            </View>
          </View>
        </Touchable>
        <Touchable
          style={styles.option}
          background={Touchable.Ripple("#ccc", false)}
          onPress={this._handleReadingPress}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionIconContainer} />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Get Reading</Text>
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple("#ccc", false)}
          onPress={this._handleReadingPress}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionIconContainer} />
            <View style={styles.optionTextContainer}>
              <ReadingText text={this.readingtext} />
            </View>
          </View>
        </Touchable>
      </View>
    );
  }

  _handlePressDocs = () => {
    WebBrowser.openBrowserAsync("http://docs.expo.io");
  };

  _handlePressForums = () => {
    WebBrowser.openBrowserAsync("http://forums.expo.io");
  };

  _handleReadingPress = () => {
    console.log(Reading);
    const reading = new Reading();
    this.readingtext = reading.getReading();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  },
  optionIconContainer: {
    marginRight: 9
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EDEDED"
  },
  optionText: {
    fontSize: 15,
    marginTop: 1
  }
});
