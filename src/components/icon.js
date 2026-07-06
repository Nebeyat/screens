import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "../store/useTheme";

export default function Icon({ name, action }) {
    const { colors, fontSize, spacing } = useTheme();
    const styles = createStyles(colors, fontSize, spacing);

    return (
        <View style={styles.container}>
            <Ionicons name={name} size={16} color={colors.textSecondary} onPress={action} />
        </View>
    );
}

const createStyles = (colors, fontSize, spacing) => StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        height: 30,
        width: 30,
        borderRadius: 10,
        margin: spacing.s,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    }
});