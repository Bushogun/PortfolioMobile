import Category from '@/components/Home/Category';
import Header from '@/components/Home/Header';
import Slider from '@/components/Home/Slider';
import { Image, StyleSheet, Platform, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      {/* Header */}
      <Header />
      {/* Slider */}
      <Slider />
      {/* Category */}
      <Category />
      {/* Popular Business List */}
    </View>
  );
}

// const styles = StyleSheet.create({

// });
