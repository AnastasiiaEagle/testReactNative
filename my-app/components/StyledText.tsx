import { Text, TextProps, StyleSheet } from "react-native";
import { COLORS } from "@/constants/ui";

type StyledTextProps = TextProps;

const StyleText : React.FC<StyledTextProps> = ({style, ...props}) => {
    return <Text {...props} style={[styles.text, style]} />
}
const styles = StyleSheet.create({
    text: {
        color: COLORS.PRIMARY_TEXT
    }
})

export default StyleText;

