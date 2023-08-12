import { useState } from 'react';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({
  container: {
    paddingTop: 20,
  },

  text: {
    fontSize: 18,
    color: '#f54',
    fontWeight: 'bold'
  }
})



export default function App() {
  const[contador,setContador] = useState(0)
  return (
    
    <SafeAreaView style={style.container}>
      <Text style={style.text}>{contador}</Text>
    </SafeAreaView>
  );
}


