import React, { Component } from "react";
import { Platform, Dimensions, FlatList } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Container, Header, Content, ListItem, Left, Text} from "native-base";
import HomeScreen from "../screens/HomeScreen";
import Register from "../screens/Register";
import NavigationScreen from "../screens/NavigationButtons";


const CustomDrawerContentComponent = props => {
  return (
    <Container>
      <Header style={{ backgroundColor: "#6A7EA8", height: 90 }}>
        <Left style = {{flex: 1, alignItems: 'center'}}>
          <Text style = {{color:'white', fontStyle: 'italic'}}>
            This is a testss
          </Text>
          <Text style = {{color:  'white', fontStyle: 'italic'}}>
            This is a testss
          </Text>
        </Left>

      </Header>
      <Content>
        <FlatList data={["Home", "Register","NavigationScreen"]} 
        style = {{}}
        renderItem = {
          ({item}) => (
              <ListItem  onPress={()=> props.navigation.navigate(item)} >
                <Text> {item}</Text>
              </ListItem>
          )
        }
        />
      </Content>
    </Container>
  );
};

const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Register: { screen: Register },
    NavigationScreen: { screen: NavigationScreen }
  },
  {
    drawerPosition: "left",
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

export default createAppContainer(DrawerNavigator);
