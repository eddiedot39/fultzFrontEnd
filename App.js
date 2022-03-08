import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/auth/login';
import Signup from './screens/auth/signup';
import Feed from './screens/feed/index'

const Tab = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name = 'Feed' component={Feed}/>
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="Signup" component={Signup} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 
