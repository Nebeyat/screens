import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Text } from "react-native";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Article() {
  const { id } = useLocalSearchParams();

  
  const article = useQuery(api.articles.getArticleById, id ? { id } : "skip");

  console.log("Article data:", JSON.stringify(article));

  if (!article) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Article detail</Text>
        
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});