import React, { Component } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  Content,
  ListItem,
  Left,
  Text,
  Right,
  Button
} from "native-base";
import { connect } from "react-redux";

const CustomDrawerContentComponent = props => {
  const user = props.user;
  return (
    <Container>
      <Header style={{ backgroundColor: "#6A7EA8", height: 90 }}>
        <Left style={{ flex: 1, alignItems: "flex-start" }}>
          <Text style={{ color: "white", fontStyle: "italic" }}>
            Cliente: {user.tel}
          </Text>
          <Text style={{ color: "white", fontStyle: "italic" }}>
            Emergencia: {user.emer}
          </Text>
        </Left>
        <Right>
          <Button small rounded  onPress={()=>props.navigation.navigate('Register')}>
            <Text>Editar</Text>
          </Button>
        </Right>
      </Header>
      <Content>
        <FlatList
          data={["Home", "Register", "NavigationScreen"]}
          style={{}}
          renderItem={({ item }) => (
            <ListItem selected onPress={() => props.navigation.navigate(item)}>
              <Text> {item}</Text>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
};
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(CustomDrawerContentComponent);
