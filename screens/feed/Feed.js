import React, { useEffect, useState } from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Modal} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Popup from '../../components/Popup'
import { getAllPostsRequest, getPostById } from '../../redux/post/PostAction'
export default ({ navigation }) => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.PostReducer.posts)
  const [popUp, setPopup] = useState(false)

  useEffect(() => {
    dispatch(getAllPostsRequest())
  }, [])

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
        {posts.length ? posts.map((post, index) => (
          <TouchableOpacity key={index} onPress={() => dispatch(getPostById(post._id, setPopup))}>
            <Text>{post.body}</Text>
          </TouchableOpacity>
        )) :
          <Text>No Post found</Text>
        }
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.toggleDrawer()}>
          <Text style={styles.navText}> Menu </Text>
        </TouchableOpacity>
        <Modal animationType="fade" transparent={true} visible={popUp}
        onRequestClose={() => setPopup(!popUp)}>
          <Popup setPopup={setPopup}/>
        </Modal>
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