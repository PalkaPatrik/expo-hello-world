import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {WelcomePage} from "@pages/welcome/welcome.page";
import {ListPage} from "@pages/list/list.page";
import {AppRoutes} from "@entities/app-routes";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={AppRoutes.welcome} component={WelcomePage} options={{title: 'Welcome', headerShown: false}}/>
                <Stack.Screen name={AppRoutes.list} component={ListPage} options={{title: 'List', headerShown: true, headerBackTitle: 'Go back'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}