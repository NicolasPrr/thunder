import * as SMS from 'expo-sms';

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
