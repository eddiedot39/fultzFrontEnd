import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/auth/login';
import Signup from './screens/auth/signup';
import Feed from './screens/feed/index'
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setAuthToken from './helper/setAuthToken';
import rootReducer from './redux/rootReducer';

const Tab = createStackNavigator();

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))
AsyncStorage.getItem('token').then(token => token && setAuthToken(token))


export default () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
} 

const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name='Feed' component={Feed}/>
          <Tab.Screen name="Login" component={Login}/>
          <Tab.Screen name="Signup" component={Signup} />
        </Tab.Navigator>
      </NavigationContainer>
  )
}
