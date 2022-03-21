import React, { useEffect } from 'react';
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
import API from './plugins/API';
import { Show_Loader, Hide_Loader } from './redux/constants';
import { loadUserRequest } from './redux/auth/AuthAction';
import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';



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
  const dispatch = useDispatch()
  const loading = useSelector(state => state.LoaderReducer)
  const isAuthenticated = useSelector(state => state.AuthReducer.isAuthenticated)

  API.interceptors.request.use(req => {
    dispatch({type: Show_Loader})
    return req
  })

  API.interceptors.response.use(res => {
    dispatch({type: Hide_Loader})
    return res;
  }, err => {
    dispatch({type: Hide_Loader})
    return Promise.reject(err)
  })

  useEffect(()=> {
    dispatch(loadUserRequest())
  }, [])

  return (
      <NavigationContainer>
        <Spinner textContent='Loading' visible={loading} />
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <Tab.Screen name='Feed' component={Feed}/>
          ) : (
            <>
              <Tab.Screen name="Login" component={Login}/>
              <Tab.Screen name="Signup" component={Signup} />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
  )
}