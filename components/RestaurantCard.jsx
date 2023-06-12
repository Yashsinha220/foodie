import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React from 'react';

const RestaurantCard = ({item}) => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          marginRight: 6,
          backgroundColor: 'white',
          //   borderRadius: 35,
          borderRadius: 20,
          elevation : 4.5
        }}>
        <Image
          style={{
            height: 144,
            width: 235,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            resizeMode: 'cover',
            overflow: 'hidden',
          }}
          source={item.image}></Image>
        <View
          style={{
            padding: 10,
          }}>
          <Text style={{color: 'black', fontWeight: '700'}}>{item.name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 1}}>
            <Image
              source={require('../assets/images/fullStar.png')}
              style={{height: 15, width: 15, marginTop: 3}}></Image>
            <Text></Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({});
