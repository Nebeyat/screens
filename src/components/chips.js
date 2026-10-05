import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import useTheme from '../store/useTheme';

const Chips = ({ categories, selectedCategory, setSelectedCategory }) => {
    const { colors, spacing } = useTheme();

    return (
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: spacing.m, flexGrow: 0 }}
        >
            {categories?.map((cat) => (
                <Pressable 
                    key={cat._id}
                    onPress={() => setSelectedCategory(cat.categoryName)}
                    style={{
                        backgroundColor: selectedCategory === cat.categoryName ? colors.accentPrimary : colors.surfaceSecondary,
                        marginRight: spacing.m,
                        paddingVertical: spacing.s || spacing.sm,
                        paddingHorizontal: spacing.m,
                        borderRadius: spacing.s,
                    }}
                >
                    <Text style={{ color: selectedCategory === cat.categoryName ? colors.onAccentPrimary : colors.onSurfaceSecondary }}>
                        {cat.categoryName}
                    </Text>
                </Pressable>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({});

export default Chips;