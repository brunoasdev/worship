import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Visitors from './pages/Visitors';
import Orders from './pages/Orders';
import Notices from './pages/Notices';
import CustomTabBar from "./components/CustomTabBar";

export function Routes(){
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: true,
                tabBarActiveTintColor: "#121212",

                tabBarStyle:{
                    backgroundColor: "#FFF",
                    borderTopWidth: 0
                }
            }}

            tabBar={ (props) => <CustomTabBar{...props}/> }
        >
            <Tab.Screen
                name="Visitantes"
                component={Visitors}
                options={{
                    tabBarIcon: "team"
                }}/>
            
            <Tab.Screen
                name="Pedidos"
                component={Orders}
                options={{
                    tabBarIcon: "notification"
                }}/>
            
            <Tab.Screen
                name="Anúncios"
                component={Notices}
                options={{
                    tabBarIcon: "calendar"
                }}/>
        </Tab.Navigator>
    )
}