import React from 'react';
import { Text, View } from 'react-native';

export default HomeScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ville</Text>
        <Text>Date</Text>
        <Text>Temperature</Text>
        <Text>Icon du temps</Text>
      </View>
    );
  }