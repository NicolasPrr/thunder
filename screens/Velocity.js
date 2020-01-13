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

import {sendSMS} from '../components/sms_rc'


class ChangePssword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  vel: "" };
  }
  getData = () => {
    const index = this.props.index
    const numberGps = index.index !== null ? this.props.gps.gps[index.index].number : 'N.A'
    sendSMS(numberGps, `111111SPD:${this.state.vel}`)
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={styles.content}>
          <Card bordered>
            <Form>
              <CardItem hedaer bordered>
                <Text>Limite de velocidad en Km/h</Text>
              </CardItem>
              <CardItem>
                <CardItem>
                  <Body>
                    <Item inlineLabel>
                      <FontAwesome name="tachometer" size={20} />
                      <Input
                        placeholder=""
                        ref={e => (this._textInput = e)}
                        onChangeText={e => this.setState({ vel: e })}
                        value={this.state.vel}
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
                    success
                    onPress={this.getData}
                  >
                    <Text>Establecer alarma</Text>
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

;
const mapStateToProps = state => ({
  user: state.user,
  gps: state.gps,
  index: state.index
});
export default connect(mapStateToProps)(ChangePssword);
