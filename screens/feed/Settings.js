import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { editUserRequest } from '../../redux/auth/AuthAction';

export default ({ navigation }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.AuthReducer.user)
  const {name, email, status, profilePhoto} = user
  const [formData, setFormData] = useState({name, email, status, profilePhoto})
   
  
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Sorry, we need your permission in order to access the camera roll');
      return;
    }

    const mediaResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    !mediaResult.cancelled && setFormData({...formData, profilePhoto: mediaResult.uri})
        
  };
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
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text>Zgjidh foton</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={{ uri: formData.profilePhoto }} />

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
  
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(editUserRequest(navigation, formData))}>
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
  },
});
