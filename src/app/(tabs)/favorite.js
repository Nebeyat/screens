import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import useTheme from '../../store/useTheme';
import Chips from "../../components/chips";
import ListView from "../../components/listView";
import useBookmarkStore from "../../store/useBookmarkStore";

const Favorite = () => {
  const { colors, fontSize, spacing } = useTheme();
  const styles = createStyles(colors, fontSize, spacing);
  const { bookmarks, loadBookmarks } = useBookmarkStore();

  useEffect(() => {
    loadBookmarks();
  }, []);

  return (
    <SafeAreaView style={[styles.container, { paddingHorizontal: spacing.l }]}>
      <Header header={'saved'} />
      <Text style={{ fontSize: fontSize.caption, color: colors.textSecondary, marginBottom: spacing.s }}>
        {bookmarks.length} articles ready to read
      </Text>
      
      <Chips />

      {bookmarks.length === 0 ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: colors.textSecondary, fontSize: fontSize.body }}>
            No bookmarks found
          </Text>
        </View>
      ) : (
        <FlatList
          data={bookmarks}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={{ paddingVertical: spacing.s }}>
              <ListView item={item} />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

const createStyles = (colors, fontSize, spacing) => StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  }
});

export default Favorite;