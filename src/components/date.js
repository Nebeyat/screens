import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { day, month, dateNo } from '../utils/today';
import useTheme from '../store/useTheme';

const Date = () => {
    const { colors, fontSize, spacing } = useTheme();
    const styles = createStyles(colors, fontSize, spacing);

    return (
        <Text style={styles.dateText}>
            {day} {month} {dateNo}
        </Text>
    );
}

const createStyles = (colors, fontSize, spacing) => StyleSheet.create({
    dateText: {
        fontSize: fontSize.tag,
        color: colors.textSecondary,
        marginLeft: spacing.l,
    }
});

export default Date;