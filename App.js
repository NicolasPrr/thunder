import React from "react";
import { ActivityIndicator, View } from "react-native";
import { StyleProvider } from "native-base";
import { Root } from "native-base";
import DrawerNavigator from "./components/DrawerNav";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./redux/reducers/index";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import { AppLoading } from "expo";
import theme from "./theme/index";

// const store = createStore(allReducers);

console.ignoredYellowBox = ["Warning: each"];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  renderLoading = () => {
    <View>
      <ActivityIndicator size="large" />
    </View>;
  };

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <Root>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={this.renderLoading()}>
            <StyleProvider style={theme()}>
              <DrawerNavigator />
            </StyleProvider>
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
