import React from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"

export default ({ navigation }) => {
  var image_str = ''
  var bio_str = ''
  var posti_str = "Posti"
  var name_str = ''

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#f2d2b1"
      }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#8c5923",
          position: "absolute",
          left: 70,
          top: 90
        }}>
        {" "}
        Llogaria ime{" "}
      </Text>
      <TouchableOpacity
        style={styles.nav}
        onPress={() => navigation.toggleDrawer()}>
        <Text style={styles.navText}> Menu </Text>
      </TouchableOpacity>
      <Image
        style={{
          width: 100,
          height: 100,
          paddingLeft: 35,
          position: "absolute",
          left: 100,
          top: 170
        }}
        source={{ uri: image_str }}
      />

      <Text
        style={{
          fontSize: 25,
          color: "black",
          position: "absolute",
          left: 20,
          top: 290
        }}>
        {name_str}
      </Text>

      <Text style={{
        fontSize: 18,
        fontStyle: "italic",
        color: "black",
        borderRadius: 10,
        position: "absolute",
        left: 20,
        top: 330
      }}>
        {posti_str}
      </Text>

      <Text
        style={{
          fontSize: 15,
          fontWeight: "italic",
          color: "black",
          borderRadius: 10,
          position: "absolute",
          left: 20,
          top: 370
        }}>
        {bio_str}
      </Text>
      <Text
        style={{
          fontSize: 24,
          alignContent: "right",
          position: "absolute",
          left: 20,
          top: 450
        }}>
        Njoftimet e mia:{" "}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#945616',
    borderColor: '#d18d47',
    borderWidth: 2,
    width: 80,
    height: 33,
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