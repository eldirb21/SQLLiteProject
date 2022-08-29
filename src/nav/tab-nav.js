import {View, Text, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabNav} from './nav-data';
import Aicon from '../components/atoms/a-icon';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export default function TabNav() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();

  var tabBarOptions = {
    keyboardHidesTabBar: true,
    activeTintColor: '#278F02',
    activeBackgroundColor: 'hsl(104, 99%, 95%)',
    inactiveTintColor: '#000',
    adaptive: true,
    showLabel: true,
    style: {height: 55},
    tabStyle: {paddingBottom: 4},
    labelStyle: {
      fontSize: 14,
      marginTop: -10,
    },
  };
  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Portofolio') {
            iconName = focused
              ? 'document-text-outline'
              : 'document-text-outline';
          } else if (route.name === 'Article') {
            iconName = focused ? 'newspaper-outline' : 'newspaper-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person-outline' : 'person-outline';
          }

          return (
            <Aicon
              type="Ionicons"
              name={iconName}
              size={22}
              color={focused ? '#278F02' : 'rgba(0,0,0,0.6)'}
            />
          );
        },
        tabBarActiveBackgroundColor: 'hsl(104, 99%, 95%)',
        tabBarInactiveTintColor: 'rgba(0,0,0,0.6)',
        tabBarInactiveBackgroundColor: '#FFF',
        tabBarActiveTintColor: '#278F02',
      })}
    >
      {tabNav.map((item, index) => (
        <Tab.Screen key={index} name={item.name} component={item.path} />
      ))}
    </Tab.Navigator>
  );
}
