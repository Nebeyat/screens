import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../store/useTheme';

const Caption = ({ author, readTime ,postedTime}) => {
    const { colors, spacing, fontSize } = useTheme();
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.m }}>
            {!postedTime &&  <Text style={{ color: colors.textSecondary, fontSize: fontSize.caption }}>{author}</Text>}
            {postedTime &&  <Text style={{ color: colors.textSecondary, fontSize: fontSize.caption }}>{author}</Text>}
            <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: colors.overlayLight }} />
            {! postedTime && <Ionicons name="time-outline" size={fontSize.caption} color={colors.overlayLight} />}
            <Text style={{ color: colors.overlayLight, fontSize: fontSize.caption }}>{readTime}</Text>
        </View>
    );
}

export default Caption;