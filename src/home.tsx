import React from 'react';
import { Button, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Go to profile screen"
      />
    </View>
  );
}

export default HomeScreen;
