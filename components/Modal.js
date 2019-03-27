import React, { Fragment, Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Button from "./Button";

import Modal from "react-native-modal";

import cardStyles from '../assets/CardStyles';

class SwipeableModal extends Component {
  state = {
    visible: false
  };


  openModal = () => this.setState({ visible: true });
  closeModal = () => this.setState({ visible: false });

  render() {
  const data = this.props.data;
    return (
      <Fragment style={styles.mainContainer}>
        <Modal
          isVisible={this.state.visible}
          backdropOpacity={0.4}
          swipeDirection="left"
          onSwipeComplete={this.closeModal}
          onBackdropPress={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={[styles.modalHeader, cardStyles[data.name]]}>
              <View style={{alignItems: 'end', flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={this.closeModal}
                >
                  <Text style={styles.closeBtn}>X</Text>
                </TouchableOpacity>
              </View>
                <Text style={styles.header}>
                  {data.name.toUpperCase()}
                </Text>
              <Text style={styles.level}>
                {data.level}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.description}>
                Experience
              </Text>
              <Text style={styles.description}>
                {data.experience}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.description}>
                Rank: 
              </Text>
              <Text style={styles.description}>
                {data.rank}
              </Text>
            </View>
          </View>
        </Modal>

        <Button
          label={data.name}
          onPress={this.openModal}
          level={data.level}

        />
      </Fragment>
    );
  }
}

export default SwipeableModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginHorizontal: -10,
    marginVertical: 40,
    backgroundColor: 'white',
  },
  description: {
    padding: 20,
    fontSize: 18,
    color: 'black'
  },
  header:{
    color: 'white',
    fontSize: 32,
    alignSelf: 'stretch',
    flex: 1,
    fontWeight: 'bold',
  },
  closeBtn:{
    color: 'white',
    fontSize: 21,
    alignSelf: 'stretch',
    flex: 1,
    fontWeight: 'bold',    
  },
  row:{
    flex:1, 
    alignSelf: 'stretch', 
    flexDirection: 'row'
  },
  level:{
    width: 80,
    fontSize: 28,
    justifyContent: 'align-end',
    color: 'white',
    fontWeight: 'bold',
  },
  modalHeader:{
    width: '100%',
    height: 75,
    flex: 1,
    padding: 10
  }
});