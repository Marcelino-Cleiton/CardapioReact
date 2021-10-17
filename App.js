import React from 'react';
import {StatusBar,SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Lista from './src/telas/Lista';
import { useFonts,Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/lista'
import AppLoading from 'expo-app-loading';

export default function App() {
  const[fonteCarregada] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold,
  });
  if (!fonteCarregada) {
    return <AppLoading/>
  }
  return (
    <SafeAreaView sylte = {{flex:1}}>
      <StatusBar/>
      <Lista {...mock}/>
    </SafeAreaView>
  );
}