import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Pressable, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../store/useTheme';
import Caption from './caption';
import useBookmarkStore from "../store/useBookmarkStore";
import { getItems } from '../utils/storage';
import Tag from './tag';

const ListView = ({imageUrl, tagLable, title, postedTime, readTime}) => {
    const {colors, fontSize, spacing} = useTheme();
    const {addBookmark, removeBookmark} = useBookmarkStore();
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const checkBookmarkStatus = async () => {
            const bookmarks = await getItems('bookmarks');
            console.log(bookmarks);
            if(bookmarks){
                const parsedBookmarks = JSON.parse(bookmarks);
                console.log(parsedBookmarks);
                const isBookmarked = parsedBookmarks.some(
                    (articleTitle) => {
                        const result = articleTitle === title;
                        console.log(articleTitle, "---", title);
                        return result;
                    }
                );
                setIsBookmarked(isBookmarked);
            }
            else{
                setIsBookmarked(false);
            }
        };
        checkBookmarkStatus();
    }, [title]);

    const handleBookmarkPress = () => {
        if(isBookmarked){
            removeBookmark(title);
            console.log("Bookmark removed:", title);
        } else {
            addBookmark(title);
            console.log("Bookmark added:", title);
        }
        setIsBookmarked(!isBookmarked);
    };

    return (
        <View style={{flexDirection: "row", alignItems: "flex-start", paddingVertical: spacing.m}}>
            <Pressable onPress={() => Alert.alert("News Articles")}>
                <Image
                    source={{uri: imageUrl}}
                    style={[styles.imageCard, {borderRadius: spacing.m}]}
                />
            </Pressable>
            <View style={styles.content}>
                <Tag tagLable={tagLable} color={colors.overlayLight}/>
                <Text
                    numberOfLines={2}
                    style={[styles.titleText, {
                        color: colors.textPrimary,
                        fontSize: fontSize.bodylarge,
                    }]}
                >{title}</Text>
            </View>
            <View style={styles.footer}>
                <Caption postedTime={postedTime} readTime={readTime}/>
                <Ionicons
                    name={isBookmarked ? "bookmark" : "bookmark-outline"}
                    size={20}
                    color={colors.accentPrimary}
                    onPress={handleBookmarkPress}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageCard: {
        width: 110,
        height: 110,
    },
    titleText: {
        marginTop: 10,
        fontFamily: 'syne_500Medium',
    },
    content: {
        flex: 1,
        marginLeft: 8,
        justifyContent: "space-between",
    },
    footer: {
        marginTop: 10,
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default ListView;