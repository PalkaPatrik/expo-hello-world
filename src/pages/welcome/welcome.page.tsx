import {Button, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import GlobalStyles from "@styles/global.styles";
import WelcomeStyles from "./welcome.styles";
import Colors from "@styles/colors";
import {WelcomeProps} from "@pages/welcome/welcome.props";
import {AppRoutes} from "@entities/app-routes";

export const WelcomePage = ({navigation}: WelcomeProps) => {
    return (
        <View style={GlobalStyles.container}>
            <Text style={WelcomeStyles.header}>Hello there</Text>
            <Button title="Continue"
                    color={Colors.primary}
                    onPress={() => navigation.navigate(AppRoutes.list)}/>
            <StatusBar style="light"/>
        </View>
    );
}