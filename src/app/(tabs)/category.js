import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import useTheme from '../../store/useTheme';

<<<<<<< HEAD

const category = () => {
    const { colors, fontSize, spacing } = useTheme();
    const styles=createStyles(colors, fontSize, spacing);
    return (
       
        <SafeAreaView style={styles.container}>
            <Header header={'category'}/>
=======
const Category = () => {
    const { colors, fontSize, spacing } = useTheme();
    const styles = createStyles(colors, fontSize, spacing);
    return (
        <SafeAreaView style={styles.container}>
            <Header header={'category'} />
>>>>>>> searchInput
        </SafeAreaView>
    );
}

<<<<<<< HEAD
const createStyles = (colors,fontSize,spacing) => StyleSheet.create({
    container:{
=======
const createStyles = (colors, fontSize, spacing) => StyleSheet.create({
    container: {
>>>>>>> searchInput
        backgroundColor: colors.background,
        flex: 1,
    }
})

export default category;


