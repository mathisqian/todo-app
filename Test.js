import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, ToolbarAndroidBase, } from 'react-native';

export default function Test() {
    let todo=[
        {
            key:0,

            text:"abc"
        },
        {
            key:1,
            text:"pokemon"
        }
    ];
  return (
    <View style={appStyle.container}>

        <ScrollView>
     {todo.map((task) => (
       <Text style={appStyle.text}>yes 
       </Text>
      ))
      }
</ScrollView>
      </View>
  );
}

const appStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      color:'blue'
  }

});
