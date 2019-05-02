import React, { Component } from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';

import QuestList from './QuestList';

export default class QuestListNav extends Component {
  render(){
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Quests',
          component: QuestList,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e8d5',
  },
});