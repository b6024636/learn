// SearchComponent.js

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import { getUserInfo } from '../services/FetchUser';

import DashboardComponent from './DashboardComponent';


export default class SearchComponent extends Component {
  constructor(props) {
    const getUserId = async () => {
      let userId = '';
      try {
        userId = await AsyncStorage.getItem('user') || 'Grazima';
        console.log(userId);
      } catch (error) {
        // Error retrieving data
        console.log(error.message);
      }
      return userId;
    }
      super(props);
      this.state = {
        username: getUserId,
        error: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
      this.setState({
        username: e.nativeEvent.text
      });
    }
    handleSubmit() {
      getUserInfo(this.state.username)
          .then((res) => {
            if(res){
              let storeData = async () => {
                try {
                  await AsyncStorage.clear('user');
                  await AsyncStorage.setItem('user', this.state.username);
                } catch (error) {
                  alert(error.message);
                }
              }
              this.props.navigator.push({
                title: this.state.username || 'No Title',
                passProps: {userInfo: res},
                component: DashboardComponent
              });
            }
              
        });
    }
  render() {
    
    return (
      <View style={styles.main}>
      {
        this.state.error &&
          <Text>{this.state.error}</Text>
      }<View>
        <TextInput
              style={styles.searchInput}
              onChange={this.handleChange}
              placeholder='Enter Username...'
              value={this.state.username}
            />
        <View style={styles.buttonContainer}>
          <TouchableHighlight
                  style = {styles.button}
                  underlayColor= "white"
                >
                <Text
                    style={styles.buttonText}>
                    Clear
                </Text>
          </TouchableHighlight>
          <TouchableHighlight
                  style = {styles.button}
                  underlayColor= "white"
                  onPress = {this.handleSubmit}
                >
                <Text
                    style={styles.buttonText}>
                    SEARCH
                </Text>
          </TouchableHighlight>
        </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#e5e6ea'
  },
  searchInput: {
    height: 40,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderBottomWidth: 1,
    borderRadius: 8,
    borderBottomColor: '#63B0CD',
    color: '#39393A',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#39393A',
    alignSelf: 'left'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    borderColor: '#e5e6ea',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'stretch'
  }
});