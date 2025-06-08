import { TouchableOpacity, StyleSheet, GestureResponderEvent, Vibration } from "react-native";
import AppText from "./AppText";

type ButtonProps = {
    size?: "sm" | "md" | "lg";
    color?: "primary" | "secondary" | "tertiary";
    outline?: boolean;
    onPress: (event: GestureResponderEvent) => void;
    children: React.ReactNode;
}

const CustomButton = ({ size = "md", color = "primary", outline = false, onPress, children }: ButtonProps) => {
    const handlePress = (event: GestureResponderEvent) => {
        Vibration.vibrate(50)
        onPress(event)
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <AppText>{children}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontWeight: "600",
      fontFamily: "Inter",
    },
  });

export default CustomButton;