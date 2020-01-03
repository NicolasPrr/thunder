import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as SMS from 'expo-sms';
// import {SMS} from 'expo'
export default class App extends React.Component {
  onPress = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if(isAvailable){
      Alert.alert("Hey")
    }else{
      Alert.alert("Ahora no es posible enviar el mensaje")
    }
     const result = await SMS.sendSMSAsync(
       '3213326683', 
       'Hola a todos'
     );

    console.log(result);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button 
          onPress={this.onPress} 
          title="Touch mys ss" 
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
