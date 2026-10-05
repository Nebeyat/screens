import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import useTheme from '../store/useTheme';
const HeroTitle = ({ title,noItemFound }) => {
    const {colors,fontSize}= useTheme();
    return (
        <View>
            <Text style={{
                color:noItemFound?colors.textPrimary:"white",
                fontSize:fontSize.carouselTitle,fontFamily:'syne_700Bold'}}>{title}</Text>
        
        </View>
    );
}

const styles = StyleSheet.create({})

export default HeroTitle;
