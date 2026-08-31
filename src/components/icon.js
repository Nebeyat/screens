import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "../store/useTheme";

export default function Icon({ name, action ,iconBackground}) {
    const { colors, fontSize, spacing } = useTheme();
    const styles = createStyles(iconBackground,colors, fontSize, spacing);

    return (
        <View style={styles.container}>
            <Ionicons name={name} size={16} color={colors.textSecondary} onPress={action} />
        </View>
    );
}

const createStyles = (iconBackground,colors, fontSize, spacing) => StyleSheet.create({
    container: {
        backgroundColor:iconBackground|| colors.surface,
        height: 30,
        width: 30,
        borderRadius: spacing.m,
        margin: spacing.s,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
    }
});