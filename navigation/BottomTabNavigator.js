import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import BettingScreen from '../screens/BettingScreen';
//import Calculator from '../components/calculator';
import CalculationScreen from '../screens/CalculationScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-globe" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Screen Sizes',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-thumbs-up" />,
        }}
      />
      <BottomTab.Screen
        name="Links2"
        component={CalculationScreen}
        options={{
          title: 'Calculator',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-airplane" />,
        }}
      />
      <BottomTab.Screen
        name="Links3"
        component={BettingScreen}
        options={{
          title: 'Betting',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-football" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Links':
      return 'Screen Sizes';
    case 'Links2':
      return 'Calculator';
    case 'Links3':
      return 'Betting Screen ... K Woodall';
  }
}
