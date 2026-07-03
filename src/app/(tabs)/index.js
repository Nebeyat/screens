import React from 'react';
import { StyleSheet, View } from 'react-native';
import Date from '../../components/date';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../../store/useTheme';
import Header from '../../components/header';
import Icon from '../../components/icon';


const Index = () => {
  const { colors, fontSize, spacing } = useTheme();
  const styles = createStyles(colors, fontSize, spacing);
  return (
    
      <SafeAreaView style={styles.container}>
       <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',padding:spacing.m}}>
        <View>
        <Date />
        <Header header={'fafiNews'}/>
        </View>
        <View style={{flexDirection:'row'}}>
        <Icon name= 'moon-outline'/>
        <Icon name='notifications-outline'/>
        </View>
        </View>
      </SafeAreaView>

    
  );
}

const createStyles = (colors, fontSize, spacing) => StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.background,
  }
});

export default Index;
