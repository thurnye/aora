import React from 'react';
import {  Text, View } from 'react-native';
import { Link } from 'expo-router';

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl font-black'>Aora!</Text>
      <Link href='/home'>Go to Home</Link>
    </View>
  );
}



export default App;
