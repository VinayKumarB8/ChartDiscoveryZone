import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/dashboard/Dashboard";
import { VictoryNative } from "../screens/VictoryNative";
import { RNChartsKit } from "../screens/RNChartsKit";

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                 <Stack.Screen
                    name={'VictoryNative'}
                    component={VictoryNative}
                    options={{
                        header: () => null,
                        animationEnabled:false
                    }}
                />
                 <Stack.Screen
                    name={'RNChartsKit'}
                    component={RNChartsKit}
                    options={{
                        header: () => null,
                        animationEnabled:false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}