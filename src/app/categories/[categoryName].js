import React from 'react';
import {View, StyleSheet,Text,FlatList} from 'react-native';
import {useLocalSearchParams} from "expo-router";
import useTheme from '../../store/useTheme';
import {SafeAreaView}from "react-native-safe-area-context";
import Header from "../../components/header";
import ListView from'../../components/listView';
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { getAllArticles } from '../../../convex/articles';
import HeroTitle from '../../components/heroTitle';

const categoryName = () => {
    const {categoryName} = useLocalSearchParams();
    const {colors,fontSize,spacing}=useTheme();
    return (
        <SafeAreaView style={{flex:1,justifyContent:"center",paddingHorizontal:spacing.x,backgroundColor:colors.background}}>
           <Header header ={categoryName}/>
           <FlatList 
           data={getAllArticles}
           keyExtractor={(item)=>item._id}
           renderItem={({item})=>(
               <ListView item ={item}/>
           )}
           ListEmptyComponent={()=>(
               <View>
                   <HeroTitle Title={"no article found"} noItemFound={true}/>
               </View>
           )}
           />

    
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})
    

export default categoryName;
