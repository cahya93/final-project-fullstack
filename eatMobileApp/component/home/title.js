import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
class title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {children} = this.props;
    return (
      <View>
        <Text style={styles.title}>{children}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
});
export default title;
