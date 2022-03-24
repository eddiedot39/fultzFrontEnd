import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Profile from './Profile';
import Settings from './Settings';
import Feed from './Feed';
import Login from '../auth/login';
import { useSelector } from 'react-redux';

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

export default () => {
  const {isAuthenticated} = useSelector(state => state.AuthReducer)
  return (
    <Drawer.Navigator drawerContent={(props) => (
        <CustomDrawerContent style={{ backgroundColor: '#e3bc98' }} {...props}/>
      )}>
        {isAuthenticated ? (
          <>
            <Drawer.Screen name="Feed" component={Feed}/>
            <Drawer.Screen name="Llogaria ime" component={Profile} />
            <Drawer.Screen name="Ndrysho" component={Settings} />
          </>
        ) : (
          <Drawer.Screen name='Hyr' component={Login} />
        )}
    </Drawer.Navigator>
  );;
  }
