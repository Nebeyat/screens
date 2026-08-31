import React from 'react'; // Capital R
import { StyleSheet, Text, View } from "react-native"; // Capital S in StyleSheet
import useTheme from '../store/useTheme';

const StatusCard = ({ readCount, statusText }) => {
    const { colors, fontSize, spacing } = useTheme();
    
    return (
        <View style={{
            backgroundColor: colors.surfaceBg,
            padding: spacing.xx || spacing.l || 16,
            borderRadius: 10,
            alignItems: 'center', // Fixed 'alignItem' -> 'alignItems'
            justifyContent: 'center',
            flex: 1,
            marginHorizontal: spacing.s,
        }}>
            {/* Fixed {read} -> {readCount} */}
            <Text style={{
                color: colors.textPrimary,
                fontFamily: 'syne_800ExtraBold',
                fontSize: fontSize.newsListTitle,
            }}>
                {readCount}
            </Text>
            
            <Text style={{
                fontSize: fontSize.caption,
                color: colors.textSecondary,
            }}>
                {statusText}
            </Text>   
        </View>
    );
};

// Fixed 'styleSheet' -> 'StyleSheet'
const styles = StyleSheet.create({});

export default StatusCard;