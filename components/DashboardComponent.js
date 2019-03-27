import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from 'react-native';

import SwipeableModal from './Modal';

import cardStyles from '../assets/CardStyles';

export default class DashboardComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {
        other: undefined,
      }
      this.loadInfo = this.loadInfo.bind(this);
    }
  loadInfo(e) {
    console.log('helo');
  }

  render() {
    const data = this.props.userInfo;

    // console.log(data);
    const other = {
      'Easy Clue Scroll': data.bountyHunter,
      'Medium Clue Scroll': data.bountyHunterRogues,
      'Hard Clue Scroll': data.hardClueScrolls,
      'Elite Clue Scroll': data.eliteClueScrolls,
      'Master Clue Scroll': data.masterClueScrolls,
      'Lastman Standing': data.lastManStanding,
      'Bounty Hunter': data.easyClueScrolls,
      'Bounty Hunter Rogues': data.mediumClueScrolls,
    };
    //If object isn't a skill, remove it from the list
    Object.keys(data).map(function(key){
      !(data[key].level) &&
        delete data[key];
    })
    Object.keys(other).map(function(key){
      (other[key].rank == -1) &&
        delete other[key];
    })
    return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.header}>Skills</Text>     
        </View>
          {Object.keys(data).map(function(key){
            data[key].name = key;
            return(
              <SwipeableModal data={data[key]} />
          );})}
        <View style={styles.row}>
               <Text style={styles.header}>Minigames</Text>     
        </View>
          {Object.keys(other).map(function(key){
            return(
              <View style={styles.card}>
                <View style={styles.row}>
                  <Text style={styles.defaultText} key={key}>{key}: </Text>
                  <Text style={styles.defaultLevel}>{other[key].score}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.defaultTextSmall}>Rank: </Text>
                  <Text style={styles.defaultTextSmall}>{other[key].rank}</Text>
                </View>
              </View>
          );})}
      </ScrollView>
       
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e6ea',
    paddingLeft: 10,
    paddingRight: 10
  },
  row:{
    flex:1, 
    alignSelf: 'stretch', 
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'space-between'
  },
  card:{
    backgroundColor: 'white',
    borderRadius: 12,
    flex:1, 
    alignSelf: 'stretch', 
    flexDirection: 'column',
    margin: 4,
    padding: 8,
    fontFamily: 'Arial-BoldMT',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,
    elevation: 1,
    marginTop: 10
  },
  header:{
    fontSize: 40,  
    margin: 8,
    fontWeight: 'bold'
  },
  defaultText:{
    color: 'black',
    fontSize: 28,
    alignSelf: 'stretch',
    flex: 1,
    fontWeight: 'bold',
  },
  defaultLevel:{
    color: 'black',
    fontSize: 28,
    alignSelf: 'stretch',
    fontWeight: 'bold',
  },
  defaultTextSmall:{
    color: 'black',
    fontSize: 20,
    alignSelf: 'stretch',
    flex: 1,
    fontWeight: 'bold',
  },
});