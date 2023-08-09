import {Text, View} from "react-native";
import GlobalStyles from "../../styles/global.styles";
import {StatusBar} from "expo-status-bar";

export const ListPage = () => {
    return (
        <View style={GlobalStyles.container}>
            <Text>GENERAL KENOBI!</Text>
            <StatusBar style="dark"/>
        </View>
    )
}