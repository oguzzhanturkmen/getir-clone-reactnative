import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './styles'
import {Entypo} from "@expo/vector-icons"
import HeaderMain from '../../components/HeaderMain'
import BannerCarousel from '../../components/BannerCarousel'
import MainCategories from '../../components/MainCategories'
export default function index() {
  return (
    <ScrollView stickyHeaderIndices={[0]} style = {{backgroundColor : '#f5f5f5'}}>
        <HeaderMain />
        <BannerCarousel />
        <MainCategories />

    </ScrollView>
  )
}
