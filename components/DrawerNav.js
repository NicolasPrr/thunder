import React, { Component } from "react";
import { Platform, Dimensions, FlatList } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { connect } from "react-redux";

import { Container, Header, Content, ListItem, Left, Text } from "native-base";
import HomeScreen from "../screens/HomeScreen";
import Register from "../screens/Register";
import AddGPS from "../screens/AddGPS";
import NavigationScreen from "../screens/NavigationButtons";
import ChangePassword from "../screens/ChangePassword";
import CustomDrawerContentComponent from './customDrawer'

const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: NavigationScreen },
    Register: { screen: Register },
    AddGPS: { screen: AddGPS },
    ChangePassword: { screen: ChangePassword}
  },
  {
    drawerPosition: "left",
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

export default  (createAppContainer(DrawerNavigator));
