import {  SafeAreaView, Text, View, Image } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import {UserIcon, ChevronDownIcon, AdjustmentsIcon} from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation=useNavigation()//доступ к навигации
  
  useLayoutEffect(() => {
    navigation.setOptions({ //меняет варианты навигации
      headerShown:false,//не показывать заголовок
    })
    },[]
  )
  
  return (
    <SafeAreaView className="bg-white pt-5">{/*безопасная зона */}
      <Text className="text-red-500">
      {/*Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
      <Image source={{uri:'https://links.papareact.com/wru'}}
      className="h-7 w-7 bg-gray-300 p-4 rounded-full text-xs"
      />
      <View className="flex-1">{/*иконку юсер сдвинула в право и появилось пространство */}
      <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
      <Text className="font-bold text-xl">
      Current Location
      <ChevronDownIcon size={20} color="#00CCBB"/>
      </Text>
      </View>
      <UserIcon size={35} color="#00CCBB"/>
      </View>

      {/*Search-поиск */}
      <View>
      <View>
      
      </View>
      <AdjustmentsIcon/>{/*значок регулировки */}
      </View>
      </Text>
      </SafeAreaView>
  )
}

export default HomeScreen

