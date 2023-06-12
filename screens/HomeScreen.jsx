import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TextBase,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { themeColor } from '../theme';
import Categories from '../components/Categories';
import { featured } from '../constants';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'white'}></StatusBar>
      {/* serach bar here */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingBottom: 2,
          height : 46,
          marginTop: 8,
        }}>
        <View
          style={{
            borderColor: 'rgb(107 114 128)',
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            borderWidth: 1,
            // padding: 2,
            borderRadius: 50,
            marginHorizontal: 10,
            paddingHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center',
        
            // height : 40
          }}>
          <Icon name="search" color="gray" size={25}></Icon>
          <TextInput
            placeholder="Restaurants"
            placeholderTextColor={'gray'}
            color= 'black'
            style={{
              marginLeft: 2,
              flex: 1,
            }}></TextInput>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderLeftWidth: 2,
              borderLeftColor: 'gray',
              paddingLeft: 10,
              gap : 5
            }}>
            <Icon name="map-marker" color="gray" size={20}></Icon>
            <Text
              style={{
                color: 'gray',
               
              }}>
              Delhi
            </Text>
          </View>


        </View>


        <View style ={{
          padding : 3,
          backgroundColor : themeColor.bgcolor(1),
          borderRadius : 100,
          justifyContent : 'center',
          alignItems : 'center',
          height : 40,
          width : 40
        }}>

          <Icon name = 'sliders' color ='white' size ={25}></Icon>
        </View>


      </View>


      {/* now the main content area */}
      <ScrollView showsVerticalScrollIndicator = {false}
      contentContainerStyle = {{
        paddingBottom : 60,
      }}>
        <Categories></Categories>

        {/* featured row */}
        <View style ={{
          marginTop : 15
        }}>

          {
            [featured , featured , featured].map((item , index)=>{

              return (
                <FeaturedRow key={index}
                title = {item.title}
                restaurants ={item.restaurants}
                description = {item.description}/>
              )
            })
          }

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
