import React, { Component } from "react";
import { StyleSheet, StatusBar, View, Dimensions } from "react-native";
import {
  Container,
  Text,
  Button,
  StyleProvider,
  Icon,
  Content
} from "native-base";
import { AppLoading } from "expo";
import { connect } from "react-redux";

import HeaderBar from "../components/HeaderBar";
import theme from "../theme/index";
import {sendSMS} from '../components/sms_rc'

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const ones = "111111";
const bodies = [`${ones}ARM`, `${ones}DSM`, 
                `${ones}RES`, `${ones}STP`,
                `${ones}CHK`, `${ones}MAP`,
                `${ones}SPD:120`, `${ones}MON`,
                `${ones}PSW`,

];

const RowButton = ({ icon_l, icon_r, name_l, name_r,body_1,body_2, number, navigation }) => {
  return (
    <View style={style.content}>
      <Button primary block style={style.button}
        onPress={ () => name_l !== "Alerta de velocidad"? sendSMS(number,body_1) : navigation.navigate('Velocity')}
        >
        <Icon name={icon_l} 
        />
        <Text>{name_l}</Text>
      </Button>
      <Button primary block style={style.button}
        onPress={ () => sendSMS(number,body_2) }
        >
        <Icon name={icon_r} />
        <Text>{name_r}</Text>
      </Button>
    </View>
  );
};
const OneButton = ({ icon_l, name_l, number,body ,navigation }) => {
  return (
    <View style={style.content}>
      <Button primary block style={style.button} 
    // onPress={ () => sendSMS(number,body) }
    onPress={ () => navigation.navigate('ChangePassword')}
      >
        <Icon name={icon_l} />
        <Text>{name_l}</Text>
      </Button>
    </View>
  );
};

 class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentDidMount() {
    StatusBar.setHidden(true);
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    const index = this.props.index
    console.log(index)
    const numberGps = index.index !== null ? this.props.gps.gps[index.index].number : 'N.A'
    return (
      <StyleProvider style={theme()}>
        <Container style={{ backgroundColor: "#f5f5f5" }}>
          <HeaderBar navigation={this.props.navigation} />
          <Content>
            <RowButton
              icon_l="lock"
              icon_r="unlock"
              name_l="Activar"
              name_r="Desactivar"
              body_1={bodies[0]}
              body_2={bodies[1]}
              number ={numberGps}
              />
            <RowButton
              icon_l="md-flashlight"
              icon_r="ios-flashlight"
              name_l="Encender"
              name_r="Apagar"
              body_1={bodies[2]}
              body_2={bodies[3]}
              number ={numberGps}
              />
            <RowButton
              icon_l="eye"
              icon_r="ios-map"
              name_l="Estado"
              name_r="Ubicación"
              body_1={bodies[4]}
              body_2={bodies[5]}
              number ={numberGps}
              />
            <RowButton
              icon_l="ios-alarm"
              icon_r="ios-mic"
              name_l="Alerta de velocidad"
              name_r="Escuchar"
              body_1={bodies[6]}
              body_2={bodies[7]}
              number ={numberGps}
              navigation= {this.props.navigation}
              />
            <OneButton icon_l="ios-key" name_l="Cambiar  contraseña" body={bodies[8]} 
              number ={numberGps} navigation= {this.props.navigation}
            />
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
const style = StyleSheet.create({
  button: {
    width: WIDTH * 0.36,
    height: HEIGHT * 0.19,
    flexDirection: "column",
    justifyContent: 'center'
  },
  content: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    justifyContent: "space-around",
    alignItems: "center",
    top: 20,
    margin: 20
  }
});
const mapStateToProps = state => ({
  user: state.user,
  gps: state.gps,
  index: state.index
});
export default connect(mapStateToProps)(HomeScreen)