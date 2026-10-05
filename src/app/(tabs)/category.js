import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import useTheme from "../../store/useTheme";

const CategoryScreen = () => {
  const { colors, fontSize, spacing } = useTheme();
  const router = useRouter();
  const categories = useQuery(api.categories.getAllCategories);

  if (!categories) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.accentPrimary} />
        </View>
      </SafeAreaView>
    );
  }

  // Filter out 'All' or empty category if present
  const categoryData = categories.filter((cat) => cat.categoryName !== "All");

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.textPrimary, fontSize: fontSize.title }]}>
          Categories
        </Text>
      </View>

      <FlatList
        data={categoryData}
        keyExtractor={(item) => item._id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ paddingHorizontal: spacing.m, paddingBottom: spacing.l }}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.card,
              {
                backgroundColor: colors.cardBackground || colors.surfaceSecondary || "#F3F4F6",
                opacity: pressed ? 0.8 : 1,
              },
            ]}
            onPress={() => router.push(`/categories/${item.categoryName}`)}
          >
            <Text style={[styles.cardText, { color: colors.textPrimary, fontSize: fontSize.body }]}>
              {item.categoryName}
            </Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontWeight: "700",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 12,
    gap: 12,
  },
  card: {
    flex: 1,
    height: 100,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    // Elevation/Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: {
    fontWeight: "600",
    textAlign: "center",
  },
});

export default CategoryScreen;