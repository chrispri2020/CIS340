//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

export default function MyApp() {
  
  function getFullName(fName, mName, lName){
    return fName + " " + mName + " " + lName;
  }
  
  const pet = "Dog";
  return (
      <Text>
      {"\n\n\n\n\n\n"}
      Hello, I am a student in CIS340! {"\n"}
      My full name is {getFullName("Christian", "N\A", "Prieto")} {"\n"}
      I have a {pet}!
      </Text>
  
  );
}

