/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ViewLogWidget, EntryWidget} from './components';
import ActionButton from './components/ActionButton';
import Headache from './models/Headache';

interface Props {}
enum AppState {
  Entry,
  Log
};

interface State {
  state: AppState;
  realm: Realm;
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      state: AppState.Entry,
      realm: new Realm({schema: [Headache.schema]}),
    }
  }

  getViewForState(state: AppState) {
    switch(state) {
      case AppState.Entry:
        return (<EntryWidget 
          realm={this.state.realm}
          onCancel={() => this.setState({state: AppState.Log})}
          onSubmit={() => this.setState({state: AppState.Log})} />);
      case AppState.Log:
          return(<ViewLogWidget 
            realm={this.state.realm}
            onCancel={() => this.setState({state: AppState.Entry})} />);
    }
  }

  render() {
    return this.getViewForState(this.state.state);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});