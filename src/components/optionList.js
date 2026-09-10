import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import useTheme from '../store/useTheme';
import Icon from "./icon";

const OptionList = ({ preferences = [] }) => {
  const { colors = {}, fontSize = {}, spacing = {} } = useTheme() || {};

  return (
    <ScrollView
      style={{
        marginTop: spacing.l ?? 16,
        backgroundColor: colors.surfaceBg ?? '#FFFFFF',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
      showsVerticalScrollIndicator={false}
    >
      {preferences?.map((pref, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          onPress={pref.action}
          style={{
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: colors.surfaceBg ?? '#FFFFFF',
            padding: spacing.m ?? 12,
            borderBottomWidth: index === preferences.length - 1 ? 0 : 1,
            borderColor: colors.surfaceSecondary ?? '#E5E5EA',
          }}
        >
          <Icon 
            name={pref.iconName || pref.icon}
            color={colors.textPrimary}
            iconBackground={'transparent'}
          />

          <View style={{ alignItems: "flex-start", flex: 1, marginLeft: spacing.sm ?? 8 }}>
            <Text
              style={{
                fontSize: fontSize.body ?? 16,
                color: colors.textPrimary ?? '#000000',
                fontFamily: "Syne_600SemiBold",
              }}
            >
              {pref.label || pref.title}
            </Text>

            {pref.status || pref.subtitle ? (
              <Text
                style={{
                  fontSize: fontSize.caption ?? 12,
                  color: colors.textSecondary ?? '#666666',
                }}
              >
                {pref.status || pref.subtitle}
              </Text>
            ) : null}
          </View>

          <Icon 
            name="chevron-forward-outline" 
            color={colors.textSecondary}
            iconBackground={'transparent'}
            style={{ marginLeft: 'auto' }}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default OptionList;
                