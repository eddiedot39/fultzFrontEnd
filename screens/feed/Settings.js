import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';

export default ({ navigation }) => {
    const [defaultImageUri, newDefaultImageUri] = useState('');
    const [newBio, setNewBio] = useState('');
    const [newName, setNewName] = useState('');
    const [newPosti, setNewPosti] = useState('');
    const [image, setImage] = useState(
      'https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg'
    );
  
    const pickImage = async () => {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (!permissionResult.granted) {
        alert(
          'Sorry, we need your permission in order to access the camera roll'
        );
        return;
      }
  
      const mediaResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
      });
  
      if (!mediaResult.cancelled) {
        setImage(mediaResult.uri);
        newDefaultImageUri(mediaResult.uri);
      }
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
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={{ fontSize: 17, marginTop: 30 }}>
          Vendos nje emer te ri
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Emri"
          onChangeText={(text) => setNewName(text)}
          value={newName}
        />
        <Text style={{ fontSize: 17, marginTop: 30 }}>
          Vendos postin
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Posti"
          onChangeText={(text) => setNewPosti(text)}
          value={newPosti}
        />
        <Text style={{ fontSize: 17 }}>Type in your contact info</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Numer kontakti"
          onChangeText={(text) => setNewBio(text)}
          value={newBio}
        />
  
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Llogaria ime', {
              bio: newBio,
              image: image,
              name: newName,
              posti: newPosti,
            })
          }>
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
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

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
