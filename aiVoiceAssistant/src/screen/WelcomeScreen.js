import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import tw from 'twrnc';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={tw`flex justify-around flex-1 bg-white`}>
      <Text>WelcomeScreen</Text>
    </SafeAreaView>
  );
}
