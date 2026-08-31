import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../../store/useTheme';
import Header from '../../components/header';
import Icon from '../../components/icon';
import ProfileCard from '../../components/profileCard';
import StatusCard from '../../components/statusCard';
import OptionList from '../../components/optionList';
import { preferences } from '../../data/settingOptions';

const Profile = () => {
    const person = {
        name: 'Alex Morgan',
        email: 'alex.morgan@example.com',
        role: 'Pro Member',
        imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
    };

    const { fontSize, spacing, colors } = useTheme();
    // Matching parameter order: (colors, fontSize, spacing)
    const style = createStyles(colors, fontSize, spacing);

    const handleSettingPress = () => {
        Alert.alert('Settings', 'Settings button pressed');
    };

    console.log(`preferences: ${JSON.stringify(preferences)}`);

    return (
        <SafeAreaView style={[style.container, { paddingHorizontal: spacing.x }]} edges={['top', 'left', 'right']}>
            {/* Header section */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Header header={'Profile'} />
                <Icon name="setting-outline" color={colors.textPrimary} onPress={handleSettingPress} />
            </View> 

            {/* Profile Info */}
            <ProfileCard person={person} />

            {/* Status Cards */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: spacing.l }}>
                <StatusCard readCount={248} statusText={'Read'} />
                <StatusCard readCount={36} statusText={'Saved'} />
                <StatusCard readCount={'12d'} statusText={'Streak'} />
            </View>

            {/* Options List */}
            <Text style={{ color: colors.textSecondary, marginTop: spacing.l, marginBottom: spacing.s }}>
                PREFERENCES
            </Text>
            <OptionList preferences={preferences} />
        </SafeAreaView>
    );
};

const createStyles = (colors, fontSize, spacing) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1
    }
});

export default Profile;