import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import SearchComponent from './components/SearchComponent';

export default class LandingPage extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Find Account',
          component: SearchComponent,
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
