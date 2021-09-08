import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './src/nav';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    );
  }
}

export default App;
