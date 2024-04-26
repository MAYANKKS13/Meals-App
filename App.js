import { Text, StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealScreen from './screens/MealScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouritesScreen from './screens/FavouritesScreen';
import IconButton from './components/IconButton';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
     return (
        <Drawer.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#8a7e77'},
          headerTintColor: '#ffffff',
          sceneContainerStyle: {backgroundColor: '#bac7b1'},
          drawerContentStyle: {backgroundColor: '#8a7e77'},
          drawerInactiveTintColor: '#ffffff',
          drawerActiveTintColor: '#616360',
          drawerActiveBackgroundColor: '#a8aab0'
      }}>
           <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
            drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size} />
           }} />
           <Drawer.Screen name='Favourites' component={FavouritesScreen} options={{
            drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} />
           }} />
        </Drawer.Navigator>
     );

}

export default function App() {
  return (
    <>
     <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: '#8a7e77'},
            headerTintColor: '#ffffff',
            contentStyle: {backgroundColor: '#bac7b1'}
        }}>
            <Stack.Screen
              name='Meals Categories' 
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}             
            /> 
            <Stack.Screen name='Meal Screen' component={MealScreen} />
            <Stack.Screen name='Meal Detail Screen' component={MealDetailScreen} options={{
              title: "About the Meal"
            }} />
        </Stack.Navigator>
      </NavigationContainer>     
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

/* 
#f3a3a3
#69605b
*/