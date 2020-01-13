import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Button,
  Container,
  Text,
  Content,
  StyleProvider,
  Card,
  CardItem,
  Body,
  Item,
  Input,
  Form,
  Toast,
  Left,
  Right
} from "native-base";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { FontAwesome, IonIcons, Foundation } from "@expo/vector-icons";

import HeaderBar from "../components/HeaderBar";
import theme from "../theme/index";

import { add, reset } from "../redux/actions/index";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", number: "" };
  }
  getData = () => {
    this.props.add({
      name: this.state.name,
      number: this.state.number
    });
    Toast.show({
      text: "Se ha agregado el GPS  con exito.",
      type: "success",
      buttonText: "OK"
    });
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={styles.content}>
          <Card bordered>
            <Form>
              <CardItem hedaer bordered>
                <Text>Registro de gps</Text>
              </CardItem>
              <CardItem>
                <CardItem>
                  <Body>
                    <Item inlineLabel>
                      <FontAwesome name="keyboard-o" size={20} />
                      <Input
                        placeholder="Nombre del GPS"
                        ref={e => (this._textInput = e)}
                        onChangeText={e => this.setState({ name: e })}
                        value={this.state.name}
                        // onChangeText={e => console.log(e)}
                      />
                    </Item>
                    <Item inlineLabel>
                      <Foundation name="target" size={20} />
                      <Input
                        placeholder="Numero de GPS"
                        ref={e => (this._textInput = e)}
                        onChangeText={e => this.setState({ number: e })}
                        // onChangeText={e => console.log(e)}
                        value={this.state.number}
                      />
                    </Item>
                  </Body>
                </CardItem>
              </CardItem>
              <CardItem footer>
                <Left>
                  <Button
                    warning
                    block
                    // style={styles.button}
                    onPress={() => {
                      // this.props.reset();
                      this.props.navigation.navigate("Home");
                    }}
                  >
                    <Text>Retroceder</Text>
                  </Button>
                </Left>
                <Right>
                  <Button
                    block
                    // style={styles.button}
                    onPress={this.getData}
                  >
                    <Text>Continuar</Text>
                  </Button>
                </Right>
              </CardItem>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // alignItems: "center",
    justifyContent: "center"
  },
  textCentered: {
    textAlign: "center",
    width: "100%",
    color: "#2974FF"
  },
  button: {
    marginLeft: "60%"
  }
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ add: add, reset: reset }, dispatch);
};
export default connect(null, mapDispatchToProps)(Register);
