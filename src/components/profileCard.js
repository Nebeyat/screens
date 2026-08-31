import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import useTheme from "../store/useTheme";

const ProfileCard = ({ person = {} }) => {
    // Destructure theme with fallbacks in case hook returns undefined
    const theme = useTheme() || {};
    const colors = theme.colors || {};
    const fontSize = theme.fontSize || {};
    const spacing = theme.spacing || {};

    return (
        <View style={{
            marginTop: spacing.l ?? 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: colors.surfaceBg ?? '#FFFFFF',
            padding: spacing.l ?? 16,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: colors.surfaceSecondary ?? '#E5E5EA',
        }}>
            <Image 
                source={{ uri: person?.imageUrl || 'https://via.placeholder.com/60' }}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    marginRight: spacing.m ?? 12,
                }}
            />
            <View style={{ marginLeft: spacing.m ?? 12 }}>
                <Text style={{
                    fontSize: fontSize.bodylarge ?? 18,
                    fontFamily: "syne_700Bold",
                    color: colors.textPrimary ?? '#000000',
                    marginTop: spacing.s ?? 4,
                }}>
                    {person?.name || 'User Name'}
                </Text>

                <Text style={{
                    fontSize: fontSize.s ?? 14,
                    fontFamily: "syne_400Regular",
                    color: colors.textSecondary ?? '#666666',
                    marginTop: spacing.s ?? 4,
                }}>
                    {person?.email || 'user@example.com'}
                </Text>

                <View style={{
                    alignSelf: 'flex-start',
                    padding: spacing.sm ?? 6,
                    backgroundColor: colors.surfaceSecondary ?? '#F0F0F0',
                    borderRadius: 5,
                    marginTop: spacing.s ?? 4,
                    alignItems: 'center',
                    justifyContent: 'center' 
                }}>
                    <Text style={{
                        fontSize: fontSize.caption ?? 12,
                        fontFamily: "syne_700Bold",
                        color: colors.accentPrimary ?? '#007AFF',
                    }}>
                        {person?.role || 'Member'}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ProfileCard;