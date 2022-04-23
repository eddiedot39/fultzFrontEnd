import React from 'react'
import {View, Text, StyleSheet, Pressable, Image} from 'react-native'
import { useSelector } from 'react-redux'

const Popup = ({setPopup}) => {
  const post = useSelector(state => state.PostReducer.post)
  return (
    <View>
      <Image style={styles.image} source={{uri: post.user.profilePhoto}}/>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{post.body}</Text>
          <Pressable style={[styles.button, styles.buttonClose]}
          onPress={() => setPopup(prev => !prev)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    opacity: 0.5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  image: {
    width: 100,
    height: 100,
    paddingLeft: 35,
    position: "absolute",
    left: 100,
    top: 170
  }
});

export default Popup