import React, { Component } from "react";
import { FlatList, View } from "react-native";
import {
  Container,
  Header,
  Content,
  ListItem,
  Left,
  Text,
  Right,
  Body,
  Button,
  Icon,
  Separator,
  List,
  ActionSheet
} from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { remove, setIndex } from "../redux/actions/index";
import { sendSMS } from "./sms_rc";

const buttons = [
  { text: "Borrar", icon: "trash", iconColor: "#d9534f" },
  { text: "Cancelar", icon: "close", iconColor: "#5cb85c" }
];
const CustomDrawerContentComponent = props => {
  let user = props.user;
  let gps = props.gps.gps;
  let index = props.index;
  const body = index !== null ? `111111*10${user.tel}*20${user.emer}*` : "";

  return (
    <Container>
      <Header style={{ backgroundColor: "#6A7EA8", height: 100 }}>
        <Left style={{ flex: 1 }}>
          <Text style={{ color: "white", fontStyle: "italic" }}>
            Cliente: {user.tel}
          </Text>
          <Text note style={{ color: "white", fontStyle: "italic" }}>
            Emergencia: {user.emer}
          </Text>
        </Left>
        <Right>
          <Button
            small
            rounded
            iconLeft
            onPress={() => props.navigation.navigate("Register")}
          >
            <Icon name="create" />
            <Text>Editar</Text>
          </Button>
        </Right>
      </Header>
      <Content>
        <Separator bordered>
          <Text>GPS list</Text>
        </Separator>
        <List>
          {Object.keys(gps).map(key => (
            <ListItem
              selected={key === props.index.index}
              onPress={() => props.setIndex(key)}
              style={
                key === props.index.index
                  ? { backgroundColor: "#f5f5f5" }
                  : null
              }
            >
              <View>
                <Text numberOfLines={1}>{gps[key].name}</Text>
                <Text note numberOfLines={1} style={{ fontSize: 10 }}>
                  {gps[key].number}
                </Text>
              </View>
              <Body />
              <Button
                block
                bordered
                small
                info
                onPress={() => sendSMS(gps[key].number,body)}
                style={{ flexDirection: "column" }}
              >
                <Icon name="md-send" />
                <Text style={{ fontSize: 5 }}>Programar</Text>
              </Button>
              <Button
                block
                bordered
                small
                danger
                onPress={() => {
                  ActionSheet.show(
                    {
                      options: buttons,
                      title: `Desea borrar  ${gps[key].number}?`,
                      cancelButtonIndex: 1,
                      destructiveButtonIndex: 0
                    },
                    buttonIndex => {
                      if (buttonIndex === 0) {
                        props.remove(key);
                        props.setIndex(null);
                      } else {
                        ActionSheet.hide();
                      }
                    }
                  );
                }}
                style={{ flexDirection: "column" }}
              >
                <Icon name="trash" />
                <Text style={{ fontSize: 5 }}>Borrar</Text>
              </Button>
            </ListItem>
          ))}
        </List>
        <Button
          dark
          IconLeft
          style={{ marginTop: 45 }}
          onPress={() => props.navigation.navigate("AddGPS")}
        >
          <Icon name="add" />
          <Text>Agregar GPS</Text>
        </Button>
      </Content>
    </Container>
  );
};
const mapStateToProps = state => ({
  user: state.user,
  gps: state.gps,
  index: state.index
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ remove: remove, setIndex: setIndex }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomDrawerContentComponent);
