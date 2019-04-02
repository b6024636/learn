import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Linking  } from "react-native";

import * as Constants from '../lib/constants';

const Links = ({ stat }) => (
  <View style={[styles.row, styles.modalLinks]}>
    {checkLinkExists(stat)}
    <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://oldschoolrunescape.fandom.com/wiki/' + Constants.Skills.links.find(item => item.id == stat).p2pUrl)}}>
        <Text>View P2P Guide</Text>
    </TouchableOpacity>
  </View>
)

export default Links;

function checkLinkExists(stat)
{
  let link = Constants.Skills.links.find(item => item.id == stat).f2pUrl;
  if(link){
    return  <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://oldschoolrunescape.fandom.com/wiki/' + Constants.Skills.links.find(item => item.id == stat).f2pUrl)}}>
              <Text>View F2P Guide</Text>
            </TouchableOpacity>
  }else{
    return null;
  }
}

const styles = StyleSheet.create({
  modalLinks:{
    backgroundColor: '#EFF1F4',
    paddingTop: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  row:{
    flex:1, 
    alignSelf: 'stretch', 
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between'    
  }  
})
