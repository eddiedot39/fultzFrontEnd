import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { editUserRequest } from '../../redux/auth/AuthAction';
import {Button } from 'react-native-paper'

export default ({ navigation }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.AuthReducer.user)
  const {name, email, status, profilePhoto} = user
  const [formData, setFormData] = useState({name, email, status, profilePhoto, password: ''})
  const [password2, setPassword2] = useState('')
   
  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }

    if (status === 'granted') {
      const res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      setFormData({...formData, profilePhoto: res.uri})
    }
  };

  const uploadImage = async() => {
    const form = new FormData();
      form.append('profile', {
        name: new Date() + '_profile',
        uri: formData.profilePhoto,
        type: 'image/jpg',
      });
    //api call
  }
  
  const handleSubmit = () => {
    if(password2 && password2 === formData.password)
      dispatch(editUserRequest(navigation, formData))
    else
      alert('Kodet nuk perputhen')
  }
  
    return (
      <View style={{
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
          Ndrysho{' '}
        </Text>
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.toggleDrawer()}>
          <Text style={styles.navText}> Menu </Text>
        </TouchableOpacity>
        <Text style={{ size: 35, color: '#8c5923' }}>
          {' '}
          |----------------------------------------------|{' '}
        </Text>
        <Text style={{ fontSize: 17 }}> Foto profili </Text>
        <TouchableOpacity style={styles.button} onPress={openImageLibrary}>
          <Text>Zgjidh foton</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={{ uri: formData.profilePhoto }} />
        {profilePhoto !== formData.profilePhoto ? <Button>Ndrysho</Button> : null}
        <Text style={{ fontSize: 17, marginTop: 30 }}>
          Ndrysho emrin
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Emri"
          onChangeText={(name) => setFormData({...formData, name})}
          value={formData.name}
        />

        <Text style={{ fontSize: 17, marginTop: 30 }}>
          Ndrysho emailin
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(email) => setFormData({...formData, email})}
          value={formData.email}
        />

        <Text style={{ fontSize: 17, marginTop: 30 }}>
          Ndrysho postin
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Posti"
          onChangeText={(status) => setFormData({...formData, status})}
          value={formData.status}
        />
        <Text style={{ fontSize: 17, marginTop: 30 }}>
          Ndrysho Kodin
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Kodi"
          onChangeText={(password) => setFormData({...formData, password})}
          value={formData.password}
          secureTextEntry={true}
        />
        <Text style={{ fontSize: 17, marginTop: 30 }}>
          Verifiko Kodin
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Verifiko kodin"
          onChangeText={(password) => setPassword2(password)}
          value={password2}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}>
          <Text
            style={{ fontSize: 20,  marginTop: 6 }}>
            {' '}
            Perditeso llogarine
          </Text>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 12,
    width: 250,
    alignSelf: 'center',
    margin: 10,
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
  }, image: {
    width: 100,
    height: 100,
    paddingLeft: 35,
    position: "absolute",
    left: 100,
    top: 170
  }
});
