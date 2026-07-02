import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import useTheme from '../../store/useTheme';

const Profile = () => {
    const { toggleTheme, spacing, fontSize, colors } = useTheme();
    return (
        <View style={styles.container}>
            <Text style={{ padding: spacing.m, fontSize: fontSize.xxx }}>Profile Screen</Text>
            <Button title="Change Appearance" onPress={toggleTheme} color={colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Profile;