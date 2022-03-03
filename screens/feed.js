import * as React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ToggleSwitch,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
  Script,
  FlatList,
  TextInput,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import * as ImagePicker from 'expo-image-picker';

export default function MainPage() {
  return <MyDrawer />;
}

function Feed({ navigation }) {
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

function Personal({ route, navigation }) {
  var image_str;
  if (route.params?.image) {
    image_str = route.params?.image;
  } else {
    image_str =
      'https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg';
  }
  var bio_str;
  if (route.params?.bio) {
    bio_str = route.params?.bio;
  } else {
    bio_str = 'Numer kontakti';
  }
  var posti_str;
  if (route.params?.posti) {
    posti_str = route.params?.posti;
  } else {
    posti_str = 'Posti';
  }

  var name_str;
  if (route.params?.name) {
    name_str = route.params?.name;
  } else {
    name_str = 'Emri';
  }

  const [inputText, setInputText] = React.useState('');
  const [comment, setcomment] = React.useState('');

  const addComment = () => {
    setcomment(inputText);
  };

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
          fontSize: 25,
          fontWeight: 'bold',
          color: '#8c5923',
          position: 'absolute',
          left: 70,
          top: 90,
        }}>
        {' '}
        Llogaria ime{' '}
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
          position: 'absolute',
          left: 100,
          top: 170,
        }}
        source={{ uri: image_str }}
      />

      <Text
        style={{
          fontSize: 25,
          color: 'black',
          position: 'absolute',
          left: 20,
          top: 290,
        }}>
        {name_str}
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontWeight: 'italic',
          color: 'black',
          borderRadius: 10,
          position: 'absolute',
          left: 20,
          top: 330,
        }}>
        {posti_str}
      </Text>

      <Text
        style={{
          fontSize: 15,
          fontWeight: 'italic',
          color: 'black',
          borderRadius: 10,
          position: 'absolute',
          left: 20,
          top: 370,
        }}>
        {bio_str}
      </Text>
      <Text
        style={{
          fontSize: 24,
          alignContent: 'right',
          position: 'absolute',
          left: 20,
          top: 450,
        }}>
        Njoftimet e mia:{' '}
      </Text>
    </View>
  );
}




function Settings({ navigation }) {
  const [defaultImageUri, newDefaultImageUri] = React.useState(defaultImageUri);
  const [newBio, setNewBio] = React.useState('');
  const [newName, setNewName] = React.useState('');
  const [newPosti, setNewPosti] = React.useState('');
  const [image, setImage] = React.useState(
    'https://az-pe.com/wp-content/uploads/2018/05/kemptons-blank-profile-picture.jpg'
  );

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted == false) {
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

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Mbyll"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent
          style={{ backgroundColor: '#e3bc98' }}
          {...props}
        />
      )}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Llogaria ime" component={Personal} />
      <Drawer.Screen name="Ndrysho" component={Settings} />
    </Drawer.Navigator>
  );
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
