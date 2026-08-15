import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import useTheme from '../store/useTheme';
import { categories } from '../data/categories'; // Fixed file name to match your explorer!

const Chips = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].categoryName);
    const { colors, spacing } = useTheme();

    return (
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ margin: spacing.l, flexGrow: 0 }}
        >
            {categories.map((cat) => (
                <Pressable 
                    key={cat.id}
                    onPress={() => setSelectedCategory(cat.categoryName)}
                    style={{
                        backgroundColor: selectedCategory === cat.categoryName ? colors.accentPrimary : colors.surfaceSecondary,
                        marginRight: spacing.m,
                        paddingVertical: spacing.sm,
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