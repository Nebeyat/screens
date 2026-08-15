import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Pressable, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';
import useTheme from '../../store/useTheme';
import SearchInput from '../../components/searchInput';
import { categories } from '../../data/categories';
import CategoryCard from '../../components/categoryCard';

const Category = () => {
    const { colors, fontSize, spacing } = useTheme();
    const styles = createStyles(colors, fontSize, spacing);
    const [searchCategory, setSearchCategory] = useState('');

    // Filter categories based on search input
    const filteredCategories = categories.filter(item => 
        item.categoryName?.toLowerCase().includes(searchCategory.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={filteredCategories}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={{ padding: spacing.m, gap: spacing.m }}
                columnWrapperStyle={{ justifyContent: 'space-between', gap: spacing.m }}
                // ✅ Rendering top sections in ListHeaderComponent prevents layout overlaps
                ListHeaderComponent={
                    <View style={{ marginBottom: spacing.m, gap: spacing.s }}>
                        <Header header={'category'} />
                        <Text style={{ color: colors.textSecondary, fontSize: fontSize.body }}>
                            explore stories across the tech world
                        </Text>
                        <SearchInput 
                            value={searchCategory}
                            onChangeText={setSearchCategory}
                            placeholder={'search categories'}
                        />
                    </View>
                }
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => Alert.alert(`You selected ${item.categoryName}`)}
                        style={{
                            flex: 1, // ✅ Uses dynamic grid flex sizing instead of width: '50%'
                            borderColor: colors.surfaceSecondary,
                            padding: spacing.l,
                            borderWidth: 1,
                            backgroundColor: colors.surfaceBg,
                            borderRadius: spacing.m,
                        }}
                    >
                        <CategoryCard
                            iconName={item.iconName}
                            iconColor={item.iconColor}
                            iconBackground={item.iconBackground}
                            categoryName={item.categoryName}
                            articleCount={item.articleCount}
                        />
                    </Pressable>
                )}
            />
        </SafeAreaView>
    );
};

const createStyles = (colors, fontSize, spacing) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
    }
});

export default Category;