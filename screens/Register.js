import React, { Component } from "react";
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
  Form
} from "native-base";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { FontAwesome, IonIcons, Foundation } from "@expo/vector-icons";

import HeaderBar from "../components/HeaderBar";
import theme from "../theme/index";
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, tel: "", emergency: "" };
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  setNativeProps = nativeProps => {
    this._root.setNativeProps(nativeProps);
  };
  changeName(e, f) {
    const input = e;
    // console.log(input);
    console.log(e);
    console.log(e);
    // this.setState({ name: input });
  }
  getData = () => {
    console.log(this.state.emergency);
    console.log(this.state.tel);
  };
  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <StyleProvider style={theme()}>
        <Container>
          <Content padder contentContainerStyle={styles.content}>
            <Card bordered>
              <Form>
                <CardItem hedaer bordered>
                  <Text>Registro de numero</Text>
                </CardItem>
                <CardItem>
                  <CardItem>
                    <Body>

                    <Item inlineLabel>
                      <Foundation name="telephone" size={20} />
                      <Input
                        placeholder="Numero de telefono"
                        ref={e => (this._textInput = e)}
                        onChangeText={e => this.setState({ tel: e })}
                        // onChangeText={e => console.log(e)}
                      />
                    </Item>
                    <Item inlineLabel>
                      <FontAwesome name="warning" size={20} />
                      <Input
                        placeholder="Numero de emergencia"
                        ref={e => (this._textInput = e)}
                        onChangeText={e => this.setState({ emergency: e })}
                        // onChangeText={e => console.log(e)}
                      />
                    </Item>
                    </Body>
                  </CardItem>
                </CardItem>
                <CardItem footer>
                  <Button
                    primary
                    block
                    style={styles.button}
                    onPress={this.getData}
                  >
                    <Text>Continuar</Text>
                  </Button>
                </CardItem>
              </Form>
            </Card>
          </Content>
        </Container>
      </StyleProvider>
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
