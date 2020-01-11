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

import HeaderBar from "../components/HeaderBar";
import theme from "../theme/index";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const RowButton = ({ icon_l, icon_r, name_l, name_r }) => {
  return (
    <View style={style.content}>
      <Button primary block style={style.button}>
        <Icon name={icon_l} />
        <Text>{name_l}</Text>
      </Button>
      <Button primary block style={style.button}>
        <Icon name={icon_r} />
        <Text>{name_r}</Text>
      </Button>
    </View>
  );
};
const OneButton = ({ icon_l, name_l }) => {
  return (
    <View style={style.content}>
      <Button primary block style={style.button}>
        <Icon name={icon_l} />
        <Text>{name_l}</Text>
      </Button>
    </View>
  );
};

export default class HomeScreen extends React.Component {
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
    return (
      <StyleProvider style={theme()}>
        <Container style={{ backgroundColor: "#f5f5f5" }}>
          <HeaderBar navigation={this.props.navigation} />
          <Content>
            <RowButton icon_l="lock" icon_r="unlock" name_l="Activar" name_r="Desactivar" />
            <RowButton icon_l="md-flashlight" icon_r="ios-flashlight" name_l="Encender" name_r="Apagar" />
            <RowButton icon_l="eye" icon_r="ios-map" name_l="Estado" name_r="Ubicación" />
            <RowButton icon_l="ios-alarm" icon_r="ios-mic" name_l="Alerta de velocidad" name_r="Escuchar" />
            <OneButton icon_l="ios-key" name_l="Cambiar  contraseña" />
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
const style = StyleSheet.create({
  button: {
    width: WIDTH*0.36,
    height: HEIGHT*0.19,
    flexDirection: "column"
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
