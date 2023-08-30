// File: App.js (or any other relevant component)
import React from "react";
import { View, Text, Button } from "react-native";
import { connect, Provider } from "react-redux";
import counterReducer from "./redux/reducers";
import { increaseCounter, decreaseCounter } from "./redux/action";
import { store } from "./redux/store";

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increaseCounter,
  decreaseCounter,
};

const MyComponent = ({ count, increaseCounter, decreaseCounter }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Counter: {count}</Text>
      <Button title="Increase Counter" onPress={increaseCounter} />
      <Button title="Decrease Counter" onPress={decreaseCounter} />
    </View>
  );
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);

const App = () => (
  <Provider store={store}>
    <ConnectedComponent />
  </Provider>
);

export default App;
