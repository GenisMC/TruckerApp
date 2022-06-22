import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/home';
import ProfileScreen from './src/pages/profile';
import PostScreen from './src/pages/post';
import SearchScreen from './src/pages/search';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Drawer.Screen name="Post" component={PostScreen} options={{ title: 'Post Offers' }}/>
        <Drawer.Screen name="Search" component={SearchScreen} options={{ title: 'Search offers' }}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
