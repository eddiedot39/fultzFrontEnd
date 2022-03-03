import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {NavigationContainer,DarkTheme,} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { changeNavigationBarColor } from 'react-native-navigation-bar-color';


import Feed from './screens/feed';
import Login from './screens/login';
import Signup from './screens/signup';


const Tab = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Feed" component={Feed} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 
