import React, { useEffect } from 'react';
import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/auth/login';
import Signup from './screens/auth/signup';
import Feed from './screens/feed/index'
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setAuthToken from './helper/setAuthToken';
import rootReducer from './redux/rootReducer';
import Spinner from 'react-native-loading-spinner-overlay'
import { ActivityIndicator } from 'react-native-paper';
import { loadUserRequest } from './redux/auth/AuthAction';

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
  const loading = useSelector(state => state.LoaderReducer)
  const isAuthenticated = useSelector(state => state.AuthReducer.isAuthenticated)
  const dispatch = useDispatch()
  useEffect(() => dispatch(loadUserRequest()), [isAuthenticated])
  return (
    <NavigationContainer>
        <Spinner visible={loading} customIndicator={<ActivityIndicator size='large' color='white'/>}
          textContent='Loading...' textStyle={styles.loaderText}/>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name='Feed' component={Feed}/>
          <Tab.Screen name="Login" component={Login}/>
          <Tab.Screen name="Signup" component={Signup} />
        </Tab.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  loaderText: {
    color: 'white'
  },
})
