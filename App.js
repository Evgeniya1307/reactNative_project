import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{/*активирует нативную навигацию,позволит иметь разные экраны внутри */}
    <TailwindProvider>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />{/*экран главной страницы */}
    </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

