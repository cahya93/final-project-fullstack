import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { FlatListSlider } from "react-native-flatlist-slider";
import Icon from "react-native-vector-icons/Entypo";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image: "http://kbu-cdn.com/dk/wp-content/uploads/ayam-panggang.jpg",
          desc: "Silent Waters in the mountains in midst of Himilayas",
        },
        {
          image:
            "https://cdn.yummy.co.id/content-images/images/20200508/b9v4nSJNmey5WB5UUrMzVmTr5Nejacq9-31353838393331353330d41d8cd98f00b204e9800998ecf8427e_800x800.jpg",
          desc: "Red fort in India New Delhi is a magnificient masterpeiece of humans",
        },
        {
          image:
            "https://selerasa.com/wp-content/uploads/2015/08/images_ikan_ikan-nila-bakar-kecap.jpg",
          desc: "Sample Description below the image for representation purpose only",
        },
        {
          image:
            "https://img.kurio.network/xMoEOm-5CDtJlep_sPcbeYoFZ70=/1200x900/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/16/46841aa9-8853-4e4b-a4ab-1a884c8afb2a.jpe",
          desc: "Sample Description below the image for representation purpose only",
        },
        {
          image:
            "https://asset.kompas.com/crops/gkIp6_DNkYJSg3tNfJHyo9xhv8g=/7x245:859x813/750x500/data/photo/2021/02/22/60337a258134d.jpg",
          desc: "Sample Description below the image for representation purpose only",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Icon
              style={{ marginTop: 0 }}
              size={25}
              color={"green"}
              name="location"
            />
          </View>
          <View style={styles.headerLocation}>
            <Text>Your Location</Text>
          </View>
          <View style={styles.headerSetting}>
            <Icon
              style={{ marginTop: 0 }}
              size={25}
              color={"green"}
              name="shopping-cart"
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            Today's discount
          </Text>
          <FlatListSlider
            data={this.state.data}
            width={275}
            timer={3000}
            // component={<Preview />}
            onPress={(item) => alert(JSON.stringify(item))}
            indicatorActiveWidth={40}
            contentContainerStyle={styles.contentStyle}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 5,
  },
  headerIcon: {
    paddingLeft: 5,
    flex: 0.1,
  },
  headerLocation: {
    flex: 0.8,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "baseline",
  },
  headerSetting: {
    flex: 0.1,
    justifyContent: "flex-end",
  },
  contentStyle: {
    paddingHorizontal: 16,
  },
});
export default home;
