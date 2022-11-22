import {  Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation=useNavigation()//доступ к навигации
  
  useLayoutEffect(() => {
    navigation.setOptions({ //меняет варианты навигации
      headerShown:false,//не показывать заголовок
    })
    },[]
  )
  
  return (
    <View>
      <Text className="text-red-500">HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

