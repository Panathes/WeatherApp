import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Context } from '../App'

export const HomeScreen = (  ) => {
  const [favoriteCity] = useContext(Context);
    // console.log(favoriteCity);
    return (      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{favoriteCity.name}</Text>
        <Text>Date</Text>
        <Text>Temp</Text>
        <Text>Sun</Text>
      </View>
    );
  }