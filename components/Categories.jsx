import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {categories} from '../constants';
import {useState} from 'react';

const Categories = () => {
  const [activecategory, setactivecategory] = useState(null);
  return (
    <View
      style={{
        marginTop: 10,
      }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={
          {
            //   overflow: 'visible',
          }
        }
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}>
        {categories.map((category, index) => {
          let isActive = category.id == activecategory;

          return (
            <View
              key={index}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 20,
              }}>
              <TouchableOpacity
                onPress={() => setactivecategory(category.id)}
                style={{
                  padding: 5,
                  borderRadius: 50,
                  backgroundColor: isActive
                    ? 'rgb(75 85 99)'
                    : 'rgb(229 231 235)',
                  //   shadowColor : 'rgb(229 231 235)',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={category.image}
                  style={{width: 45, height: 45}}
                  resizeMode='cover'
                  ></Image>
              </TouchableOpacity>
              <Text
                style={{
                  color: isActive ? 'rgb(31 41 55)' : 'rgb(107 114 128)',
                  
                }}>
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
