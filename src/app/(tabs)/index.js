import React from "react";
import { useState } from "react";
import { StyleSheet, View, Alert,FlatList ,Text,Pressable} from "react-native";
import Date from "../../components/date";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheme";
import Header from "../../components/header";
import Icon from "../../components/icon";
import SearchInput from "../../components/searchInput";
import Chips from "../../components/chips";
import Card from "../../components/card"
import {DATA} from "../../data/data";
import ListView from "../../components/listView";   

const Index = () => {
  const [searchText, setSearchText] = useState("");
  const { colors, fontSize, spacing, toggleTheme,themeMode  } = useTheme();
  const styles = createStyles(colors, fontSize, spacing);
  const name = themeMode === 'light' ? 'moon-outline' : 'sunny-outline';
  const notification = () => {
    Alert.alert("Notifications", "You have no new notifications");
  };
  
  const ListHeader = () => {
    return(
      <View style={styles.headerText}>
        <Text style={styles.titleText}>Header</Text>
        <Pressable onPress={() => 
          
          Alert.alert ("see all","you pressed")} >
          <Text style={{color:colors.accentPrimary}}>See all</Text>
        </Pressable>
      </View>
    )

  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: spacing.m,
        }}
      >
        <View>
          <Date />
          <Header header={"fafiNews"} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name={name} action={toggleTheme} />
          <Icon name="notifications-outline" action={notification} />
        </View>
      </View>

      <FlatList
      data={DATA}
      keyExtractor={(item)=> item.id}
     
      ListHeaderComponent={
        <>
        <SearchInput value={searchText} onChangeText={setSearchText} />
         <Chips />
         <Card title={"Top Stories"}/>
         <ListHeader/>
        </>
      }
       renderItem={({item}) => <ListView title= {item.title} postedTime={item.postedTime} readTime={item.readTime} tagLable={item.tagLable} imageUrl={item.imageUrl}/>}
       showsVerticalScrollIndicator={false}
      />

      

      
      
    </SafeAreaView>
  );
};

const createStyles = (colors, fontSize, spacing) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: spacing.l,
    },
    headerText:{
       flex:1,
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
    },
    titleText:{
  fontSize:fontSize.newsListTitle,
  fontFamily:"syle_600SemiBold",
  color:colors.textPrimary,
  marginTop:spacing.xx
    },
  });

export default Index;
