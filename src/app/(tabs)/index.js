import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, FlatList, Text, Pressable, ActivityIndicator } from "react-native";
import DateComponent from "../../components/date";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheme";
import Header from "../../components/header";
import Icon from "../../components/icon";
import SearchInput from "../../components/searchInput";
import Chips from "../../components/chips";
import Card from "../../components/card";
import ListView from "../../components/listView";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const AllCategories = {
  _id: "all",
  categoryName: "All",
};

const Index = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newCat, setNewCat] = useState([]);

  const { colors, fontSize, spacing, toggleTheme, themeMode } = useTheme();
  const styles = createStyles(colors, fontSize, spacing);
  const name = themeMode === 'light' ? 'moon-outline' : 'sunny-outline';

  const categories = useQuery(api.categories.getAllCategories);
  const articles = useQuery(api.articles.getAllArticles);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setNewCat([AllCategories, ...categories]);
    }
  }, [categories]);

  const notification = () => {
    Alert.alert("Notifications", "You have no new notifications");
  };

  const ListHeader = () => (
    <View style={styles.headerText}>
      <Text style={styles.titleText}>Header</Text>
      <Pressable onPress={() => Alert.alert("see all", "you pressed")}>
        <Text style={{ color: colors.accentPrimary }}>See all</Text>
      </Pressable>
    </View>
  );

 
  if (!articles || !categories) {
    return (
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color={colors.accentPrimary} />
          <Text style={{ color: colors.textSecondary, marginTop: 8 }}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const heroNews = filteredArticles?.[0];

 
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" || article.categoryName === selectedCategory;
    const matchesSearch =
      article.title?.toLowerCase().includes(searchText.toLowerCase()) ||
      article.author?.toLowerCase().includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: spacing.m,
        }}
      >
        <View>
          <DateComponent />
          <Header header={"fafiNews"} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Icon name={name} action={toggleTheme} />
          <Icon name="notifications-outline" action={notification} />
        </View>
      </View>

      <FlatList
        data={filteredArticles}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={() => (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 40 }}>
            <Text style={{ color: colors.textSecondary, fontSize: fontSize.body }}>
              No articles found for the selected criteria.
            </Text>
          </View>
        )}
        ListHeaderComponent={
          <>
            <SearchInput
              value={searchText}
              onChangeText={setSearchText}
              placeholder={'search news, topics, author...'}
            />
            <Chips
              categories={newCat}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            
           <Card item={heroNews}/>
            <ListHeader />
          </>
        }
        renderItem={({ item }) => <ListView item={item} />}
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
    headerText: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    titleText: {
      fontSize: fontSize.newsListTitle,
      fontFamily: "syne_600SemiBold",
      color: colors.textPrimary,
      marginTop: spacing.xx,
    },
  });

export default Index;