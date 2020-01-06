//Por si se me llega a borrar algo de app.js, aqui esta la aplicacion funcional
//Es necesario revisar sms_rc si se quiere enviar mensaje...


import React, { Component } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { StyleProvider, Container, Content, Header, Left, Right, Icon, Body, Button, Title, Text, Footer } from 'native-base';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import theme from './theme/index';

export default class ButtonExample extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  async componentDidMount() {
    StatusBar.setHidden(true);
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false })
  }
  render() {
    if (this.state.loading) {
      return <AppLoading />;;
    }
    return (
      <StyleProvider style={theme()}>
        <Container>
          <Header style={header_style}>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Alarmas thunder</Title>
            </Body>
            <Right />
          </Header>
          <Content contentContainerStyle={styles.center_content}>
            <Text>
              Testingas
            </Text>
            <Button primary><Text>This is just a test </Text></Button>
            <Button info ><Text>info</Text></Button>

          </Content>

          {/* <Content padder> */}

          {/* </Content>  */}
          <Footer />
        </Container>
      </StyleProvider>
    );
  }
}
const styles = StyleSheet.create({
  center_content: {
    flex: 1,
    backgroundColor: '#2974FF',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
const header_style = {
  backgroundColor: '#2974FF',
  height: 90,
  borderBottomColor: '#2974FF'
}