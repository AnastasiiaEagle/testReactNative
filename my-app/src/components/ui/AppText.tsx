import { StyleSheet, Text, TextProps, Vibration } from "react-native";
import { COLORS } from "@/src/constants/ui";

interface AppTextProps extends TextProps {
  variant?: "primary" | "secondary" | "tertiary" | "default" | "error";
  children: React.ReactNode;
}

const AppText = ({ children, variant, ...props }: AppTextProps) => {

  return <Text style={
    variant === "primary" ? textStyle.primary :
    variant === "secondary" ? textStyle.secondary :
    variant === "tertiary" ? textStyle.tertiary :
    variant === "error" ? textStyle.error :
    textStyle.default} {...props}>
        {children}
    </Text>;
};

const textStyle = StyleSheet.create({
    primary: {
        color: COLORS.PRIMARY_TEXT,
        fontSize: 12,
        fontWeight: "bold",
        fontFamily: "Inter",
    },
    secondary: {
        color: COLORS.SECONDARY_TEXT,
        fontSize: 14,
        fontWeight:"normal",
        fontFamily: "Inter",
    },
    tertiary: {
        color: COLORS.TERTIARY_TEXT,
        fontSize: 16,
        fontWeight:"bold" ,
        fontFamily: "Inter",
    },
    default: {
        color: COLORS.PRIMARY_TEXT,
        fontSize: 16,
        fontWeight: "normal",
        fontFamily: "Inter",
    },
    error: {
        color: COLORS.PRIMARY_TEXT,
        fontSize: 16,
        fontWeight: "normal",
        fontFamily: "Inter",
    },
  });

export default AppText;
