import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Date from '../../components/date';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../../store/useTheme';
import Header from '../../components/header';
import Icon from '../../components/icon';
import SearchInput from '../../components/searchInput';

const Index = () => {
  const [searchText, setSearchText] = useState('');
  const { colors, fontSize, spacing, toggleTheme } = useTheme();
  const styles = createStyles(colors, fontSize, spacing);

  const notification = () => {
    Alert.alert('Notifications', "You have no new notifications");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: spacing.m }}>
        <View>
          <Date />
          <Header header={'fafiNews'} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name='moon-outline' action={toggleTheme} />
          <Icon name='notifications-outline' action={notification} />
        </View>
      </View>
      {/* Search Input */}
      <SearchInput value={searchText} onChangeText={setSearchText} />
    </SafeAreaView>
  );
}

const createStyles = (colors, fontSize, spacing) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.l,
  },
});

export default Index;