import { View, Text, ImageSourcePropType } from 'react-native'
import { Colors } from '@/constants/Colors'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import CategoryItem from './CategoryItem';

interface SliderCategory {
  id: string;
  name: string;
  icon: ImageSourcePropType;  
  url: string;
}

export default function Category() {

    const GetSliderCategoryList = (): SliderCategory[] => {
        return [
          { id: '2', name: "Github", icon: require('../../assets/images/github.png') , url:"https://github.com/Bushogun"},
          { id: '3', name: "Facebook", icon: require('../../assets/images/facebook.png') , url:"https://www.facebook.com/MegaaShine/"},
          { id: '1', name: "LinkedIn", icon: require('../../assets/images/linkedin.png') , url:"https://www.linkedin.com/in/bushogun/" },
          { id: '4', name: "Instagram", icon: require('../../assets/images/instagram.png') , url:"https://www.instagram.com/whoissoto/"},
          { id: '5', name: "Whatsapp", icon: require('../../assets/images/whatsapp.png') , url:"https://api.whatsapp.com/send?phone=573206925727&text=Hola%20Jonathan!"},
          { id: '6', name: "Behance", icon: require('../../assets/images/behance.png') , url:"https://www.behance.net/Bushogun"},
          { id: '7', name: "Twitter", icon: require('../../assets/images/twitter.png') , url:"https://x.com/Puchujenso"},
        ];
      };
    
      const CategoryList = GetSliderCategoryList();

  return (
    <View>
      <View style={{
        padding:20,
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:10, 
      }}>
        <Text 
          style={{
          fontSize:20,
          fontFamily: 'outfit-bold' }}>
          Category
        </Text>
        <Text style={{color:Colors.dark.primary, marginTop:5}}>View all</Text>
      </View>

      <FlatList
        data={CategoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginLeft:20}}
        renderItem={({item, index}) => (
          <CategoryItem category={item} key={index} />
        )}
        />
    </View>
  )
}