import React from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../store/useTheme';
import Caption from './caption';
import useBookmarkStore from "../store/useBookmarkStore";
import Tag from './tag';

const ListView = ({ item }) => {
  const { colors, fontSize, spacing } = useTheme();
  const { bookmarks, addBookmark, removeBookmark } = useBookmarkStore();

  // Guard clause: return null if item is undefined or null
  if (!item) {
    return null;
  }

  const isBookmarked = bookmarks.some((b) => b?._id === item._id);

  const handleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(item);
    } else {
      addBookmark(item);
    }
  };

  return (
    <View style={[
      styles.container,
      { paddingVertical: spacing.m, borderBottomColor: colors.border || "#E5E5E5" }
    ]}>
      <Pressable onPress={() => console.log(`pressed on article: ${item.title}`)}>
        <Image
          source={{ uri: item.imageUrl }}
          style={[styles.imageCard, { borderRadius: spacing.m }]}
        />
      </Pressable>

      <View style={styles.content}>
        {item.tagLabel && <Tag tagLabel={item.tagLabel} />}
        <Text
          numberOfLines={2}
          style={[styles.titleText, { color: colors.textPrimary, fontSize: fontSize.body }]}
        >
          {item.title}
        </Text>
      </View>

      <View style={styles.footer}>
        <Caption ago={item.ago} color={colors.textSecondary} readTime={item.readTime} />
        <Ionicons
          name={isBookmarked ? "bookmark" : "bookmark-outline"}
          size={20}
          color={isBookmarked ? (colors.accentPrimary || "#0B7AFF") : colors.textSecondary}
          onPress={handleBookmark}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageCard: {
    width: 100,
    height: 100,
  },
  titleText: {
    marginTop: 6,
    fontFamily: 'syne_500Medium',
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  footer: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

export default ListView;