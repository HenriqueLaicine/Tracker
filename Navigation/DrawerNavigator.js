import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../Screens/Profile';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: true}}>
      <Drawer.Screen name="Tab" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}