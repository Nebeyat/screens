import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useTheme from '../store/useTheme';

const Tag = ({ tagLabel,color }) => {
    const { colors, spacing, fontSize } = useTheme();
    return (
        <View
            style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',
                alignItems: 'center',
                backgroundColor: color || colors.error,
                paddingHorizontal: spacing.m,
                paddingVertical: spacing.s,
                borderRadius: spacing.m,
            }}>
          {!color && (
              <View 
              style={[
                styles.dot,
                { backgroundColor: 'white', marginRight: spacing.s },
            ]} />)}
            <Text style={{ color: color ? colors.accentPrimary:"white", fontSize: fontSize.tag }}>{tagLabel}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: 'transparent',
    }
})

export default Tag;