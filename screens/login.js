import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, ImageBackground,} from 'react-native';

export default function Login({ route, navigation }) {
  const [inputText, setInputText] = React.useState('');
  const [inputTxt, setInputTxt] = React.useState('');

  return (
    <ScrollView>
      <View>
        <ImageBackground style={styles.viewStyle}>
          <View>
            <Text
              style={{
                margin: 20,
                marginBottom: 50,
                marginTop: 90,
                fontSize: 38,
                color: '#FFE2C1',
              }}>
              Mirë se vini!!
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 5,
                color: '#FFE2C1',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              {' '}
              Identifikohu{' '}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="email"
              onChangeText={(newText) => setInputText(newText)}
              value={inputText}
            />
            <TextInput
              style={styles.input}
              placeholder="kodi"
              onChangeText={(newTxt) => setInputTxt(newTxt)}
              value={inputTxt}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#FFE2C1',
              padding: 12,
              width: 120,
              alignSelf: 'center',
              margin: 10,
              borderColor: '#b8a691',
              borderWidth: 2,
            }}
            onPress={() => navigation.navigate('Feed')}>
            <Text
              style={{ color: '#85786a', fontWeight: 'bold', fontSize: 17 }}>
              Identifikohu
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 50,
              paddingBottom: 40,
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{ color: '#FFE2C1', fontSize: 18, textAlign: 'center' }}>
                {' '}
                Nuk ke një profil? Rregjistrohu tani!!{' '}
              </Text>
            </TouchableOpacity>
            ;
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
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
