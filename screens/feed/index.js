import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Personal from './Personal';
import Settings from './Settings';
import Feed from './Feed';


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

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => (
        <CustomDrawerContent style={{ backgroundColor: '#e3bc98' }} {...props}/>
      )}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Llogaria ime" component={Personal} />
      <Drawer.Screen name="Ndrysho" component={Settings} />
    </Drawer.Navigator>
  );
}
  export default function MainPage() {
    return <MyDrawer />;
  }
