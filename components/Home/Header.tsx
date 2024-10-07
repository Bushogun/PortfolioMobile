import { View, Text, Image } from 'react-native'
import { useUser } from '@clerk/clerk-expo';
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react'

export default function Header() {

    const {user} = useUser();

  return (
    <View style={{padding:20, paddingTop:40, backgroundColor: Colors.dark.primary, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
        <View style={{ display:'flex', flexDirection:'row', alignItems:'center', gap:10}}>
            <Image 
            source={require('@/assets/images/jsImg.png')}
            // source={{uri:user?.imageUrl}}
                style={{
                    width:45,
                    height:45,
                    borderRadius:99, 
                    backgroundColor: Colors.dark.greenBg
                }}
            />
            <View>
                <Text style={{color: Colors.dark.whiteColor}}>Welcome</Text>
                <Text style={{fontSize:19, fontFamily: 'outfit-medium', color: Colors.dark.whiteColor}}>
                    {/* {user?.fullName} */}
                    Jonathan Soto
                    </Text>
            </View>
        </View>
        {/* Search Bar */}
        <View style={{ 
                display:'flex',
                flexDirection:'row',
                gap:10,
                alignItems:'center',
                backgroundColor:'#fff',
                padding:10,
                marginVertical:10,
                marginTop:15,
                borderRadius:8
            }}>
            <Ionicons name="search" size={24} color={Colors.dark.primary} />
            <TextInput placeholder='Search...' 
                style={{
                    fontFamily:'outfit',
                    fontSize:16
                }}
            />
        </View>
    </View>
  )
}