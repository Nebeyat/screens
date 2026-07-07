import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../store/useTheme';

const Caption = ({ author, readTime }) => {
    const { colors, spacing, fontSize } = useTheme();
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.m }}>
            <Text style={{ color: colors.overlayLight, fontSize: fontSize.caption }}>{author}</Text>
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: colors.overlayLight }} />
            <Ionicons name="time-outline" size={fontSize.caption} color={colors.overlayLight} />
            <Text style={{ color: colors.overlayLight, fontSize: fontSize.caption }}>{readTime}</Text>
        </View>
    );
}

export default Caption;