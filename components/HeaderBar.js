import React from "react";
import { StyleSheet, View } from "react-native";
import { IonIcons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Icon,
  Button,
  Text,
  Thumbnail
} from "native-base";

import {connect} from 'react-redux'
import FAIcon from "react-native-vector-icons/FontAwesome";


class MenuButton extends React.Component {
  render() {
    let navigation = this.props.navigation;
    const user = this.props.user
    return (
      <Header style={styles.header}>
        <Left style={{ flexDirection: "row" }}>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="md-menu" style={{ color: "white", left: 10 }} />
          </Button>
        </Left>
        <Body>
          <Thumbnail
            square
            source={require("../resources/thunder.png")}
            style={{ width: 150 }}
          />
        </Body>
        <Right>
          <FAIcon
            name="car"
            style={{ color: "#A88B48", fontSize: 25, right: 20 }}
            onPress={()=> console.log(user)}
          />
          {/* <Text>
            {user.tel}
          </Text> */}
        </Right>
      </Header>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
})
export default connect(mapStateToProps,null)(MenuButton)
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3a455c",
    borderBottomColor: "#757575",
    height: 80
  },
  text: {
    color: "white",
    fontSize: 20
  }
});
