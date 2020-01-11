import React, { Component } from "react";
import {  StatusBar } from "react-native";
import { Container, Text, Header,Button} from "native-base";
import HeaderBar from "../components/HeaderBar";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar hidden/>
        <HeaderBar navigation = {this.props.navigation}/>
        <Text>HomeScrsseen </Text>
      </Container>
    );
  }
}

