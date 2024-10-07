import { View, Text, Image, ImageSourcePropType, TouchableNativeFeedback } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Linking } from 'react-native';
import React from 'react';

interface SliderCategory {
  id: string;
  name: string;
  icon: ImageSourcePropType; 
  url: string;
}

interface CategoryItemProps {
  category: SliderCategory;
}

export default function CategoryItem({ category }: CategoryItemProps) {
  return (
    <TouchableNativeFeedback>
    <View>
      <View style={{padding:15, backgroundColor:Colors.dark.iconBg , borderRadius:99, marginRight:15}}>
        <Image 
          source={category.icon} 
          style={{ width: 40, height: 40, alignSelf:'center' }} 
        />
      </View>
        <Text style={{fontSize:12, fontFamily: 'outfit-medium', textAlign:'center', marginTop:5}}
          onPress={() => Linking.openURL(category.url)}>
            {category.name}
        </Text>
    </View>
    </TouchableNativeFeedback>
  );
}
