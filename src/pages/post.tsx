import React from 'react';
import { Button, View } from 'react-native';

function PostScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Go to Home" onPress={() => { navigation.navigate('Home'); }} />
    </View>
    );
}

export default PostScreen;
