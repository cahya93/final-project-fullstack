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
import {Header, Title} from '../../../component/home';
import ApiBackend from '../../../service/api';

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
        <Card.Title style={{fontSize: 20, marginTop: 10}}>
          {item.item.menu}
        </Card.Title>
        <Card.Title>{this.convertRp(item.item.price)}</Card.Title>
      </Card>
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <Title>Today's Promo</Title>
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

export default home;
