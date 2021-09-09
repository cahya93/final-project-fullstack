import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
class header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Icon
            style={{marginTop: 0}}
            size={25}
            color={'green'}
            name="location"
          />
        </View>
        <View style={styles.headerLocation}>
          <Text>Your Location</Text>
        </View>
        <View style={styles.headerSetting}>
          <Icon
            style={{marginTop: 0}}
            size={25}
            color={'green'}
            name="shopping-cart"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 5,
  },
  headerIcon: {
    paddingLeft: 5,
    flex: 0.1,
  },
  headerLocation: {
    flex: 0.8,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'baseline',
  },
  headerSetting: {
    flex: 0.1,
    justifyContent: 'flex-end',
  },
});
export default header;
