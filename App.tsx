import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/home'
import ProfileScreen from './src/pages/profile'
import SearchScreen from './src/pages/search'
import Signup from './src/signup'
import { NativeBaseProvider } from 'native-base'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
          <Drawer.Screen
            name="SignUp"
            component={Signup}
            options={{ title: 'Sign Up' }}
          />
          <Drawer.Screen
            name="Search"
            component={SearchScreen}
            options={{ title: 'Search offers' }}
          />
          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: 'Profile' }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
