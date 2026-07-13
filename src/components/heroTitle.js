import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import useTheme from '../store/useTheme';
const HeroTitle = ({ title }) => {
    const {colors,fontSize}= useTheme();
    return (
        <View>
            <Text>{title}</Text>
        
        </View>
    );
}

const styles = StyleSheet.create({})

export default HeroTitle;
