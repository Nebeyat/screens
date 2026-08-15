import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../store/useTheme';

const CategoryCard = ({ iconName, iconColor, iconBackground, categoryName, articleCount }) => {
    const { colors, fontSize, spacing } = useTheme();

    return (
        <View style={{ backgroundColor: colors.surfaceBg, flex: 1 }}>
            <View style={{ 
                alignSelf: 'flex-start', 
                backgroundColor: iconBackground, 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: spacing.m, 
                borderRadius: spacing.l 
            }}>
                <Ionicons name={iconName} size={24} color={iconColor} />
            </View>
            <Text style={{ 
                fontSize: fontSize.body, 
                fontFamily: 'syne_700Bold', 
                color: colors.textPrimary, 
                marginTop: spacing.m 
            }}>
                {categoryName}
            </Text>
            <Text style={{ 
                fontSize: fontSize.caption, 
                color: colors.textSecondary, 
                marginTop: spacing.m 
            }}>
                {articleCount} articles
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});
export default CategoryCard;