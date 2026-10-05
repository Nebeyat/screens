import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../store/useTheme';

const Caption = ({ author, readTime, postedTime, ago, color }) => {
    const { colors, spacing, fontSize } = useTheme();
    const timeDisplay = ago || postedTime;
    const textColor = color || colors.textSecondary;

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.m || 8 }}>
            {/* Display Author if passed */}
            {author && (
                <Text style={{ color: textColor, fontSize: fontSize.caption }}>{author}</Text>
            )}

            {/* Display "ago" or "postedTime" */}
            {timeDisplay && (
                <Text style={{ color: textColor, fontSize: fontSize.caption }}>{timeDisplay}</Text>
            )}

            {/* Dot separator */}
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: colors.overlayLight }} />

            {/* Clock icon */}
            <Ionicons name="time-outline" size={fontSize.caption} color={colors.overlayLight} />

            {/* Display Read Time */}
            <Text style={{ color: colors.overlayLight, fontSize: fontSize.caption }}>{readTime}</Text>
        </View>
    );
};

export default Caption;