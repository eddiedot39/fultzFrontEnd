import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
export default ({ navigation }) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#f2d2b1',
        }}>
        <Text
          style={{
            paddingTop: 100,
            paddingBottom: 10,
            fontSize: 25,
            fontWeight: 'bold',
            color: '#8c5923',
          }}>
          {' '}
          Feed{' '}
        </Text>
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.toggleDrawer()}>
          <Text style={styles.navText}> Menu </Text>
        </TouchableOpacity>
      </View>
    );
  }
  const styles = StyleSheet.create({
    nav: {
      backgroundColor: '#945616',
      borderColor: '#d18d47',
      borderWidth: 2,
      width: 80,
      height: 45,
      position: 'absolute',
      left: 25,
      top: 35,
      textAlign: 'center',
    },
    navText: {
      color: 'white',
      fontSize: 22,
      position: 'absolute',
      left: 3,
      top: 6.5,
    },
  });