import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import useTheme from '../store/useTheme';
import HeroTitle from './heroTitle';

const Card = ({ item }) => {
  const { colors, spacing, fontSize } = useTheme();
  const router = useRouter();

  // Fallback view when no item or article data is available
  if (!item) {
    return (
      <View
        style={[
          styles.pressable,
          {
            borderRadius: spacing.m || 12,
            backgroundColor: colors.surfaceSecondary,
            justifyContent: 'center',
            alignItems: 'center',
            padding: spacing.m || 16,
          },
        ]}
      >
        <HeroTitle Title="No ARTICLES FOUND" noItemFound={true} />
      </View>
    );
  }

  return (
    <Pressable
      onPress={() => router.push(`/article/${item._id}`)}
      style={({ pressed }) => [
        styles.pressable,
        {
          backgroundColor: colors.cardBackground || colors.surfaceSecondary,
          borderRadius: spacing.m || 12,
          opacity: pressed ? 0.9 : 1,
        },
      ]}
    >
      {item.imageUrl && (
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      
      <View style={[styles.contentContainer, { padding: spacing.m || 16 }]}>
        {item.category && (
          <Text
            style={[
              styles.category,
              { color: colors.accentPrimary, fontSize: fontSize.caption || 12 },
            ]}
          >
            {item.category.toUpperCase()}
          </Text>
        )}

        <Text
          numberOfLines={2}
          style={[
            styles.title,
            { color: colors.textPrimary, fontSize: fontSize.title || 18 },
          ]}
        >
          {item.title}
        </Text>

        {item.description && (
          <Text
            numberOfLines={2}
            style={[
              styles.description,
              { color: colors.textSecondary, fontSize: fontSize.body || 14 },
            ]}
          >
            {item.description}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    marginVertical: 8,
    overflow: 'hidden',
    // Card Shadow / Elevation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  contentContainer: {
    gap: 6,
  },
  category: {
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  title: {
    fontWeight: '700',
    lineHeight: 24,
  },
  description: {
    lineHeight: 20,
  },
});

export default Card;