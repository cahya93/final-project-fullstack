import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {Card} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Entypo';
import ApiBackend from '../../../component/service/api';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  convertRp = e => {
    const format = e.toString().split('').reverse().join(''); //diformat ke dalam string
    const convert = format.match(/\d{1,3}/g); //ambil 3 angka
    const rupiah =
      'Rp ' + convert.join('.').split('').reverse().join('') + ',00'; //join hasil format dan ambil 3 angka
    return rupiah;
  };
  getItem = () => {
    ApiBackend.getAllData().then(data => {
      console.log(`data`, data);
      this.setState({
        items: data,
      });
    });
  };
  componentDidMount() {
    this.getItem();
  }
  renderItems = (item, idx) => {
    console.log(`item`, item);
    return (
      <Card keyExtractor={idx}>
        <Card.Image
          source={{uri: item.item.image}}
          PlaceholderContent={
            <ActivityIndicator animating={true} color="#ffffff" size="large" />
          }></Card.Image>
        <Card.Title style={{fontSize: 25, marginTop: 10}}>
          {item.item.menu}
        </Card.Title>
        <Card.Title>{this.convertRp(item.item.price)}</Card.Title>
      </Card>
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
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
        <View>
          <Text
            style={{
              fontSize: 20,
              justifyContent: 'center',
              alignContent: 'center',
              textAlign: 'center',
            }}>
            Today's discount
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            sliderWidth={300}
            itemWidth={300}
            data={this.state.items}
            renderItem={this.renderItems}
          />
        </View>
      </SafeAreaView>
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
  contentStyle: {
    paddingHorizontal: 16,
  },
});
export default home;
