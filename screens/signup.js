import {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView,} from 'react-native';

export default function Signup({ route, navigation }) {
  const [myName, setName] = useState('... ');
  const [emailTxt, setemailTxt] = useState('');
  const [passTxt, setpassTxt] = useState('');

  return (
    <ScrollView>
      <View style={stylesheet.viewStyle}>
        <Text
          style={{
            margin: 10,
            fontSize: 35,
            marginBottom: 30,
            color: '#5e3205',
            paddingTop: 40,
            paddingBottom: 30,
          }}>
          Rregjistrohu këtu!
        </Text>
        <View style={{ paddingTop: 30, paddingBottom: 70 }}>
          <TextInput
            style={stylesheet.textInput}
            onChangeText={(text) => setemailTxt(text)}
            placeholder="Emri"
          />
          <TextInput
            style={stylesheet.textInput}
            onChangeText={(text) => setName(text)}
            placeholder="Email"
          />
          <TextInput
            style={stylesheet.textInput}
            onChangeText={(text) => setpassTxt(text)}
            placeholder="Kodi"
            secureTextEntry={true}
          />
        </View>

        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            color: '#8c4c0a',
            paddingTop: 10,
          }}>
          {' '}
          - - - - - - - - - - - - - - - - - - - - - - - - - - - -{' '}
        </Text>

        <TouchableOpacity
          style={stylesheet.button}
          onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: '#5e3205',
              alignContent: 'center',
              fontWeight: 'bold',
              fontSize: 19,
            }}>
            Krijo Llogari
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            color: '#8c4c0a',
            paddingBottom: 32,
          }}>
          {' '}
          - - - - - - - - - - - - - - - - - - - - - - - - - - - -{' '}
        </Text>
      </View>
    </ScrollView>
  );
}

const stylesheet = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9b48d',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#cc9f70',
    padding: 10,
    width: 200,
    height: 50,
    margin: 10,
    borderColor: '#5e3205',
    borderWidth: 1,
  },
  textInput: {
    backgroundColor: '#f7dabc',
    margin: 10,
    borderRadius: 10,
    width: 170,
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    height: 55,
    alignSelf: 'center',
    padding: 15,
    borderWidth: 2,
    borderColor: 'black',
  },
});
