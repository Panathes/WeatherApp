import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import  { HomeScreen }  from './components/HomeScreen'
import  { WeeklyScreen }  from './components/WeeklyScreen'
import  { ProfileScreen }  from './components/ProfileScreen'

const Tab = createBottomTabNavigator();

export default function App() {
  const [favoriteCity, setFavoriteCity] = useState({});

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=paris&appid={ADD YOUR KEY}`)
    .then(res => res.json())
    .then(res => {
      setFavoriteCity(res)
      console.log(favoriteCity)
      console.log(res)
    }) 
  });

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
          <Tab.Screen name="Home" component={HomeScreen}  />
          <Tab.Screen name="Weekly" component={WeeklyScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
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

