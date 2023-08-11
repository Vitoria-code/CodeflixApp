import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View>
      <Text style={styles.titulo}>CodeFlix</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#116FEB',
    color: '#FFF',
    fontWeight: 'bold',
  },
});
