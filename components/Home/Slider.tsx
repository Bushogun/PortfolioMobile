import { View, Text,  Image, ImageSourcePropType} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

interface SliderItem {
    id: string;
    image: ImageSourcePropType;  
  }

export default function Slider() {

    const GetSliderList = (): SliderItem[] => {
        return [
            { id: '6', image: require('../../assets/images/6.png') },
            { id: '2', image: require('../../assets/images/2.png') },
            { id: '7', image: require('../../assets/images/7.png') },
            { id: '1', image: require('../../assets/images/1.jpg') },
          { id: '3', image: require('../../assets/images/4.jpg') },
          { id: '4', image: require('../../assets/images/5.jpg') },
          { id: '8', image: require('../../assets/images/8.png') },
        ];
      };
    
      const sliderList = GetSliderList();

  return (
    <View>
      <Text style={{
        fontFamily: 'outfit-bold', 
        fontSize:20, 
        paddingLeft:20,
        paddingTop:20,
        marginBottom:5
        }}>Art</Text>
    <FlatList
      data={sliderList}
      horizontal={true}
      style={{paddingLeft:20}}
      keyExtractor={item => item.id} 
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
          <Image 
          source={item.image}
          style={{ 
              width:300,
              height:300,
              borderRadius:15,
              marginRight:20
          }}
        />
      )}
    />
    </View>
  )
}