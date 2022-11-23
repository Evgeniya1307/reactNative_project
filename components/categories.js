import { ScrollView, Text, View } from "react-native";
import React from "react";

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{}}
    horizontal
    showsHorizontalScrollIndicator={false}//не хочу показывать горизноталь индикатор
    >
    {/*горизонтальная прокрутка */}
    {/*CategoryCard */}
    <Text>categories</Text>
    </ScrollView>//скрол прокрутки
   
     
    
  );
};

export default Categories;
