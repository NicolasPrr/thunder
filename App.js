import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Root } from "native-base";
import DrawerNavigator from "./components/DrawerNav";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./redux/reducers/index";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
// const store = createStore(allReducers);

console.ignoredYellowBox = ["Warning: each"];
export default class App extends React.Component {
  renderLoading = () => {
    <View>
      <ActivityIndicator size="large" />
    </View>;
  };
  render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={this.renderLoading()}>
            <DrawerNavigator />
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
