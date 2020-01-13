import * as SMS from "expo-sms";

export  const sendSMS = async (number, body) => {
  const isAvailable = await SMS.isAvailableAsync();
  if (isAvailable) {
    console.log("Hey");
  } else {
    console.log("Ahora no es posible enviar el mensaje");
  }
  const result = await SMS.sendSMSAsync(number, body);

  console.log(result);
};
