import React from "react";
import { useState } from "react";
import { StyleSheet, View, Alert,FlatList } from "react-native";
import Date from "../../components/date";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheme";
import Header from "../../components/header";
import Icon from "../../components/icon";
import SearchInput from "../../components/searchInput";
import Chips from "../../components/chips";
import Card from "../../components/card"
const Index = () => {
  const [searchText, setSearchText] = useState("");
  const { colors, fontSize, spacing, toggleTheme,themeMode  } = useTheme();
  const styles = createStyles(colors, fontSize, spacing);
  const name = themeMode === 'light' ? 'moon-outline' : 'sunny-outline';
  const notification = () => {
    Alert.alert("Notifications", "You have no new notifications");
  };
  const DATA = [
   { id:"1",
    title:"First Item"
  },
  {
    id:"2",
    title:"Second Item"
  },
  {
    id:"3",
    title:"Third Item"
  }
  ]

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
          <Icon name={"name"} action={toggleTheme} />
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
        </>
      }
       renderItem={({item}) => <Card Title= {item.title}/>}
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
  });

export default Index;
