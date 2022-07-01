import React from 'react';
import {View} from 'react-native';
import {VStack, Text, Input} from 'native-base';

function HomeScreen() {
    return (
        <View>
            <VStack alignItems="center" space={4} p={4}>
                <Input
                    w="75%"
                    placeholder="Search"
                />
                <Text>Home</Text>
            </VStack>
        </View>
    );
}

export default HomeScreen;
