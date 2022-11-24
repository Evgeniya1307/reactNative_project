import { ScrollView, Text} from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
    }}>
    {/*CategoryCard */}
    <Text>
    <CategoryCard 
    imgUrl='https://links.papareact.com/wru'
     title="Testing 1"/> {/*передала пропсы */}
    <CategoryCard 
    imgUrl='https://links.papareact.com/wru' 
    title="Testing 2"/>
    <CategoryCard 
    imgUrl='https://links.papareact.com/wru' 
    title="Testing 3"
    />
    </Text>
    </ScrollView> 
  );
};

export default Categories;
