import React, { useEffect, useState } from "react"
import {ScrollView, Text, TouchableOpacity, Image, StyleSheet, TextInput } from "react-native"
import { Button } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"
import { logOutRequest } from "../../redux/auth/AuthAction"
import { createPostRequest, getUserPosts } from "../../redux/post/PostAction"

export default ({ navigation }) => {
  const {name, status, profilePhoto} = useSelector(state => state.AuthReducer.user)
  const dispatch = useDispatch()
  const posts = useSelector(state => state.PostReducer.userPosts)
  const [formData, setFormData] = useState('')
  
  const handleSubmit = () => {
    dispatch(createPostRequest(formData))
    setFormData('')
  }

  useEffect(() => {
    dispatch(getUserPosts())
  }, [])

  return (
    <ScrollView contentContainerStyle={{
      flex: 1,
      backgroundColor: "#f2d2b1",
      justifyContent: 'space-around',
      paddingLeft: 10
    }}>
      <TouchableOpacity
        style={styles.nav}
        onPress={() => navigation.toggleDrawer()}>
        <Text style={styles.navText}> Menu </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#8c5923",
        }}>
        {" "}
        Llogaria ime{" "}
      </Text>
      <Image
        style={{
          width: 100,
          height: 100,
          paddingLeft: 35,
        }}
        source={{ uri: profilePhoto }}
      />
      <Button onPress={() => dispatch(logOutRequest())}>Dil</Button>
      <Text
        style={{
          fontSize: 25,
          color: "black",
        }}>
        {name}
      </Text>

      <Text style={{
        fontSize: 18,
        fontStyle: "italic",
        color: "black",
      }}>
        {status}
      </Text>
      <Text
        style={{
          fontSize: 24,
        }}>Krijo nje njoftim</Text>
        {formData ? <Button onPress={handleSubmit}>Posto</Button> : null}
        <TextInput style={styles.input} value={formData} onChangeText={e => setFormData(e)}></TextInput>
      <Text
        style={{
          fontSize: 24,
          alignContent: "flex-start",
        }}>
        Njoftimet e mia:{" "}
        </Text>
        {posts.length ? posts.map((post, index) => (
          <Text key={index}>{post.body}</Text>
        )) : <Text>No Posts Found</Text>}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#945616',
    borderColor: '#d18d47',
    borderWidth: 2,
    width: 80,
    height: 33,
    textAlign: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 22,
  
  },
  input: {
    backgroundColor: '#FFEBCD',
    opacity: 0.8,
    margin: 10,
    borderRadius: 10,
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    width: 200,
    height: 50,
    alignSelf: 'center',
    padding: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
});