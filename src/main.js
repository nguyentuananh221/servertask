import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./navigations/AppNavigation";
import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";
export default function Main(props) {


    return (
        <Provider store={store}>
            
            <NavigationContainer>
                <AppNavigation/>
                <FlashMessage position="top" />
            </NavigationContainer>
        </Provider>

    )
}
