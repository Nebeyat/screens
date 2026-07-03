import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import useTheme from '../../store/useTheme';

const Category = () => {
    const { colors, fontSize, spacing } = useTheme();
    const styles = createStyles(colors, fontSize, spacing);
    return (
        <SafeAreaView style={styles.container}>
            <Header header={'category'} />
        </SafeAreaView>
    );
}

const createStyles = (colors, fontSize, spacing) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
    }
})

export default Category;


