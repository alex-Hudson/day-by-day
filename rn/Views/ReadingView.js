import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import Touchable from "react-native-platform-touchable";
import { Ionicons } from "@expo/vector-icons";
import Reading from "../components/Reading";
import ReadingText from "./ReadingText";
import * as questions from "../assets/database/questions";

export default class ReadingView extends React.Component {
  render() {
    const text = this.state ? this.state.text : "hello";
    const questionText =
      this.state && this.state.questionText ? this.state.questionText : [];

    console.log(text);
    return (
      <View>
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
              <ReadingText text={text} />
            </View>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple("#ccc", false)}
          onPress={this._handleQuestionPress}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionIconContainer} />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Get Question</Text>
            </View>
          </View>
        </Touchable>
        <Touchable
          style={styles.option}
          background={Touchable.Ripple("#ccc", false)}
          onPress={this._handleQuestionPress}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionIconContainer} />
            <View style={styles.optionTextContainer}>
              {questionText.map(question => (
                <Text style={styles.optionText}>{question}</Text>
              ))}
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

  _handleReadingPress = async () => {
    const reading = new Reading();
    console.log(questions.default);
    const reference = this._getReference();
    const readingText = await reading.getReading(reference);
    console.log(readingText);
    //this.setState({ text: readingText });
    this.setState({ text: readingText });
  };

  _handleQuestionPress = () => {
    console.log("press");
    const reference = "John 3:16";
    const tempQuestions = questions.default[reference];
    console.log(tempQuestions);
    this.setState({ questionText: tempQuestions });
  };

  _getReference() {
    const references = Object.keys(questions.default);
    console.log(references);
    const reference = references[0]; // TODO handle get reference correctly
    return reference;
  }
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
