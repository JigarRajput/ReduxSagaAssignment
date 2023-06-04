import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { applicationStyles, colors, moderateScale } from '../theme';
import { strings } from '../constants';
import { HomeStack, OrdersList } from '../modules';
import { ClipboardText, House } from 'phosphor-react-native';
import { useDispatch } from 'react-redux';
import { CustomHeaderWithBack } from '../components';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: applicationStyles.tabBarStyle,
        unmountOnBlur: true,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <House
              color={focused ? colors.white : colors.grey}
              size={moderateScale(30)}
            />
          ),
          tabBarIconStyle: applicationStyles.tabBarIconStyle,
        }}
        name={strings.navigationRoutes.HomeStack}
        component={HomeStack}
      />
      <Tab.Screen
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate(strings.navigationRoutes.OrderListScreen);
          },
        })}
        options={{
          header: ({ navigation, route, options }) => (
            <CustomHeaderWithBack
              navigation={navigation}
              route={route}
              options={options}
              title={strings.ordersHistory}
            />
          ),
          tabBarStyle: applicationStyles.displayNone,
          tabBarIcon: ({ focused }) => (
            <ClipboardText
              color={focused ? colors.white : colors.grey}
              size={moderateScale(30)}
            />
          ),
          tabBarIconStyle: applicationStyles.tabBarIconStyle,
        }}
        name={strings.navigationRoutes.OrderListScreen}
        component={OrdersList}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
