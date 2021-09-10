import React, {Component} from 'react';
import {Alert} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
class header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Input
        placeholder="input your location"
        leftIcon={<Icon size={25} color={'green'} name="location" />}
        rightIcon={
          <Icon
            size={25}
            color={'green'}
            name="shopping-cart"
            onPress={() => Alert.alert('keranjang')}
          />
        }
      />
    );
  }
}

export default header;
