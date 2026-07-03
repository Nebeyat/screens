import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import useTheme from '../../store/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';

const Profile = () => {
    const { toggleTheme, spacing, fontSize, colors } = useTheme();
    const styles = createStyles(colors, fontSize, spacing);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ padding: spacing.m, fontSize: fontSize.xxx }}>Profile Screen</Text>
            <Button title="Change Appearance" onPress={toggleTheme} color={colors.primary} />
        </SafeAreaView>
    );
}

const createStyles = (colors, fontSize, spacing) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
})

export default Profile;