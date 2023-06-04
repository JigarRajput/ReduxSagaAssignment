import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {strings} from '../constants';
import {LoginScreen} from '../modules/login';
import {SignUpScreen} from '../modules';
import BottomTabNavigator from './BottomTabs';

const Stack = createNativeStackNavigator();

const RootMain = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={strings.navigationRoutes.LoginScreen}
        component={LoginScreen}
      />
      <Stack.Screen
        name={strings.navigationRoutes.SignUpScreen}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={strings.navigationRoutes.BottomTabs}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootMain;
