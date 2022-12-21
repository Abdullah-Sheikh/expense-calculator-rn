import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, View } from 'react-native';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import {Ionicons} from '@expo/vector-icons'


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
export default function App() {
function ExpenseOverview(){
  return <BottomTabs.Navigator 
  screenOptions={
    {headerStyle:{backgroundColor: GlobalStyles.colors.primary500},
  headerTintColor: 'white',
tabBarActiveTintColor: GlobalStyles.colors.accent500}
  }
  >
    <BottomTabs.Screen name='RecentExpenses' component={RecentExpenses}
     options={{
      title:'Recent Expenses',
      tabBarLabel: 'Recent',
      tabBarIcon: ({color , size}) => (
        <Ionicons name="hourglass" size={size} color={color}/>
      )
    }}/>
    <BottomTabs.Screen 
    name='AllExpenses' 
    component={AllExpenses}
    options={{
      title:'All Expenses',
      tabBarLabel: 'All Expenses',
      tabBarIcon: ({color , size}) => (
        <Ionicons name="calendar" size={size} color={color}/>
      )
    }}/>
  </BottomTabs.Navigator>
}

  return (
   <>
   <StatusBar style="auto" />
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
    name='ExpensesOverview' 
    component={ExpenseOverview}
    options={{
       headerShown: false
    }}/>
      <Stack.Screen name='ManageExpense' component={ManageExpense}/>
     
    </Stack.Navigator>
   </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
