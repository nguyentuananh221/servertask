import { createStackNavigator } from "@react-navigation/stack";
import Startappscreen from "../screens/StartAppScreen";


const Stack = createStackNavigator();

function AppNavigation() {

    return (
        <Stack.Navigator screenOptions={{
            headerShown : false
        }}
                // initialRouteName={userToken ? 'HomeScreen' : 'StartScreen'}
        >
            <Stack.Screen name="StartScreen" component={Startappscreen} />
            {/* <Stack.Screen name="LoginScreen" component={Loginscreen} />
            <Stack.Screen name="RegisterScreen" component={Registerscreen} />
            { <Stack.Screen name="StudentNavigation" component={Appdrawer} /> }
            <Stack.Screen name = "StudentNavigation" component={Studentnavigation}/>
            <Stack.Screen name = "TeacherNavigation" component={TeacherNavigation}/> */}
        </Stack.Navigator>
    );
}

export default AppNavigation