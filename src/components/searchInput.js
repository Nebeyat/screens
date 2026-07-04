import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import useTheme from '../store/useTheme';
import Icon from './icon';

const SearchInput = ({ value, onChangeText }) => {
    const { colors, fontSize, spacing } = useTheme();
    const styles = createStyles(colors, fontSize, spacing);

    const searchTopic = (value) => {
        Alert.alert("search", `You searched for:${value}`);
    }

    return (
        <View style={styles.container}>
            <Icon name="search-outline" action={() => searchTopic(value)} />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                placeholder='search news,topics,author...'
                placeholderTextColor={colors.textSecondary}
            />
        </View>
    );
}

const createStyles = (colors, fontSize, spacing) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.surfaceSecondary,
        borderRadius: spacing.m,
        padding: spacing.s,
        marginTop: spacing.x,
    },
    input: {
        flex: 1,
        color: colors.textPrimary,
        fontSize: fontSize.body,
    }
});

export default SearchInput;