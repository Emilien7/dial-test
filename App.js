import type {Node} from 'react';
import React, {useState} from 'react';
import RNUssdDial from 'react-native-ussd-dial';

import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App: () => Node = () => {
  const [deviceName, setDeviceName] = useState(null);
  const getDeviceName = async () => {
    const name = await RNUssdDial.getDeviceName();
    setDeviceName(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Девайс: {deviceName}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={getDeviceName}
        activeOpacity={0.5}>
        <Text style={[styles.text, styles.buttonText]}>Get device name</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#841584',
    borderRadius: 8,
    padding: 20,
    marginVertical: 20,
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default App;
