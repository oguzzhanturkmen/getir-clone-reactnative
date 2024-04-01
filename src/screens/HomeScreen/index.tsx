import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import {Entypo} from "@expo/vector-icons"
export default function index() {
  return (
    <View style={styles.headerMain}>
        <View style={styles.headerOne}>
            <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
            <View style={styles.headerOneView}>
                <Text style={{fontWeight : '600', fontSize : 16}}>Ev</Text>
                <Text style={{fontWeight : '500', fontSize : 11.5 , color : '#6e7480' , marginLeft : 6 , marginRight : 3}}>Dedepaşa Blv. Yenişehir Mahallesi...</Text>
                <Entypo name="chevron-right" size={22} color="#" />
                
            </View>
            
        </View>
        <View>

        </View>

    </View>
  )
}
