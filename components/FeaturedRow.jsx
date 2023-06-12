import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {themeColor} from '../theme';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({title, description, restaurants}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <View>
          <Text
            style={{
              fontWeight: '700',
              color: 'black',
            }}>
            {title}
          </Text>

          <Text
            style={{
              color: 'rgb(107 114 128)',
              fontWeight: '500',
              lineHeight: 25,
            }}>
            {description}
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={{color: themeColor.text, fontWeight: '800'}}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          gap : 10
        }}
        style={{paddingVertical: 15 , }}>
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard
          item = {restaurant} key={index}></RestaurantCard>;
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});
