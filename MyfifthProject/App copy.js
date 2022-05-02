import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(){
 return (
   <View style={styles.container}>
	  <Text style={styles.yellow}> Just Yellow text </Text>
	  <Text style={styles.largGreen}> This is big green </Text>
	  <Text style={[styles.yellow, styles.largGreen]}> Yellow text, the big green text </Text>
	  <Text style={[styles.largGreen, styles.yellow]}> Big green text, the yellow text </Text>
  </View>
  );
}

const styles = StyleSheet.create({

container: {
  marginTop: 60
},

largGreen: {
  color: 'green',
  fontWeight: 'bold',
  fontSize: 20,
},

yellow: {
  color: 'yellow',
  fontSize: 10,
},

});