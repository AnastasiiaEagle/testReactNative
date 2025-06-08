import HomeScreen from "@/src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import TestScreen from "@/src/screens/TestScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Index() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="index">
                <Stack.Screen 
                    name="index" 
                    component={HomeScreen}
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="test" 
                    component={TestScreen}
                    options={{ headerShown: true }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
