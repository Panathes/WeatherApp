import React from 'react';
import { Text, View } from 'react-native';

export const HomeScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ville</Text>
        <Text>Date</Text>
        <Text>Temp</Text>
        <Text>Sun</Text>
      </View>
    );
  }