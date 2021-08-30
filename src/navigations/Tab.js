import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Meet, Settings } from '../screens/TabScreens';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabIcon = ({ name, size, color }) =>{
    return <MaterialCommunityIcons name={name} size={size} color={color}/>;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Meet"
            tabBarOptions={{ 
                activeTintColor: '#e91e63',
                inactiveTintColor : '#666666',
                labelPosition : 'below-icon' , 
                //showLabel : true,
                style : { //??????? no-activate
                    backgroundColor : 'blue',
                    borderTopColor : '#ffffff',
                    borderTopWidth : 2,
                },
            }}
            screenOptions={({ route }) => ({
                headerShown : false,
                tabBarIcon : props => {
                    let name = '';
                    if (route.name === 'Mail') name = 'email';
                    else if (route.name === 'Meet') name = 'video';
                    else name = 'settings';
                    return TabIcon({ ...props, name });
                },
            })}
            >
            <Tab.Screen 
                name = "Mail" 
                component={Mail}
                options ={{
                    tabBarLabel : 'Inbox',
                    tabBarIcon : props =>
                        TabIcon({
                            ...props,
                            name : props.focused ? 'email' : 'email-outline',
                         }),
                }}
                //options={{tabBarIcon : props => TabIcon({ ...props, name: 'email'}),
                //}} 
            />
            <Tab.Screen 
                name = "Meet" 
                component={Meet}
                options ={{
                    tabBarIcon : props =>
                        TabIcon({
                            ...props,
                            name : props.focused ? 'video' : 'video-outline',
                         }),
                }}
                //options={{tabBarIcon : props => TabIcon({ ...props, name: 'video'}),
                //}} 
            />
            <Tab.Screen 
                name = "Settings" 
                component={Settings} 
                options ={{
                    tabBarIcon : props =>
                        TabIcon({
                            ...props,
                            name : props.focused ? 'settings' : 'settings-outline',
                         }),
                }}
                //options={{tabBarIcon : props => TabIcon({ ...props, name: 'settings'}),
                //}} 
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;