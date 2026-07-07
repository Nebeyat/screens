import React from 'react';
import { StyleSheet, View, Pressable, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeroTitle from './heroTitle';
import Tag from './tag';
import Caption from './caption';
import useTheme from '../store/useTheme';

const Card = ({ title }) => {
const source = { uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1170&q=80' };
    const { colors, fontSize, spacing } = useTheme();
    const styles = createStyles(colors, fontSize, spacing);

    return (
        <Pressable
            onPress={() => alert('Card pressed')}
            style={[styles.card, { borderRadius: spacing.xx }]}
        >
            <ImageBackground
                source={source}
                style={styles.imageBackground}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.25)', 'rgba(0,0,0,0.82)']}
                    style={[styles.linearGradient, { padding: spacing.l }]}
                >
                    <View style={styles.content}>
                        <Tag tagLabel={'LIVE'} />
                        <View style={styles.contents}>
                            <HeroTitle title={title} />
                            <Caption author={'john doe'} readTime={'5 min read'} />
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </Pressable>
    );
}

const createStyles = (colors, fontSize, spacing) => StyleSheet.create({
    card: {
        height: 200,
        width: '100%',
        overflow: 'hidden',
    },
    imageBackground: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    contents: {
        justifyContent: 'flex-end',
    },
});

export default Card;