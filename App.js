import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import  HomeScreeen  from './components/HomeScreen'
import  WeeklyScreeen  from './components/WeeklyScreen'
import  ProfileScreeen  from './components/ProfileScreen'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName =  'ios-home';
            } else if (route.name === 'Weekly') {
              iconName = 'ios-list';
            } else if (route.name === 'Profile') {
              iconName = 'ios-contact';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreeen} />
        <Tab.Screen name="Weekly" component={WeeklyScreeen} />
        <Tab.Screen name="Profile" component={ProfileScreeen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

