import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './styles'
import {Entypo} from "@expo/vector-icons"
import HeaderMain from '../../components/HeaderMain'
import BannerCarousel from '../../components/BannerCarousel'
export default function index() {
  return (
    <ScrollView>
        <HeaderMain />
        <BannerCarousel />

    </ScrollView>
  )
}
