import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
// import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
export default class MorningAthkar extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `أذكار الصباح`,
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text> Welcome </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
