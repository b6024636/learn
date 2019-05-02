import React, { Component } from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';

import * as QuestsObj from '../lib/quests'

export default class QuestList extends Component {  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     data: null,
  //   };
  // }
  // componentDidMount(){
  //       fetch('https://api.mydomain.com')
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }));
  // }
  // }
  render(){
  const questLinks = QuestsObj.Quests.links;
    return(
      <View style={styles.main}>
      {Object.keys(questLinks).map(function(key){
            return(
              <Text>
                {questLinks[key].name}
              </Text>
          );})}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#e5e6ea'
  }
});